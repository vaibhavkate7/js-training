function checkGreaterNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log("this number is greater " + num1)
  } else if (num2 > num1 && num2 > num3) {
    console.log("this number is greater" + num2)
  } else if (num3 > num1 && num3 > num2) {
    console.log("this number is greater" + num3)
  } else {
    console.log("this number are equal")
  }
}
checkGreaterNumber(7, 8, 7)