function numberPatern(num) {
  let line = 0;
  while (line <= num) {
    let count = 1
    let lineContent = ""
    while (count <= line) {
      if (count % 2 == 0) {
        lineContent = lineContent + "0"
      } else {
        lineContent = lineContent + "1"
      }
      count++
    }
    console.log(lineContent)
    line++
  }
}
numberPatern(5)

// 1
// 10
// 101
// 1010
// 10101