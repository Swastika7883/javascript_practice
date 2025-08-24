// bind()

let obj = { name: "Arjun" };

function greet(city) {
  console.log("Hello", this.name, "from", city);
}

let boundGreet = greet.bind(obj, "Delhi");

boundGreet();  

