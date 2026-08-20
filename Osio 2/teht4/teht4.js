function sortArray(array) {
    sorted = array.toSorted((a, b) => a-b);
    return sorted
}

let numbers = [42, 151, 404, 21, 0];

sorted = sortArray(numbers);

console.log("Original array: ", numbers);
console.log("Sorted array: ", sorted);