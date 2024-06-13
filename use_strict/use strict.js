"use strict";

function hasDuplicates(array) {
    const seenElements = new Set();
    for (let i = 0; i < array.length; i++) {
        if (seenElements.has(array[i])) {
            return true;
        }
        seenElements.add(array[i]);
    }
    return false;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 1, 2, 3, 4, 5];

console.log(hasDuplicates(array1)); // false
console.log(hasDuplicates(array2)); // true
