function printNumber(num) {
  let line = 0;
  while (line <= num) {
    let count = 1;
    let num1 = ''
    while (count <= line) {
      num1 = num1 + count;
      count++
    }
    console.log(num1)
    line++
  }
}
printNumber(5)



// 1
// 12
// 123
// 1234
// 12345