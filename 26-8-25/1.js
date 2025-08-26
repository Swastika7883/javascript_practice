// CallBackHell
function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if (getNextData){
        getNextData();
    }       
    }, 2000);
}

getData(1, ()=>{
    getData(2, ()=>{
        getData(3,()=>{
            getData(4)
        })
    });
});

getData(1,()=>{
    getData(2, ()=>{
        
    })
})
getData(1).then((res)=>{
    console.log();
    getData(2).then((res)=>{

    })

})