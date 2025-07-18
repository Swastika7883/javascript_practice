//3.reverse the  array

let array = [1,2,3,4]
 console.log(array.reverse());



 function isPrime(num){
    if(num<=1)return false;
    if(num=== 2)return true;

    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0){
            return false;
        }
        

    }
    return true;


 }

 let number = Number(prompt("Enter Number:"));

 if(isPrime(number)==true){
    console.log("its prime");

 }
 else{
    console.log("its not prime");
 }
