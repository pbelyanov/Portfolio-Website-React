import { useState } from "react";

import("./calcStyle.css");

export function CalculatorApp() {
  const [expresson, changeExpression] = useState("");
  const nums = [];
  for (let i = 0; i <= 9; i++) {
    nums.push(i);
  }
  console.log(nums);
  const operands = ["+", "-", "/", "*"];

  return (
    <div id="calcPage">
      <div className="nums">
        {nums.map((x) => (
          <a>{x}</a>
        ))}
      </div>
    </div>
  );
}
