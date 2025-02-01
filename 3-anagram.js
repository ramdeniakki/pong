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



// second approach 

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
