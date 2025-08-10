function checkGradeCharacter(gread) {
  switch (gread) {
    case 'A':
      console.log("Excellent")
      return;
    case 'B':
      console.log("very good")
      return;
    case 'C':
      console.log("good")
      return;
    case 'D':
      console.log("ok")
      return;
    case 'F':
      console.log("Not ok")
      return;
    default:
      console.log("faild")
  }
}

checkGradeCharacter('F')