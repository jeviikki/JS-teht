score = parseInt(prompt("Enter your score: "));

document.getElementById("score").innerHTML = score;

let grade

if (score >= 0 && score <= 39) {
    grade = 0;
} else if (score >= 40 && score <= 51) {
    grade = 1;
} else if (score >= 52 && score <= 63) {
    grade = 2;
} else if (score >= 64 && score <= 75) {
    grade = 3;
} else if (score >= 76 && score <= 87) {
    grade = 4;
} else if (score >= 88 && score <= 100) {
    grade = 5;
} else {
    grade = "invalid";
}

if (grade != "invalid") {
    document.getElementById("grade").innerHTML = grade;
} else {
    document.getElementById("paragraph").innerHTML = "The entered score was invalid and therefore a grade could not be calculated.";
}