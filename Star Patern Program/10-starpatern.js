function starpatern(num) {
  let line = 1;
  while (line <= num) {
    let space = 1;
    let spaceline = ""
    while (space <= line - 1) {
      spaceline = spaceline + " "
      space++
    }
    let count = 1;
    while (count <= num - (line - 1)) {
      spaceline = spaceline + "*"
      count++
    }
    console.log(spaceline)
    line++
  }
}
starpatern(5)

// *****
//  ****
//   ***
//    **
//     *
