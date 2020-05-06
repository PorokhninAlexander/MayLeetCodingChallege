// https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3319/

// Given a positive integer, output its complement number. 
// The complement strategy is to flip the bits of its binary 
// representation.

/////////// EXAMPLE 1:

///////////////////
//               //
//   Input: 5    //
//   Output: 2   //
//               //
///////////////////

/////////// EXAMPLE 1:

///////////////////
//               //
//   Input: 1    //
//   Output: 0   //
//               //
///////////////////


var findComplement = function(num) {

    let arr = [];
    let newNum = num;
    let result = 0;

    while (newNum != 0) {

        arr.unshift(newNum % 2 == 0 ? 1 : 0);
        newNum = Math.floor(newNum / 2);
    }

    arr.forEach((item, i) => {
            console.log(item * Math.pow(2, arr.length - i - 1));
            result += item * Math.pow(2, arr.length - i - 1)
        })
        // console.log(arr);
        // console.log(result);
    return result;

};

findComplement(2);