function starpatern(num) {
  let line = 1;
  while (line <= num) {
    let count = 1;
    let star = ""
    while (count <= num - line + 1) {
      star = star + "*"
      count++
    }
    console.log(star)
    line++
  }
  line = 2;
  while (line <= num) {
    let count = 1;
    let star = ""
    while (count <= line) {
      star = star + "*"
      count++
    }
    console.log(star)
    line++
  }
}
starpatern(5)

