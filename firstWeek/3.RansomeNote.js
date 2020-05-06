// https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3318/

// Given an arbitrary ransom note string and another string 
// containing letters from all the magazines, write a function 
// that will return true if the ransom note can be constructed 
// from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in 
// your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

/////////// EXAMPLE 1:

//////////////////////////////////////////
//                                      //
//   canConstruct("a", "b") -> false    //
//   canConstruct("aa", "ab") -> false  //
//   canConstruct("aa", "aab") -> true  //
//                                      //
//////////////////////////////////////////


var canConstruct = function(ransomNote, magazine) {
    let sumIndex = 0;
    let ransomNoteArr = ransomNote.split('');
    let magazineArr = magazine.split('');

    ransomNoteArr.forEach(item => {
        if (magazineArr.indexOf(item) !== -1) {
            magazineArr.splice(magazineArr.indexOf(item), 1);
            sumIndex += 1;
        }
    })
    return sumIndex === ransomNote.length
};