const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnPlus = document.getElementById("btnPlus");
const btnDivide = document.getElementById("btnDivide");
const btnTimes = document.getElementById("btnTimes");
const btn1Clean = document.getElementById("btnClean");
const btnEquals = document.getElementById("btnEquals");

const result = document.querySelector(".Result");

// btn1.addEventListener("click", () => {
//   const btn1Value = btn1.textContent;
//   console.log(btn1Value);
//   result.innerHTML = btn1Value;
// });
// btn2.addEventListener("click", () => {
//   const btn2Value = btn2.textContent;
//   console.log(btn2Value);
//   result.innerHTML = btn2Value;
// });
// btn3.addEventListener("click", () => {
//   const btn3Value = btn3.textContent;
//   console.log(btn3Value);
//   result.innerHTML = btn3Value;
// });
// btn4.addEventListener("click", () => {
//   const btn4Value = btn4.textContent;
//   console.log(btn4Value);
//   result.innerHTML = btn4Value;
// });
// btn5.addEventListener("click", () => {
//   const btn5Value = btn5.textContent;
//   console.log(btn5Value);
//   result.innerHTML = btn5Value;
// });

function Calculator() {
  return (
    <div className="Container">
      <div className="Result">0</div>
      <div className="ButtonContainer">
        <button id="btn1">1</button>
        <button id="btn2">2</button>
        <button id="btn3">3</button>
        <button id="btnPlus">+</button>
        <br></br>
        <button id="btn4">4</button>
        <button id="btn5">5</button>
        <button id="btn6">6</button>
        <button id="btnDivision">/</button>
        <br></br>
        <button id="btn7">7</button>
        <button id="btn8">8</button>
        <button id="btn9">9</button>
        <button id="btnTimes">*</button>
        <br></br>
        <button id="btn0">0</button>
        <button id="btnClean">C</button>
      </div>
    </div>
  );
}

export default Calculator;
