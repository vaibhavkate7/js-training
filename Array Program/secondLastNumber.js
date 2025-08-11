function findSecondLargest(arr) {
    let largest = 0;
    let secondLargest = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num > largest) {
            secondLargest = largest; 
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }
    console.log(secondLargest);
}
let arr = [5, 8, 3, 9, 2, 7];
findSecondLargest(arr); 
