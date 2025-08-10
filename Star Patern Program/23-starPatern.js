function starPatern(num) {
  for (let line = 1; line <= num; line++) {
    let lineCount = ""
    for (let spaceCount = 1; spaceCount <= num - line; spaceCount++) {
      lineCount = lineCount += " "
    }
    for (let starCount = 1; starCount <= line + line - 1; starCount++) {
      lineCount = lineCount += "*"
    }
    console.log(lineCount);
  }
  for (let line = 1; line <= num; line++) {
    let count = ""
    for (let spaceCount = 1; spaceCount <= line; spaceCount++) {
      count = count + " "
    }
    for (let starCount = 1; starCount <= num - line - 1 + num - line; starCount++) {
      count = count + "*"
    }
    console.log(count);
  }
}

starPatern(5)

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *