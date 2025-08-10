function starPatern(num) {
  for (let line = 1; line <= num; line++) {
    let space = 1;
    let spaceCount = ""
    for (space = 1; space <= line - 1; space++) {
      spaceCount = spaceCount + " "
    }
    let count = 1;
    for (count = 1; count <= num - (line - 1); count++) {
      spaceCount = spaceCount + "*"
    }
    console.log(spaceCount)
  }
  for (let line = 1; line <= num; line++) {
    let space = 1;
    let spaceCount = ""
    for (space = 1; space <= num - line; space++) {
      spaceCount = spaceCount + " "
    }
    let count = 1;
    for (count = 1; count <= line; count++) {
      spaceCount = spaceCount + "*"
    }
    console.log(spaceCount);
  }
}
starPatern(5)

// *****
//  ****
//   ***
//    **
//     *
//     *
//    **
//   ***
//  ****
// *****