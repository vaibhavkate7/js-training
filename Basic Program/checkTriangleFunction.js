function checkTriangleFunction(a, b, c) {
  if (a == b && a == c && b == c) {
    console.log("Equilateral")
  } else if (a == b || a == c || b == c) {
    console.log("Isosceles")
  } else {
    console.log("Scalene")
  }
}
checkTriangleFunction(11, 13, 12)
