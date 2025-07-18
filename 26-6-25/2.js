function maxSubarraySum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}


let arr = [3,5,6,0,-6.
    ,3,5,8,6,-1]
console.log(maxSubarraySum(arr));