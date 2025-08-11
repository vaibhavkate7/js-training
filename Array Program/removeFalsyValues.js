let arr = [4, false, 0, 6, "", null, 3, undefined, 1, NaN, 9];
let result = [];
for (let i = 0; i < arr.length; i++) {
  let value = arr[i];
  if (arr[i]){
     result.push(value);
  }
   
}

console.log(result); 