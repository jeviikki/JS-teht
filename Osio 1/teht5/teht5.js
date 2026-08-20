number = parseInt(prompt("Enter a positive integer: "));
document.getElementById("your-number").innerHTML = number;

let sum = 0;

for (i = 1; i<= number; i++) {
    sum += i;
}

document.getElementById("sum").innerHTML = sum;