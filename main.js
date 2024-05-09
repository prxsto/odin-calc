// get ui elements
const resultDisplay = document.getElementById("result");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const subtractButton = document.getElementById("subtract");
const addButton = document.getElementById("add");
const equalsButton = document.getElementById("equals");
const decimalButton = document.getElementById("decimal");
const zeroButton = document.getElementById("zero");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");

let inputArray = [];
let result = "";
let calculated = false;

const addItems = (a, b) => a + b;
const subtractItems = (a, b) => a - b;
const multiplyItems = (a, b) => a * b;
const divideItems = (a, b) => {
  if (b === 0) {
    return "Error - cannot divide by zero";
  } else {
    let result = a / b;
    if (Number.isInteger(result)) {
      return Math.round(result);
    } else {
      return parseFloat((a / b).toFixed(4));
    }
  }
};

const operate = (operator, firstNum, secondNum) => {
  let result;
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);

  switch (operator) {
    case "+":
      result = addItems(firstNum, secondNum);
      console.log("added");
      break;
    case "-":
      result = subtractItems(firstNum, secondNum);
      break;
    case "*":
      result = multiplyItems(firstNum, secondNum);
      break;
    case "/":
      result = divideItems(firstNum, secondNum);
      break;
    default:
      break;
  }
  return result;
};

const updateDisplay = (value) => {
  resultDisplay.innerText = value;
  console.log("display updated");
};

clearButton.addEventListener("click", () => {
  inputArray = [];
  console.log(inputArray);
  updateDisplay("0");
});

deleteButton.addEventListener("click", () => {
  // const operatorList = [" ", "+", "-", "*", "/"];
  if (inputArray[-1] !== " ") {
    inputArray.pop();
  }
  updateDisplay(inputArray.join(""));
});

decimalButton.addEventListener("click", () => {
  if (inputArray[-1] !== " " && !inputArray.includes(".")) {
    inputArray.push(".");
    updateDisplay(inputArray.join(""));
  }
});

addButton.addEventListener("click", () => {
  if (result !== "" && calculated === true) {
    calculated = false;
  }
  inputArray.push(" + ");
  updateDisplay(inputArray.join(""));
});

subtractButton.addEventListener("click", () => {
  if (result !== "" && calculated === true) {
    calculated = false;
  }
  inputArray.push(" - ");
  updateDisplay(inputArray.join(""));
});

multiplyButton.addEventListener("click", () => {
  if (result !== "" && calculated === true) {
    calculated = false;
  }
  inputArray.push(" * ");
  updateDisplay(inputArray.join(""));
});

divideButton.addEventListener("click", () => {
  if (result !== "" && calculated === true) {
    calculated = false;
  }
  inputArray.push(" / ");
  updateDisplay(inputArray.join(""));
});

zeroButton.addEventListener("click", () => {
  if (result !== "" && calculated === true) {
    inputArray = [];
    calculated = false;
  }
  inputArray.push("0");
  updateDisplay(inputArray.join(""));
});

oneButton.addEventListener("click", () => {
  if (result !== "" && calculated === true) {
    inputArray = [];
    calculated = false;
  }
  inputArray.push("1");
  updateDisplay(inputArray.join(""));
});

twoButton.addEventListener("click", () => {
  if (result !== "" && calculated === true) {
    inputArray = [];
    calculated = false;
  }
  inputArray.push("2");
  updateDisplay(inputArray.join(""));
});

threeButton.addEventListener("click", () => {
  if (result !== "" && calculated === true) {
    inputArray = [];
    calculated = false;
  }
  inputArray.push("3");
  updateDisplay(inputArray.join(""));
});

fourButton.addEventListener("click", () => {
  if (result !== "" && calculated === true) {
    inputArray = [];
    calculated = false;
  }
  inputArray.push("4");
  updateDisplay(inputArray.join(""));
});

fiveButton.addEventListener("click", () => {
  if (result !== "" && calculated === true) {
    inputArray = [];
    calculated = false;
  }
  inputArray.push("5");
  updateDisplay(inputArray.join(""));
});

sixButton.addEventListener("click", () => {
  if (result !== "" && calculated === true) {
    inputArray = [];
    calculated = false;
  }
  inputArray.push("6");
  updateDisplay(inputArray.join(""));
});

sevenButton.addEventListener("click", () => {
  if (result !== "" && calculated === true) {
    inputArray = [];
    calculated = false;
  }
  inputArray.push("7");
  updateDisplay(inputArray.join(""));
});

eightButton.addEventListener("click", () => {
  if (result !== "" && calculated === true) {
    inputArray = [];
    calculated = false;
  }
  inputArray.push("8");
  updateDisplay(inputArray.join(""));
});

nineButton.addEventListener("click", () => {
  if (result !== "" && calculated === true) {
    inputArray = [];
    calculated = false;
  }
  inputArray.push("9");
  updateDisplay(inputArray.join(""));
});

equalsButton.addEventListener("click", () => {
  let [firstNum, operator, secondNum] = inputArray.join("").split(" ");
  operator = operator.trim();
  firstNum = firstNum.trim();
  secondNum = secondNum.trim();
  result = operate(operator, firstNum, secondNum);
  console.log(result);
  updateDisplay(result);
  inputArray = [`${result}`];
  calculated = true;
});
