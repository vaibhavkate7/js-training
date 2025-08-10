function evenNumber(num) {
  if (typeof (num) == "number") {
    let remainder = num % 2;
    if (remainder == 0) {
      console.log("given number is even")
    }
  } else {
    console.log("invalid number")
  }
}

evenNumber(3);