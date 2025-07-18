//13.Find the object with name equal to 'Jane' in the array [{name: 'John', age: 25}, {name: 'Jane', age: 30}]

let arr=  [{name: 'John', age: 25}, {name: 'Jane', age: 30}];

for(let i of arr){
    if(i.name==='Jane'){
        console.log(i);
    }
}