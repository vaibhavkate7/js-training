function starPatern(num) {
  for (let line = 1; line <= num; line++) { // line
    let lineContent = "";
    for (let spaceCount = 1; spaceCount <= num - line; spaceCount++) {
      lineContent = lineContent + " ";
    }
    for (let starCount = 1; starCount <= (line + (line - 1)); starCount++) {
      lineContent = lineContent + "*";
    }
    console.log(lineContent)
  }
}
starPatern(5)

//     *
//    ***
//   *****
//  *******
// *********