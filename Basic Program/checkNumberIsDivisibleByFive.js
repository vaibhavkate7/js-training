function checkNumberIsDivisibleByFive(num) {
  let res = num % 5;
  if (res == 0) {
    console.log("Number is divisible by five")
  } else {
    console.log("Number is Not divisible by five")
  }
}
checkNumberIsDivisibleByFive(10)
