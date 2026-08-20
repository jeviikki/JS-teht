number = parseInt(prompt("Enter a positive integer: "));
document.getElementById("your-number").innerHTML = number;

table = document.getElementById("target");

for (rowNum = 1; rowNum <= number; rowNum++) {
    let tr = document.createElement("tr");
    for (colNum = 1; colNum <= number; colNum++) {
        let td = document.createElement("td");
        td.innerHTML = colNum*rowNum;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}