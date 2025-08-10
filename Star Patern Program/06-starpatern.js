function starPrint(num) {
  let line = 0;
  while (line < num) {
    let count = 1;
    let star = ""
    while (count <= (num - line)) {
      star = star + "*"
      count++
    }
    line++
    console.log(star)
  }
}
starPrint(5)

// *****
// ****
// ***
// **
// *