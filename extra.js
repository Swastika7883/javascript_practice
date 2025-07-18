//22-04-2025   classes and objects  for my practice
class salary{
    setsal(sal){
        this.sal= sal;
    }
    tax(){
        console.log("tax is 10%")
    }
    discount(num){
        this.after_discount= this.sal - num/100 * this.sal;
        console.log(this.after_discount);
        
    }
}


let mysal = new salary();
mysal.setsal(40000);
mysal.discount(20);

console.log(mysal);
