let arr1 = [4, 8, 1, 8, 9, 5, 3];
let arr2 = [6, 3, 6, 1, 9, 2, 5];

function addTwoArray(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result[i] = arr1[i] + arr2[i];
  }
  console.log("result:", result);

}
addTwoArray(arr1, arr2)



