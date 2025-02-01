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

## Question 3 - Valid Anagram
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once.

### Examples
**Input:** (S = "anagram", T = "nagram")  
**Output:** true  

**Input:** (S = "rat", T = "car")  
**Output:** false  

---

## Solution
### Approach 1: Sorting Method
```javascript
const anagram = function(s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s === t;
};

const ans = anagram("anagram", "nagram");
console.log(ans); // Output: true
```

### Approach 2: Frequency Counter Method
```javascript
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
};
```

---

