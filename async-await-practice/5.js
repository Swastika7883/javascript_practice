let arr=[1,23,3,4,5]

const arrSum= arr
.filter(val=> val>3)
.map(val => val*val)
.reduce((acc, reduce)=>{return acc+ reduce},0);

console.log(arrSum);