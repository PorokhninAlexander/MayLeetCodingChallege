// https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3319/

/*
Given a positive integer, output its complement number. 
The complement strategy is to flip the bits of its binary 
representation.
*/

//// EXAMPLE 1:////

///////////////////
//               //
//   Input: 5    //
//   Output: 2   //
//               //
///////////////////

//// EXAMPLE 2:////

///////////////////
//               //
//   Input: 1    //
//   Output: 0   //
//               //
///////////////////


var findComplement = function(num) {
    // create 3 variables
    // arr it's array for reverse bianry numbers
    // newNum copy input num for while
    // result it's result

    let arr = [],
        newNum = num,
        result = 0;

    // start while
    // this part decode decimal to binary
    // and reverse all binary numbers because we want a reverse binary
    while (newNum != 0) {
        arr.unshift(newNum % 2 == 0 ? 1 : 0);
        newNum = Math.floor(newNum / 2);
    }

    // this part decode binary to decimal
    // and record in result

    arr.forEach((item, i) => {
        result += item * Math.pow(2, arr.length - i - 1)
    })

    return result;

};

findComplement(2);