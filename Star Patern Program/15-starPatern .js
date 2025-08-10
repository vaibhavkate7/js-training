function starPatern(num) {
  for (let line = 1; line <= num; line++) {
    let space = 1;
    let spacecount = ""
    for (space = 1; space <= num - line; space++) {
      spacecount += " "
    }
    count = 1;
    for (let count = 1; count <= line; count++) {
      spacecount += "*"
    }
    console.log(spacecount)
  }
}
starPatern(6)

//      *
//     **
//    ***
//   ****
//  *****
// ******