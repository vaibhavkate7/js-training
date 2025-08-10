function starPatern(num) {
  let line = 1;
  while (line <= num) {
    let count = 1;
    let star = ""
    while (count <= line) {
      star = star += "*"
      count++
    }
    console.log(star)
    line++
  }
  // reverse
  let reserveLine = 1;
  while (reserveLine <= num) {
    let count = 1;
    let star = ""
    while (count <= num - reserveLine) {
      star = star += "*"
      count++
    }
    console.log(star)
    reserveLine++
  }
}

starPatern(5)

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *