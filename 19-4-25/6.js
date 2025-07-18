//6. Use a forEach loop to iterate over an array of objects and log each object's properties to the console.

let arr = [{"apple":1, "banana":2 , "guava":7, "mango": 5},{"rose":"red", "tulip":"blue", "sunflower":"yellow"}]

arr.forEach((arr)=>{
    for(key in arr){
        console.log(key , arr[key])
    }
})