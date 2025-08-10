// Write a program to find given number is even or not.

function evenNumber(num) {
  if (typeof (num) == "number") {
    let remainder = num % 2;
    if (remainder == 0) {
      console.log("Given number is even number.")
    } else {
      console.log("Given number is not even number.");
    }
  } else {
    console.log("Given number is invalid number.")
  }
}

evenNumber(3);