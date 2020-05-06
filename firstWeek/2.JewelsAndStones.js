// https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3317/

// You're given strings J representing the types of stones 
// that are jewels, and S representing the stones you have.  
// Each character in S is a type of stone you have.  You want 
// to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters 
// in J and S are letters. Letters are case sensitive, so "a" is 
// considered a different type of stone from "A".

/////////// EXAMPLE 1:

///////////////////////////////////////
//                                   //
//   Input: J = "aA", S = "aAAbbbb"  //
//   Output: 3                       //
//                                   //
///////////////////////////////////////

/////////// EXAMPLE 2:

//////////////////////////////////////
//                                  //
//   Input: J = "z", S = "ZZ"       //
//   Output: 0                      //
//                                  //
//////////////////////////////////////


var numJewelsInStones = function(J, S) {
    let first = J.split(''),
        second = S.split('');

    let newArr = [];
    newArr = second.filter(item => first.indexOf(item) != -1);
    return newArr.length;
};

numJewelsInStones("aA", "aAAbbbb")