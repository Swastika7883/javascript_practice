// Promise chaining

function asyncFunc(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success");
        }, 4000);
    })
};


function asyncFunc2(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        }, 4000);
    })
};

console.log("fetching data1");


asyncFunc().then((res)=>{
  console.log("fetching data2");
  asyncFunc2().then((res)=>{
  console.log(res);
});


});

