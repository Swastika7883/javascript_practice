//1.Prompt age and check if user can drive

let age = prompt ("Enter the Age: ");

age >=18? console.log("You can drive"): console.log("you cannot drive");

//2. Use confirm to ask if user wants to re-enter

let runAgain = true;

while(runAgain){
    let age = prompt ("Enter the Age: ");

    age >=18? console.log("You can drive"): console.log("you cannot drive");


runAgain= confirm("Do you want to enter the age again?");
}

//3.Use console.error if age is negative


let EnterAge = prompt ("Enter the Age: ");

if(EnterAge < 0){
    console.error("Age can not be negative");
}
else if (EnterAge >= 18){
    console.log("You can drive");
}else{
    console.log("You can not drive");
}

//4. Redirect to google.com if number > 4

let num = prompt("Enter a number:");
num = Number(num);

if (num > 4) {
  location.href = "https://www.google.com"; 
}

//5.  Change background color based on user input
let color = prompt("Enter a color:");
document.body.style.backgroundColor = color;

console.log("hello")