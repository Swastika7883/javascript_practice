let p1= ()=>{
    return new Promise((resolve, reject)=>{
        console.log("fetching");

        setTimeout(()=>{
            resolve("success");
        }, 2000);

    })
}

let p2 =()=>{
    return new Promise((res, rej)=>{
        rej('err');
        
    })
}

p1().then((res)=>{console.log(res)
    ;p2().then((res)=>{console.log(res)}).catch((err)=>{
    console.log("err");})
});
