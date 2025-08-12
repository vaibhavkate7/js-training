let arr = [1, 2, 3, 4, 5];
let newArr = [];
function replacingment(index, element) {
  for (let i = 0; i < arr.length; i++) {
    if (i == index) {
      newArr.push(element);
    }
    newArr.push(arr[i]);
  }
  console.log(newArr);
}
replacingment(2, 22)


