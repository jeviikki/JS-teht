cValue = parseInt(prompt("Enter temperature in Celsius (°C):"));
cElement = document.getElementById("celsius");
cElement.innerHTML = cValue + " °C in Fahrenheit and Kelvin:";

/* fahrenheit conversion */
fValue = (cValue*(9/5)+32);
fElement = document.getElementById("fahrenheit");
fElement.innerHTML = fValue + " °F";

/* kelvin conversion */
kValue = cValue + 273.15;
kElement = document.getElementById("kelvin");
kElement.innerHTML = kValue + " Kelvin";