//apply(): Similar to call(), but arguments are passed as an array.


let obj ={
    name : "Arjun",
    age:"10"
}

function greeting(city1, city2 , city3){
    console.log("hello", this.name, "i have lived in ",city1, city2 , city3);
}

let cities =[ "delhi","Up","Pune"]

greeting.apply(obj, cities);