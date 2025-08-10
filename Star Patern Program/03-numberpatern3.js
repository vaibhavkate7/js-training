function printNumber(num) {
  let line = 0;
  while (line <= num) {
    let count = 1;
    let num1 = ''
    while (count <= line) {
      num1 = num1 + '1'
      count++
    }
    console.log(num1)
    line++
  }
}
printNumber(5)


// 1
// 11
// 111
// 1111
// 11111
