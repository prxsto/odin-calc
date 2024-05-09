// get ui elements
const resultDisplay = document.getElementsByTagName("h1");
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

const addItems = (a, b) => a + b;
const subtractItems = (a, b) => a - b;
const multiplyItems = (a, b) => a * b;
const divideItems = (a, b) => {
  return (a / b).toFixed(6);
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
      if (secondNum === 0) {
        return "Error - cannot divide by zero, dingus.";
      }
      result = divideItems(firstNum, secondNum);
      break;
    default:
      break;
  }
  return result;
};

const updateDisplay = () => {
  const ints = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
  if (inputArray[-1] !== )
  resultDisplay.innerText = 
};

clearButton.addEventListener("click", () => {
  inputArray = [];
  console.log(inputArray);
  display.innerText = "0";
});

deleteButton.addEventListener("click", () => {
  const operatorList = [" ", "+", "-", "*", "/"];
  for (let i = 0; i < operatorList.length; i++) {
    if (inputArray[-1] !== operatorList[i]) inputArray.pop();
  }
  console.log(inputArray);
});

addButton.addEventListener("click", () => {
  inputArray.push(" + ");
  console.log(inputArray);
  return inputArray;
});
subtractButton.addEventListener("click", (input) => input.push(" - "));
multiplyButton.addEventListener("click", (input) => input.push(" * "));
divideButton.addEventListener("click", (input) => input.push(" / "));

zeroButton.addEventListener("click", () => {
  return inputArray.push("0");
});

oneButton.addEventListener("click", () => {
  return inputArray.push("1");
});

twoButton.addEventListener("click", () => {
  return inputArray.push("2");
});

threeButton.addEventListener("click", () => input.push("3"));
fourButton.addEventListener("click", () => input.push("4"));
fiveButton.addEventListener("click", () => input.push("5"));
sixButton.addEventListener("click", () => input.push("6"));
sevenButton.addEventListener("click", () => input.push("7"));
eightButton.addEventListener("click", () => input.push("8"));
nineButton.addEventListener("click", () => input.push("9"));

equalsButton.addEventListener("click", () => {
  console.log(inputArray.join(""));
  let [firstNum, operator, secondNum] = inputArray.join("").split(" ");
  operator = operator.trim();
  firstNum = firstNum.trim();
  secondNum = secondNum.trim();
  const result = operate(operator, firstNum, secondNum);
  console.log(result);
  display.innerText = result;
});
