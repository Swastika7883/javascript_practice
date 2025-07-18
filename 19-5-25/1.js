// ASYNC - AWAIT
// async fun always returns a promise

// async function abc();
// await => pauses the execution of its surroungding async function until the promise is settled


function api (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);

        }, 2000);
    });
}

async function getWeatherData(){
    await api();
    await api();
}

getWeatherData();


