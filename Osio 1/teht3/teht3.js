l1 = parseFloat(prompt("Enter the length of the first side of a triangle: "));
l2 = parseFloat(prompt("Enter the length of the second side of a triangle: "));
l3 = parseFloat(prompt("Enter the length of the third side of a triangle: "));

let type;

if (l1 == l2 && l2 == l3 && l1 == l3) {
    type = "equilateral";
} else if (l1 != l2 && l2 != l3 && l1 != l3) {
    type = "scalene";
} else {
    type = "isosceles";
}

document.getElementById("triangle-type").innerHTML = type;