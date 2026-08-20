let numbers = [];

for (i = 1; i<= 5; i++) {
    number = prompt("Enter a number: ");
    numbers.push(number);
}

console.log("Array of your entered numbers: ", numbers);

/* search for item in array */

target = prompt("Enter a number to search: ");

if (numbers.includes(target)) {
    console.log(target, "is in the array.");
} else {
    console.log(target, "is not in the array.");
}

/* delete last item */

numbers.pop(numbers.length-1);

console.log("Updated array: ", numbers);

/* sort array */

numbers.sort((a, b) => a-b);

console.log("Sorted array: ", numbers);