//6. Use a for...in loop to check if an object has a certain property.
let fruits ={
    name:"mango",
    colour: "yellow",
    taste:"sweet"
}
for(let val in fruits){
    if(fruits[val]==="yellow"){
        console.log(val , fruits[val]);
    }
}