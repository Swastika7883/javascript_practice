let number = 34567;

while(number>0){
    let digit= number %10;
    console.log(digit);
    number = Math.floor(number/10);

}

let arr =[{name:"swastika", age:21}, {name:"Ritika", age:14}, {name:"Ankit", age:4}];

arr.forEach(val =>{
    for(let key in val){
        console.log(key, val[key]);
    }
})