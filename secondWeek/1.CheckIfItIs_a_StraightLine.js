// https://leetcode.com/explore/featured/card/may-leetcoding-challenge/535/week-2-may-8th-may-14th/3323/

/*
You are given an array coordinates, coordinates[i] = [x, y], 
where [x, y] represents the coordinate of a point. Check if 
these points make a straight line in the XY plane.
*/

///////////////////////// EXAMPLE 1://///////////////////////////

/////////////////////////////////////////////////////////////////
//                                                             //
// |         /                                                 //
// |        *(3,4)                                             //
// |       /                                                   //
// |      /                                                    //
// |     *(2,3)                                                //
// |    /                                                      //
// |   /                                                       //
// |  *(1,2)                                                   //
// | /                                                         //
// |/                                                          //
// |                                                           //
// |__________________________________                         //
//                                                             //
// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]  //
// Output: true                                                //
//                                                             //
/////////////////////////////////////////////////////////////////

///////////////////////// EXAMPLE 2://///////////////////////////

/////////////////////////////////////////////////////////////////
//                                                             //
// |                         *(5,6)                            //
// |                                                           //
// |                    *(4,5)                                 //
// |                                                           //
// |              *(3,4)                                       //
// |                                                           //
// |                                                           //
// |                                                           //
// |      *(2,2)                                               //
// |                                                           //
// |  *(1,1)                                                   //
// |__________________________________                         //
//                                                             // 
// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]  //
// Output: false                                               //
//                                                             //
/////////////////////////////////////////////////////////////////

var checkStraightLine = function(coordinates) {

    // create 4 variables for straight line equation
    // (x - x0)/(x1 - x0) = (y - y0)/(y1 - y0)
    const x0 = coordinates[0][0],
        x1 = coordinates[1][0],
        y0 = coordinates[0][1],
        y1 = coordinates[1][1];

    // this function return y if give x
    const formula = (x) => Math.round(((x - x0) / (x1 - x0)) * (y1 - y0) + y0)

    // sort out array coordinates starting with 2 index
    // because 0 and 1 use for straight line equation
    // if y != x then this point don't make straight line in the XY plane
    // if all array points make straight line in the XY plane
    // return true
    let i = 2;
    while (i !== coordinates.length) {

        if (coordinates[i][1] == formula(coordinates[i][0])) ++i
        else return false
    }
    return true
};