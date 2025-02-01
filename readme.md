## Question 1 - Palindrome Number
An integer is a palindrome when it reads the same forward and backward.

### Examples
**Input:** X = 121  
**Output:** true  

**Input:** X = 10  
**Output:** false  

---

## Solution
### JavaScript Implementation
```javascript
const isPalindrome = function(x) {
    return x === +x.toString().split("").reverse().join("");
};

const res = isPalindrome(121); // Calling the function with 121
console.log(res); // Output: true
```

---

## Explanation
1. **Convert `x` to a string:** `x.toString()`  
   - Example: `121` -> `"121"`, `10` -> `"10"`

2. **Split the string into an array of characters:** `.split("")`  
   - Example: `"121"` -> `["1", "2", "1"]`, `"10"` -> `["1", "0"]`

3. **Reverse the array:** `.reverse()`  
   - Example: `["1", "2", "1"]` -> `["1", "2", "1"]`, `["1", "0"]` -> `["0", "1"]`

4. **Join the reversed array back into a string:** `.join("")`  
   - Example: `["1", "2", "1"]` -> `"121"`, `["0", "1"]` -> `"01"`

5. **Convert the reversed string back into a number using the unary plus operator (`+`)**  
   - Example: `+"121"` -> `121`, `+"01"` -> `1`

6. **Compare the original number (`x`) with the reversed number:**  
   - If they are equal, return `true` (it is a palindrome), otherwise return `false`.

---

## Fibonacci Series
### Definition
The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones:
```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
```
For `n > 1`:  
`f(n) = f(n-1) + f(n-2)`

### Examples
**Input:** n = 3  
**Output:** 2  

**Input:** n = 5  
**Output:** 5  

---

## Solution
### Iterative Approach
```javascript
var fib = function(n) {
    // Initialize an array with base cases
    const arr = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n];
};

const ans = fib(5);
console.log(ans); // Output: 5
```

### Recursive Approach
```javascript
const fib = function(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
};
```

---