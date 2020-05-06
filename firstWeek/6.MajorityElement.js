// https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3321/

// Given an array of size n, find the majority element. 
// The majority element is the element that appears more 
// than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the 
// majority element always exist in the array.

/////////// EXAMPLE 1:

//////////////////////////
//                      //
//   Input: [3,2,3]     //
//   Output: 3          //
//                      //
//////////////////////////

/////////// EXAMPLE 2:

//////////////////////////////////
//                              //
//   Input: [2,2,1,1,1,2,2]     //
//   Output: 2                  //
//                              //
//////////////////////////////////

var majorityElement = function(nums) {

    let container = {};
    let response;

    nums.forEach(item => {

        if (container.hasOwnProperty(item.toString())) {
            container[item.toString()] = container[item.toString()] + 1;
        } else {
            container[item.toString()] = 1
        }
    });

    for (let val in container) {
        if (container[val] > Math.floor(nums.length / 2)) response = val
    }

    return response
};

majorityElement([2, 2, 1, 1, 1, 2, 2])