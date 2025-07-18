//8. Can you explain how to use filter() in combination with other array methods, such as map() or reduce(), to perform complex data transformations?

const users = [
  { name: "A", age: 15 },
  { name: "B", age: 22 },
  { name: "C", age: 30 }
];

const adults = users
  .filter(user => user.age > 18)
  .map(user => user.name); 

  console.log(adults);
