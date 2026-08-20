const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("Fruits: ", fruits);
console.log("Length: ", fruits.length);
console.log("Element at index 2: ", fruits[2]);
console.log("Last element: ", fruits[fruits.length-1]);

let vegetables = [];

for (i = 1; i <= 3; i++) {
    vegetable = prompt("Enter the name of a vegetable: ");
    vegetables.push(vegetable);
}

console.log("Vegetables: ", vegetables);
console.log("Length: ", vegetables.length);
