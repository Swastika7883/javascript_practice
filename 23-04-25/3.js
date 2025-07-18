//3. Create an object with nested properties and log the nested property to the console.

let obj1 = {
    name :"flowers",
    colour:{
        red : "rose",
        yellow : "sunflower",
        white: "daisy",
        Blue: "tulip"
    },
    price : function(price){
        this.price = price;

    }
}

obj1.price(30000);

console.log(obj1);