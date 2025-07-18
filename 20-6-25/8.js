//8. SetTimeout:
//Write a function to display a countdown from 10 to 1, with each number displayed after a 1-second delay.
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function TimeOut(){
    for(let i =10; i>0;  i--){
        {console.log(i)}
        await wait(1000) 
    }
    
}

TimeOut();