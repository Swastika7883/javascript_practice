//Q2. Count Vowels in a String

function countVowels(str) {
  let ans = str.match(/[aeiou]/gi);
  if(ans){
    return ans.length
  }
  else return 0;
  
}

console.log(countVowels("happy birthday")); 

