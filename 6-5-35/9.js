//9.Given an array of objects [{name: 'John', age: 25}, {name: 'Jane', age: 30}], extract all names.

let arr=[{name: 'John', age: 25}, {name: 'Jane', age: 30}];

for(let key of arr){
    console.log( key.name);
}