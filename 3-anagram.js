// Question 3 -  Valid Anagram
// Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letter exactly one

// Input: (S = "anagram", t= "nagram" ) ---> True
//  Input :(s = 'rat , t='car) ---> False


// 1

const anagram = function(s,t){
    s=s.split("").sort().join();
    t=t.split("").sort().join();

    return s===t
}

const ans = anagram("anagram","nagram");
console.log(ans);