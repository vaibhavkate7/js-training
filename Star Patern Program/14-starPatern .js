function starPatern(num) {
  for (let line = 1; line <= num; line++) {
    let star = ''
    for (let count = 1; count <= num - line; count++) {
      star += "*"
    }
    console.log(star);
  }
}
starPatern(5)

// ****
// ***
// **
// *
