let arr = [1, 2, 3, 4, 5, 6, 7, 8,];
function copyOneArrayToAnotherArray(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i];
  }
  console.log(arr2);
}
copyOneArrayToAnotherArray(arr)
