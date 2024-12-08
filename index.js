  //Importing the readline module to read user input from the console
     const readline = require("readline");
      
   // Creating a readline interface to handle input and output with the console
       const rL = readline .createInterface({
        input:process.stdin,
        output:process.stdout,
       }); 

function gradeGenerator(score) {
   if (score >=0 && score<=100){
    if (score >79){
        return "Grade :A";
    } else if (score >= 60 && score <=79) {
     return "Grade: B";
    } else if (score >= 60 && score <=59) {
        return"Grade: C";
    } else if (score >=40 && score <=49) {
        return"Grade: D";
    } else {
        return("Grade: E");
    }
} else {
    console.log (`Please enter a valid value`);
}
}
 console.log(scoreGrade(45));// 
 output : Grade :D