function sumNumbersBetweenZeroAndTen(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] < 10) {
            sum += arr[i];
        }
    }
    return sum;
}

let numbers = [1, 53, 11, 8, 3, 6];
let result = sumNumbersBetweenZeroAndTen(numbers);
console.log(result); 
