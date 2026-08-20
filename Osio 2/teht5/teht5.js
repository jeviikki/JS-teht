function sortArray(array, order) {
    if (order == "asc") {
        sorted = array.toSorted((a, b) => a-b);
    } else if (order == "desc") {
        sorted = array.toSorted((b, a) => a-b);
    }
    return sorted
}

let numbers = [64, -666, 1001, 13, -999];

ascendingArray = sortArray(numbers, "asc");
descendingArray = sortArray(numbers, "desc");

console.log("Original array: ", numbers);
console.log("Array in ascending order: ", ascendingArray);
console.log("Array in descending order: ", descendingArray);
