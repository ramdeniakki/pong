// Question 1 - Palindrome Number
// Fibonacci series ----> 0,1,1,2,3,5,8,13,21,34,55,89........
//  f(0) = 0 f(1) = 1
//  f(n) = f(n-1) + f(n-2) , for n > 1
// input: n=3  output: 2


// simple approach
var fib = function(n){
    // arr 
    const arr = [0,1]
     for(let i = 2;i<=n;i++){
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n]
}

const ans = fib(5)
console.log(ans)

// Recursion Keeps calling itself but with a smaller input every consecutive time until the code desired result from the start is acheived.



const fib = function(n){
    if(n <=1) return n;

    return fib(n-1) + fib(n-2)
}