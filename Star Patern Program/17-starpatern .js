function starPatern(num) {
  for (let line = 1; line <= num; line++) {
    let star = ""
    for (let count = 1; count <= line; count++) {
      star += "*"
    }
    console.log(star);
  }
  // reverse
  for (reverse = 1; reverse <= num; reverse++) {
    let star = ""
    for (count = 1; count <= num - reverse; count++) {
      star += "*"
    }
    console.log(star);
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