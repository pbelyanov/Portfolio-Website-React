import { useState, useEffect } from "react";

import("./calcStyle.css");

export function CalculatorApp() {
  const [firstNum, changeFirstNum] = useState("");
  const [operand, changeOperand] = useState(null);
  const [secondNum, changeSecondNum] = useState("");

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      let currentNum = e.key;

      if (nums.includes(Number(currentNum)) || e.key === ".") {
        // console.log(e.key);
        numClicked(e.key);
      }
      if (e.key === "Enter") {
        getResult();
        console.log(firstNum, secondNum);
      }
    });
  }, []);

  const nums = [];
  for (let i = 1; i <= 9; i++) {
    nums.push(i);
  }
  nums.push(0);
  nums.push(".");

  const operands = ["+", "-", "/", "*"];

  function numClicked(e) {
    if (!operand) {
      if (!nums.includes(Number(e))) {
        const currentResult = firstNum + e.target.innerHTML;
        changeFirstNum(currentResult);
      } else {
        const currentResult = firstNum + e;
        changeFirstNum(currentResult);
      }
    } else {
      const currentResult = secondNum + e.target.innerHTML;
      changeSecondNum(currentResult);
    }
  }

  function operandClicked(e) {
    if (!operand) {
      changeOperand(e.target.innerHTML);
    } else {
      return;
    }
  }

  function clearEverything(e) {
    changeFirstNum("");
    changeOperand(null);
    changeSecondNum("");
  }

  function getResult() {
    let result = 0;
    switch (operand) {
      case "+":
        result = Number(firstNum) + Number(secondNum);
        break;
      case "-":
        result = Number(firstNum) - Number(secondNum);
        break;
      case "/":
        result = Number(firstNum) / Number(secondNum);
        break;
      case "*":
        result = Number(firstNum) * Number(secondNum);
        break;
    }
    changeFirstNum(result);
    changeOperand(null);
    changeSecondNum("");
  }

  // function handleKeyPress(e) {
  //   console.log(e.key);
  // }

  return (
    <div id="calcPage">
      <div className="calcApp">
        <div className="calcScreen">
          <div id="topSide">{operand ? `${firstNum} ${operand}` : null}</div>
          <div id="botSide">{!operand ? firstNum : secondNum}</div>
        </div>
        <div className="specialButtons">
          <button id="allClear" onClick={clearEverything}>
            AC
          </button>
          <button id="equals" onClick={getResult}>
            =
          </button>
        </div>
        <div className="calcButtons">
          <div className="nums">
            {nums.map((x) => (
              <button id={`num${x}`} onClick={numClicked} key={x}>
                {x}
              </button>
            ))}
          </div>
          <div className="operands">
            {operands.map((x) => (
              <button onClick={operandClicked}>{x}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
