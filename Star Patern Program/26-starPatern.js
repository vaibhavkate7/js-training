function starPatern(num) {
  for (let line = 1; line <= num; line++) {
    let lineCount = ""
    for (let starCount = 1; starCount <= line; starCount++) {
      lineCount += "*"
    }
    for (let spaceCount = 1; spaceCount <= (num - line) * 2; spaceCount++) {
      lineCount += " "
    }
    for (let starCount = 1; starCount <= line; starCount++) {
      lineCount += "*"
    }
    console.log(lineCount);
  }
}
starPatern(5)