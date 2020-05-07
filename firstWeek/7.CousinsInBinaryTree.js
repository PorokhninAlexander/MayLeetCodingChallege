// https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3322/

/*
In a binary tree, the root node is at depth 0, and 
children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the 
same depth, but have different parents.

We are given the root of a binary tree with unique values, 
and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the 
values x and y are cousins.
*/


///////////////// EXAMPLE 1://////////////////

//////////////////////////////////////////////
//                                          //
//        (1)                               //
//        / \                               //
//     (2)   (3)                            //
//     /                                    //
//   (4)                                    //
//                                          //
//   Input: root = [1,2,3,4], x = 4, y = 3  //
//   Output: false                          //
//                                          //
//////////////////////////////////////////////

/////////////////////// EXAMPLE 2:////////////////////////

//////////////////////////////////////////////////////////
//                                                      //
//        (1)                                           //
//        / \                                           //
//     (2)   (3)                                        //
//       \     \                                        //
//       (4)   (5)                                      //
//                                                      //
//   Input: root = [1,2,3,null,4,null,5], x = 5, y = 4  //
//   Output: true                                       //
//                                                      //
//////////////////////////////////////////////////////////

//////////////// EXAMPLE 3://///////////////

////////////////////////////////////////////
//                                        //
//        (1)                             //
//        / \                             //
//     (2)   (3)                          //
//      \                                 //
//      (4)                               //
//                                        //
//   Input: [1,2,3,null,4], x = 2, y = 3  //
//   Output: false                        //
//                                        //
////////////////////////////////////////////

var isCousins = function(root, x, y) {
    // create 3 variables
    // arrNew it's array for all nodes
    // parent it's array with node's parents ( k node equel k-1 parent)
    // arrRoot it's array for resort tree at array

    let arrNew = [],
        parent = [],
        arrRoot = [root];

    // this is while for sort tree
    // we push levels in arrRoot and delete levels we used
    // if level haven't left or right nodes we push null

    while (arrRoot.length != 0 || (arrNew.indexOf(x) == -1 && arrNew.indexOf(y) == -1)) {
        arrRoot[0] == null ? arrNew.push(null) : arrNew.push(arrRoot[0]['val']);
        if (arrRoot[0] != null) {
            arrRoot.push(arrRoot[0]['left']);
            arrRoot.push(arrRoot[0]['right'])
            parent.push(arrRoot[0] == null ? null : arrRoot[0]['val']);
            parent.push(arrRoot[0] == null ? null : arrRoot[0]['val']);

        }
        arrRoot.shift()
    }

    // this function return node's parent from parent array
    const findParent = (array, element) => {
            return parent[array.indexOf(element) - 1]
        }
        // check if x or y equel 1 then return false because it's different levels
        // if x's and y's parents equel then return false because they have one parent
    if (findParent(arrNew, x) == findParent(arrNew, y) || findParent(arrNew, x) == 1 || findParent(arrNew, y) == 1 || x == 1 || y == 1) return false

    // create new variables for x's and y's parents
    let x1 = findParent(arrNew, x),
        y1 = findParent(arrNew, y);

    // sort parents,parents,..... and find one parent for x and y
    // if we have one parent then return true
    // else false
    while (x1 !== y1) {

        if (findParent(arrNew, x1) === findParent(arrNew, y1)) return true
        if (x1 == 1 || y1 == 1) break;
        x1 = findParent(arrNew, x1);
        y1 = findParent(arrNew, y1);

    }
    return false

};