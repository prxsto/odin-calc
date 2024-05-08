const addItems = (a, b) => a + b;
const subtractItems = (a, b) => a - b;
const multiplyItems = (a, b) => a * b;
const divideItems = (a, b) => {
  return (a / b).toFixed(6);
};

// const firstNum = Number(prompt("Enter first number"));
// const operator = prompt("Enter operator");
// const secondNum = Number(prompt("Enter second number"));

const operate = (operator, firstNum, secondNum) => {
  let result;
  switch (operator) {
    case "+":
      result = addItems(firstNum, secondNum);
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

// console.log(operate(operator, firstNum, secondNum));
