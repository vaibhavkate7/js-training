function menuDrivenProgram(num1, num2, operation) {
  let res
  if (operation == "add") {
    res = num1 + num2
    return res
  } else if (operation == "subtract") {
    res = num1 - num2
    return res
  } else if (operation == "multiply") {
    res = num1 * num2
    return res
  } else if (operation == "divide") {
    res = num1 / num2
    return res
  } else {
    return "invalid choise"
  }
}

let result = menuDrivenProgram(45, 4, "add");
console.log(result);