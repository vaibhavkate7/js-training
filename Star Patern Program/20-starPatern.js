function starPatern(num) {
  for (let line = 1; line <= num; line++) {
    let space = 1;
    let spacecount = ""
    for (space = 1; space <= num - line; space++) {
      spacecount = spacecount + " "
    }
    let star = 1;
    for (star = 1; star <= line; star++) {
      spacecount = spacecount + "*"
    }
    console.log(spacecount);
  }
  // reverse
  for (let line = 1; line <= num; line++) {
    let space = 1;
    let spaceCount = ""
    for (space = 1; space <= line - 1; space++) {
      spaceCount = spaceCount += " "
    }
    let count = 1;
    for (count = 2; count <= num - (line - 1); count++) {
      spaceCount = spaceCount += "*"
    }
    console.log(spaceCount)
  }
}
starPatern(5)
//     *
//    **
//   ***
//  ****
// *****
// *****
//  ****
//   ***
//    **
//     *