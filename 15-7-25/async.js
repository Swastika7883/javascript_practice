function sum (num1,num2){
    setTimeout(()=>{
        let sums = num1+num2;
        console.log(sums);
    },5000)
}

let a =()=>{
    let b= "hello"
    return b;
}


sum(4,5);
console.log(a());