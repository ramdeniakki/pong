# palindrome Number

## Question 1 - Palindrome Number

An integer is a palindrome when it reads the same forward and backward.

### Examples

**Input:** X = 121\
**Output:** true

**Input:** X = 10\
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

1. **Convert ********`x`******** to a string:** `x.toString()`

   - Example: `121` -> `"121"`, `10` -> `"10"`

2. **Split the string into an array of characters:** `.split("")`

   - Example: `"121"` -> `["1", "2", "1"]`, `"10"` -> `["1", "0"]`

3. **Reverse the array:** `.reverse()`

   - Example: `["1", "2", "1"]` -> `["1", "2", "1"]`, `["1", "0"]` -> `["0", "1"]`

4. **Join the reversed array back into a string:** `.join("")`

   - Example: `["1", "2", "1"]` -> `"121"`, `["0", "1"]` -> `"01"`

5. **Convert the reversed string back into a number using the unary plus operator (********`+`********)**

   - Example: `+"121"` -> `121`, `+"01"` -> `1`

6. **Compare the original number (********`x`********) with the reversed number:**

   - If they are equal, return `true` (it is a palindrome), otherwise return `false`.

---

## Breakdown of Function Calls

```javascript
x.toString(); // Converts number to string
// Example: 123 -> "123"

.split(""); // Converts string to an array of characters
// Example: "123" -> ["1", "2", "3"]

.reverse(); // Reverses the array
// Example: ["1", "2", "3"] -> ["3", "2", "1"]

.join(""); // Converts array back into a string
// Example: ["3", "2", "1"] -> "321"

+ // The unary plus operator converts the string back to a number
// Example: +"321" -> 321

// Finally, the function checks if the original number (x) is equal to the reversed number.
```

