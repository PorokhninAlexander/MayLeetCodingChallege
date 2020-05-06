// https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3320/

/*
Given a string, find the first non-repeating character 
in it and return it's index. If it doesn't exist, return -1.
*/

////////EXAMPLE 1:///////

/////////////////////////
//                     //
//   s = "leetcode"    //
//   return 0.         //
//                     //
/////////////////////////

//////////EXAMPLE 2://///////

/////////////////////////////
//                         //
//   s = "loveleetcode"    //
//   return 2.             //
//                         //
/////////////////////////////

var firstUniqChar = function(s) {

    let index = 0;
    let bool = true;
    while (bool) {
        let newArr = s.split('');
        let bukva = newArr.splice(index, 1);

        if (newArr.includes(bukva[0]) == false) {
            bool = false;
        } else {
            ++index;
            if (index === s.length) {
                index = -1;
                bool = false;
            }
        }
    }
    return index
};

firstUniqChar('loveleetcode');