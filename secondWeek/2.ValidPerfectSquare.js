// https://leetcode.com/explore/featured/card/may-leetcoding-challenge/535/week-2-may-8th-may-14th/3324/

/*
Given a positive integer num, write a function which returns 
True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.
*/

/////EXAMPLE 1://///

////////////////////
//                //
//   Input: 16    //
//   Output: true //
//                //
////////////////////

//////EXAMPLE 2://////

//////////////////////
//                  //
//   Input: 14      //
//   Output: false  //
//                  //
//////////////////////

var isPerfectSquare = function(num) {
    // find all sqr from number
    // if index^2 == num then return true
    // if index^2 > num then num sqr equale double number (index -1; index) and return false
    let index = 0;
    while (true) {
        if (index * index == num) return true
        if (index * index > num) return false
            ++index
    }
};