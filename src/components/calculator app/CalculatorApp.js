import { useState } from "react";

import("./calcStyle.css");

export function CalculatorApp() {
  const [firstNum, changeFirstNum] = useState("");
  const [operand, changeOperand] = useState(null);
  const [secondNum, changeSecondNum] = useState("");

  const nums = [];
  for (let i = 1; i <= 9; i++) {
    nums.push(i);
  }
  nums.push("0");
  nums.push(".");
  nums.push("=");
  const operands = ["+", "-", "/", "*"];

  function numClicked(e) {
    if (!operand) {
      const currentResult = firstNum + e.target.innerHTML;
      changeFirstNum(currentResult);
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
              <button onClick={numClicked}>{x}</button>
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
