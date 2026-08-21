let numbers = [];
let evens = [];
let number = [];

while (number != "done") {
    number = prompt("Enter a number (or 'done' to finish): ");
    numbers.push(number);
}

for (let i of numbers) {
    if (i % 2 == 0) {
        evens.push(i);
    }
}

document.getElementById("even-numbers").innerHTML = evens;