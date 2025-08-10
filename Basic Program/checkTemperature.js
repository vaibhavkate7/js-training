function checkTemperature(num) {
  if (num >= 40) {
    console.log("Very Hot")
  } else if (num >= 30 && num <= 39) {
    console.log("hot")
  } else if (num >= 20 && num <= 29) {
    console.log("warm")
  } else if (num >= 10 && num <= 19) {
    console.log("vary cold")
  } else {
    console.log("water")
  }
}

checkTemperature(15)
