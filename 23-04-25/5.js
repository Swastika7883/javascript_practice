//5. Write a function that takes a string as input and returns the string with all spaces removed.

let s = prompt('enter a string:')

function spaceRemoved(str){
    return str.replace(/ /g, "");

}

console.log(spaceRemoved(s));