function starPattern(num) {
  let line = 1;
  while (line <= num) {
    let space = 1;
    let starLine = "";
    while (space <= num - line) {
      starLine += " ";
      space++;
    }
    let star = 1;
    while (star <= line) {
      starLine += "*"
      star++;
    }
    star = 1;
    while (star <= line) {
      starLine = starLine + "*"
      star++
    }
    console.log(starLine);
    line++;
  }
}

starPattern(5)

//     **
//    ****
//   ******
//  ********
// **********