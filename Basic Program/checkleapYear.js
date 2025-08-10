function checkleapYear(num) {
  if ((num % 400) == 0) {
    console.log("Year is leap")
  } else if ((num % 100) == 0) {
    console.log("Not year leap")
  } else if ((num % 4) == 0) {
    console.log("year is leap")
  } else {
    console.log("not year leap")
  }
}
checkleapYear(2025)