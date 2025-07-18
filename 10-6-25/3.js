// 1. Print marks of students using for...in loop
const students = {
    Monika: 90,
    Harry: 88,
    Rosy: 80
};

for (key in students) {
    console.log("marks of", key, "is", students[key]);
}

// 2. Same program using for loop with Object.keys()
let size = Object.keys(students).length;
for (let i = 0; i < size; i++) {
    console.log("marks of", Object.keys(students)[i], "is", students[Object.keys(students)[i]]);
}

// 3. Prompt until user enters the correct number


let correctNum = 4;
let b;
do {
    b = prompt("Enter correct num: ");
    console.log("You entered:", b); 
} while (parseInt(b) != correctNum);

console.log("you entered the correct number");

//4. Function to find the mean of 5 numbers

function mean(a,b,c,d,e){
    return (a+b+c+d+e)/5;
}

console.log("meani is: ", mean(2,4,5,7,9))
