function checkArithmeticOperations(num1, num2, operation) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
      return
    case '/':
      return num1 / num2;
      return
    default:
      console.log("number is invalid")
  }
}

let res = checkArithmeticOperations(5, 2, "+");
console.log(res);
