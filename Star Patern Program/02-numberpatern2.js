function printNumber(num) {
  let line = 0;
  while (line <= num) {
    let count = 1;
    let num1 = ''
    while (count <= (num - line)) {
      num1 = num1 + count;
      count++
    }
    console.log(num1)
    line++
  }
}
printNumber(5)


// 12345
// 1234
// 123
// 12
// 1