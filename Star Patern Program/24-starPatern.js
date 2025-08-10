function starPater(num) {
  for (let line = 1; line <= num; line++) {
    let lineSpace = ""
    for (let spaceCount = 1; spaceCount <= line - 1; spaceCount++) {
      lineSpace = lineSpace + " "
    }
    for (let starCount = 1; starCount <= num - line + num - line - 1; starCount++) {
      lineSpace = lineSpace + "*"
    }
    console.log(lineSpace);
  }
  for (let line = 1; line <= num; line++) {
    let lineCount = ""
    for (let spaceCount = 1; spaceCount <= num - line; spaceCount++) {
      lineCount = lineCount + " "
    }
    for (let starCount = 1; starCount <= line + line - 1; starCount++) {
      lineCount = lineCount + "*"
    }
    console.log(lineCount);
  }
}
starPater(5)