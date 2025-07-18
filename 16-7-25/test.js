// sum(a);

// function sum (a){
//     let b = 20;
//     console.log(a);

// }

// let a =10;

// console.log(b);

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{console.log("hello")}, 2000);
    reject("err");
})

p1.then((val)=>{console.log(val)}).catch((err)=>console.log(err));







