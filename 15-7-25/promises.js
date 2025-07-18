

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

let p1= new Promise((resolve, reject)=>{
console.log("finding sum");
sum(3,5);
resolve("success");

})

let p2 = new Promise((resolve, reject)=>{
    console.log(a());
    reject("err");
})


p1.then((val)=>{console.log(val);
    p2.then((val)=>{console.log(val);})
    .catch((error)=>{console.log(error);})
   
}).catch((err)=>{console.log(err);})