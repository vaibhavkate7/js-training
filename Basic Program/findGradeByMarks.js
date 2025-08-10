function findGradeByMarks(num) {
  if ((num >= 91) && (num <= 100)) {
    console.log("student is pass A ")
  } else if ((num >= 81) && (num <= 90)) {
    console.log("student is pass B ")
  } else if ((num >= 71) && (num <= 80)) {
    console.log("student is Pass c ")
  } else if ((num >= 61) && (num <= 70)) {
    console.log("student is Pass D ")
  } else {
    console.log("student is failed")
  }
}

checkStudentPassedOrFailed(60)