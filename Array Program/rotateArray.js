  let arr=[1,2,3,4,5,6,7];
  let k=2;

   if (k>arr.length){
    console.log("Value of k is greater than array length");
    
   }else{
 k = k % arr.length;
  let newarr= arr.slice(-k).concat(arr.slice(0,-k))
  console.log(newarr);
   }
 
  