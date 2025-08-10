function firstNumber(num) {
  let count = 1
  let sum = 0
  while (count <= 10) {
    sum = count + sum
    count++
  }
  console.log(sum)
}
firstNumber(10)