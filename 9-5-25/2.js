// PROMISES

//Promises is for 'eventual' completion of task . It ia an object in js . Its is a sol to call backhell

// let promise = new Promise((resolve,reject)=>{...})           resolve and reject are allbacks provided by js


let promise = new Promise ((resolve, reject)=>{
    console.log("I am a promise"); 
    resolve(123);
})

console.log(promise)