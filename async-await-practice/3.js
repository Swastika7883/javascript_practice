let p1 = ()=>{
    return new Promise((res,rej)=>{
        console.log("fetching data..");

        setTimeout(()=>{res("success")},5000)
    })

}

let p2 = function (){
    return new Promise((res, rej)=>{
       setTimeout(()=>{rej("error in p2")},2000)
    });
}

async function fetchData(){
    try{let data1 = await p1();
        console.log(data1);

        let data2 = await p2();
        console.log(data2)
    }
    catch(error){
        console.log("Caught error :", error)
    } 
}

fetchData();