// https://leetcode.com/explore/featured/card/may-leetcoding-challenge/535/week-2-may-8th-may-14th/3325/

/*
In a town, there are N people labelled from 1 to N.  
There is a rumor that one of these people is secretly 
the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] 
representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the 
label of the town judge.  Otherwise, return -1.
*/

//////////////EXAMPLE 1://///////////

/////////////////////////////////////
//                                 //
//   Input: N = 2, trust = [[1,2]] //
//   Output: 2                     //
//                                 //
/////////////////////////////////////

/////////////////EXAMPLE 2:////////////////

///////////////////////////////////////////
//                                       //
//   Input: N = 3, trust = [[1,3],[2,3]] //
//   Output: 3                           //
//                                       //
///////////////////////////////////////////

////////////////////EXAMPLE 3:///////////////////

/////////////////////////////////////////////////
//                                             //
//   Input: N = 3, trust = [[1,3],[2,3],[3,1]] //
//   Output: -1                                //
//                                             //
/////////////////////////////////////////////////

/////////////////EXAMPLE 4:////////////////

///////////////////////////////////////////
//                                       //
//   Input: N = 3, trust = [[1,2],[2,3]] //
//   Output: -1                          //
//                                       //
///////////////////////////////////////////

//////////////////////////EXAMPLE 5://///////////////////////

/////////////////////////////////////////////////////////////
//                                                         //
//   Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]] //
//   Output: 3                                             //
//                                                         //
/////////////////////////////////////////////////////////////

var findJudge = function(N, trust) {
    // if N equale 1 then return 1 
    // because if we have one person it's judge
    if (N == 1) return 1

    // create 2 array variables
    // trusting array with person number and trusted [[trusting:[trusting,trusted,trusted,...]],[trusting:[trusting,trusted,trusted,...]],...]
    // trusted array with person number and trusting [[trusted:[trusted,trusting,trusting,...]],[trusted:[trusted,trusting,trusting,...]],...]
    let trusting = [];
    let trusted = [];

    trust.forEach(item => {
        trusting[item[0]] != undefined ? trusting[item[0]].push(item[1]) : trusting[item[0]] = [
            item[0],
            item[1]
        ];

        trusted[item[1]] != undefined ? trusted[item[1]].push(item[0]) : trusted[item[1]] = [
            item[1],
            item[0]
        ]
    })

    // filter array
    // if we have a person everyone trust and this person trusts noone return him
    // else return -1
    let filterObj = trusted.filter(item => ((item.length == N) && (trusting[item[0]] == undefined)));

    return filterObj.length == 0 ? -1 : filterObj[0][0]
};
