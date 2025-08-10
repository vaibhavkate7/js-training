let arr = [10, 20, 30, 40, 50, 60,];
function findReverseArray(arr) {
  let reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  console.log(reverseArray);
}
findReverseArray(arr);