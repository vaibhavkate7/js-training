function numberpatern(num) {
  let line = 1
  while (line <= num) {
    let space = 1;
    let linecontent = ""
    while (space <= num - line) {
      linecontent = linecontent + " "
      space++
    }
    let count = 1;
    while (count <= line) {
      if (count % 2 == 0) {
        linecontent = linecontent + "0"
      } else {
        linecontent = linecontent + "1"
      }
      count++
    }
    console.log(linecontent)
    line++
  }
}
numberpatern(5)

//     1
//    10
//   101
//  1010
// 10101