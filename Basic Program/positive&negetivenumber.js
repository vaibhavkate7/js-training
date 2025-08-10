function checkNumberIsPositive(num) {
  if (typeof (num) == "number") {
    if (num > 0) {
      console.log("number is positive")
    } else if (num == 0) {
      console.log("number is Zero")
    } else {
      console.log("number is negitive")
    }
  } else {
    console.log("invalid number")
  }
}

checkNumberIsPositive(3);