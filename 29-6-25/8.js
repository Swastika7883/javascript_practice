//8. Check Substring: Write a function that takes two strings as input and returns true if 
// the second string is a substring of the first, and false otherwise.

function isSubstring(str1, str2) {
  return str1.includes(str2);
}

const ans = isSubstring('abcdfgrjfjsfvkjd' , 'abc')

console.log(ans);