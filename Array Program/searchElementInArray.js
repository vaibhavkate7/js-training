let arr = [10, 20, 50, 40, 50, 50];
function searchElementInArray(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      count++;
    }
  }
  if (count >= 1) {
    console.log("number is present", count);
  } else {
    console.log("number is Not Present");
  }
}
searchElementInArray(arr, 10)