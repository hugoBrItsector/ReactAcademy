import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("0");

  const btnLogic = (btnContent) => {
    if (result === "0") {
      setResult(btnContent);
    } else {
      setResult(result + btnContent);
    }
  };

  const btnClean = () => {
    setResult("0");
  };

  const btnEquals = () => {
    setResult(eval(result));
  };

  return (
    <div className="Container">
      <div className="Result">{result}</div>
      <div className="ButtonContainer">
        <button id="btn1" onClick={() => btnLogic("1")}>
          1
        </button>
        <button id="btn2" onClick={() => btnLogic("2")}>
          2
        </button>
        <button id="btn3" onClick={() => btnLogic("3")}>
          3
        </button>
        <button id="btnPlus" onClick={() => btnLogic("+")}>
          +
        </button>
        <br></br>
        <button id="btn4" onClick={() => btnLogic("4")}>
          4
        </button>
        <button id="btn5" onClick={() => btnLogic("5")}>
          5
        </button>
        <button id="btn6" onClick={() => btnLogic("6")}>
          6
        </button>
        <button id="btnDivision" onClick={() => btnLogic("/")}>
          /
        </button>
        <br></br>
        <button id="btn7" onClick={() => btnLogic("7")}>
          7
        </button>
        <button id="btn8" onClick={() => btnLogic("8")}>
          8
        </button>
        <button id="btn9" onClick={() => btnLogic("9")}>
          9
        </button>
        <button id="btnTimes" onClick={() => btnLogic("*")}>
          X
        </button>
        <br></br>
        <button id="btn0" onClick={() => btnLogic("0")}>
          0
        </button>
        <button id="btnClean" onClick={btnClean}>
          C
        </button>
        <button id="btnEquals" onClick={btnEquals}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
