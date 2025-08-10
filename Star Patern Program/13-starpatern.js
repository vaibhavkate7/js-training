function starPatern(num) {
  let line = 1;
  while (line <= num) {//line
    let spaceCount = 1;
    let lineContent = "";
    while (spaceCount <= num - line) {//space
      lineContent = lineContent + " ";
      spaceCount++;
    }
    let startCount = 1;
    while (startCount <= line) {//star
      lineContent = lineContent + "*";
      startCount++;
    }
    console.log(lineContent);
    line++;
  }
  line = 1;
  while (line <= num - 1) {//line
    let spaceCount = 1;
    let lineContent = "";
    while (spaceCount <= line) {//space
      lineContent = lineContent + " ";
      spaceCount++;
    }
    spaceCount = 1;
    while (spaceCount <= num - line) {//start
      lineContent = lineContent + "*";
      spaceCount++;
    }
    console.log(lineContent);
    line++;
  }
}

starPatern(5)
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *