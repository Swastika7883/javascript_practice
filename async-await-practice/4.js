// IIFE = Immediately Invoked Function Expression
// IIFE  is a function that is called immediately as soon as it is defined

// (func)();
// (()=>{});


function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log("data", dataId);
        resolve("success");
    }, 2000);
    });

   
}

(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
})();

