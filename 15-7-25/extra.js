// [0,1,1,2,3,5,8,13...]

let arr=[0,1];
let n =8;

for(let i=0; i<n-2; i++){
    arr.push(arr[i]+arr[i+1])
}
console.log(arr);

// fact of 5

let fact =1;

for(let i=1; i<=5; i++){
    fact = fact*i;

}
console.log(fact);

let str =" hello moto how are you ?"
let str2= "hello"

let removed = str.replace(/[^a-zA-Z]/g,"");
console.log(removed);

let reduced = str.slice(11).concat(str.slice(0,11));
console.log(reduced);

function substring(str, str2){
if(str.includes(str2)){
    return true;
}else{
    return false;
}
}

console.log(substring(str, str2));




let obj1 = {
    name:"swastika",
    money:9000,
    salary: function(){
        console.log("money");
        

    }
}

for(let key in obj1){
    console.log(key , obj1[key]);
}

console.log(obj1);

class car{
    constructor (brand ,  mileage){
        this.brand= brand;
        this.mileage= mileage;
    }
    start(){
        console.log("starting the car")
    }
    stop(){
        console.log(" stoping the car")
    }
    salary(sal){
        this.sal = sal;
    }
}

let obj = new car("toyota", 20);

obj.salary(2000);
obj.start();
console.log(obj);

class mahindra extends car{
    constructor(){
        console.log("created constructor");
        super();
    }
    total_sal(){
        tsal= this.sal;
        console.log(tsal);
    }
    

}


M1= new mahindra();
console.log(M1.total_sal());