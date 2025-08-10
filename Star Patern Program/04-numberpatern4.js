function printNumber(num) {
  let line = 0;
  while (line <= num) {
    let count = 1;
    let num1 = ''
    while (count <= (num - line)) {
      num1 = num1 + '1'
      count++
    }
    console.log(num1)
    line++
  }
}
printNumber(5)


// 11111
// 1111
// 111
// 11
// 1