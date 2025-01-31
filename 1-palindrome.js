// Question 1 - Palindrome Number
// An Integer is a palindrome when it reads the same forward and backend
// Input: X = 121  --->>>> output:true
// Input: X = 10  --->>>> output:false


const ispalidrome = function(x){
  
  // x.toString()  123= "1234"
    // split => "123" =>> ["1","2","3"]
    // reverse  => ["1","2","3"]

    // join  => "123    "
    return x === +x.toString().split("").reverse().join("")
}
const res = ispalidrome(121);

console.log(res);
