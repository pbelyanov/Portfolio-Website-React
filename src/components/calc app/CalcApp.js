import { useState } from "react";

import("./calcStyle.css");

function CalcButton(props) {
  let className = "";
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
  if (nums.includes(props.value)) {
    className = "number";
  } else {
    className = "operand";
  }
  return (
    <a onClick={props.onClick} id={props.value} className={className}>
      {props.value}
    </a>
  );
}

export function CalcApp() {
  const buttons = [
    "C",
    "+/-",
    "%",
    "/",
    7,
    8,
    9,
    "x",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "del",
    "=",
  ];

  const [firstNum, changeFirstNum] = useState("");
  const [operand, changeOperand] = useState(null);
  const [secondNum, changeSecondNum] = useState("");

  function handleClick(e) {
    const typeOfButton = e.target.getAttribute("class");
    const buttonClicked = e.target.getAttribute("id");

    // Special Buttons Here
    if (buttonClicked === "C") {
      clearAll();
      return;
    }
    if (buttonClicked === "del") {
      del();
      return;
    }
    if (buttonClicked === "=") {
      getResult();
      return;
    }

    if (buttonClicked === "+/-") {
      changePositive();
      return;
    }

    // Normal Actions Here
    if (typeOfButton !== "operand") {
      if (buttonClicked === ".") {
        if (firstNum.includes(".")) {
          return;
        }
      }
      let currentNum = firstNum + buttonClicked;
      changeFirstNum(currentNum);
    } else {
      if (!operand) {
        changeOperand(buttonClicked);
        changeSecondNum(firstNum);
        changeFirstNum("");
      } else if (operand && firstNum.length > 0 && secondNum.length > 0) {
        getResult();
      }
    }
  }

  const changePositive = () => {
    const newArr = firstNum.split("");
    if (newArr[0] === "-") {
      const editedNum = newArr.shift();
      console.log(editedNum, newArr);
      changeFirstNum(newArr.join(""));
    } else {
      const editedNum = newArr.unshift("-");
      console.log(editedNum, newArr);
      changeFirstNum(newArr.join(""));
    }
  };

  function clearAll() {
    changeFirstNum("");
    changeOperand(null);
    changeSecondNum("");
  }

  const del = () => {
    const newArr = firstNum.split("");
    const editedNum = newArr.pop();
    console.log(editedNum, newArr);
    changeFirstNum(newArr.join(""));
  };

  const getResult = () => {
    let result = 0;
    if (firstNum.length === 0 || secondNum.length === 0) {
      return;
    }
    switch (operand) {
      case "+":
        result = Number(secondNum) + Number(firstNum);
        break;
      case "-":
        result = Number(secondNum) - Number(firstNum);
        break;
      case "x":
        result = Number(secondNum) * Number(firstNum);
        break;
      case "/":
        result = Number(secondNum) / Number(firstNum);
        break;
      case "%":
        result = Number(firstNum) * (Number(secondNum) / 100);
        break;
    }
    changeFirstNum(result);
    changeOperand(null);
    changeSecondNum("");
  };

  return (
    <div id="calcPage">
      <div id="calcApp">
        <div id="screen">
          <div id="topOfScreen">{`${secondNum} ${operand ? operand : ""}`}</div>
          <div id="botOfScreen">{firstNum}</div>
        </div>
        <div id="buttonsOfCalc">
          {buttons.map((x) => (
            <CalcButton onClick={handleClick} value={x} />
          ))}
        </div>
      </div>
    </div>
  );
}
