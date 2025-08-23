// Promises 1. resolve 2. reject 
// resolve --- .then , reject ---- .catch

const getPromise = ()=>{
    return new Promise ((resolve, reject)=>{
        console.log("I am promise");
        reject("error 404");

    });
};

let promise = getPromise();

promise.then((res)=>{
    console.log("promise fulfilled", res);
});


promise.catch((err)=>{
    console.log("rejected");
})


const apple= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("fruits");
            resolve("sucess");

        },5000)
    })
}

apple().then((res)=>{
    console.log("resolved",res)
    promise.catch((err)=>{
        console.log("rejected", err);

    })
});