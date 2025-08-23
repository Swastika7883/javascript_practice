let p1 = ()=>{
    return new Promise((res,rej)=>{
        console.log("fetching data");

        setTimeout(()=>{res("success")},2000)
    })

}

let p2 = function (){
    return new Promise((res, rej)=>{
       setTimeout(()=>{rej("error")},2000)
    });
}

p1().then((res)=>{console.log(res)
    p2().catch((rej)=>{console.log(rej)})
})