let arr = [15, 12, 30, 25, 18, 32, 74]
function findEvenNumberInArray(arr) {
  let evenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenArray.push(arr[i]);
    }
  }
  console.log(evenArray);
}

findEvenNumberInArray(arr);