//palindrome

function isPalindrome(str){
    str= str.toLowerCase();
    let rev = str.split("").reverse().join("");
    if(str === rev){
        return true;
    }else return false;
}

const palindrome = isPalindrome("Malayalam");

console.log(palindrome);