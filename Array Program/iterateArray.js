function starpatern(num) {
  for (let line = 1; line <= num; line++) {
    let star = "";
    for (let count = 1; count <= num; count++) {
      star += "*"
    }
    console.log(star);
  }
}
starpatern(5)
