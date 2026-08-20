let numbers = [];
let evens = [];
let number = [];

while (number != "done") {
    number = prompt("Enter a number (or 'done' to finish): ");
    numbers.push(number);
}

for (i = 0; i<= numbers.length; i++) {
    n = numbers[i];
    if (n % 2 == 0) {
        evens.push(n)
    }
}

document.getElementsById("even-numbers").innerHTML = evens;