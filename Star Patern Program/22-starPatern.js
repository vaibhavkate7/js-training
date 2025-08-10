function starPatern(num) {
   for (let line = 1; line <= num; line++) {
      let lineCount = "";
      for (countSpace = 1; countSpace <= line - 1; countSpace++) {
         lineCount = lineCount + " "
      }
      for (starCount = 1; starCount <= (num - line - 1) + (num - line); starCount++) {
         lineCount = lineCount + "*"
      }
      console.log(lineCount)
   }
}
starPatern(5)

//  *******
//   *****
//   ***
//    *