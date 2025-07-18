//8. Use a nested if...else statement to determine the grade of a student based on their score.
/*
90-100 = A
80-89 = B
70-79 = C
60-69 = D
50-59 = E
40-0 = F
*/

let n = prompt("Enter marks: ")
    if(n>=90 ){
        console.log(" Score = Grade A");
    }
    else if(n>=80){
        console.log(" Score = Grade B")
    }
    else if(n>=70){
        console.log(" Score = Grade C")
    }
    else if(n>=60){
        console.log(" Score = Grade D")
    }
    else if(n>=50){
        console.log(" Score = Grade E")
    }
    else{
        console.log( " Score = F ")
    }
