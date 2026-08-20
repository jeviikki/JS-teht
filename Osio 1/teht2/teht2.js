/* first location coordinates */

coordinates1 = prompt("Enter first location coordinates separated by a comma (,):");
x1 = parseInt(coordinates1.split(",")[0]);
y1 = parseInt(coordinates1.split(",")[1]);

/* second location coordinates */

coordinates2 = prompt("Enter second location coordinates separated by a comma (,):");
x2 = parseInt(coordinates2.split(",")[0]);
y2 = parseInt(coordinates2.split(",")[1]);

/* distance calc */

distance = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
result = document.getElementById("result");
result.innerHTML = distance;