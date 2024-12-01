function gradeGenerator() {
    const marks = ("Enter the student's marks (0 - 100):*");
    const score = parsent(marks);

    if (score < 0|| score >100 || isNaN(score)) {
        console.log ("Invalid input. Please enter a number between 0 and 100.");
    } else if (score > 79) {
        console.log("Grade : A");
    } else if (score >=60) {
        console.log("Grade: B");
    } else if (score >=49) {
        console.log("Grade: C");
    } else if (score >=40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
}

gradeGenerator();