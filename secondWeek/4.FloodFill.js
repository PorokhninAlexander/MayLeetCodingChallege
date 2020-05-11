// https://leetcode.com/explore/featured/card/may-leetcoding-challenge/535/week-2-may-8th-may-14th/3326/

/*
An image is represented by a 2-D array of integers, each integer 
representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel 
(row and column) of the flood fill, and a pixel value newColor,
"flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any 
pixels connected 4-directionally to the starting pixel of the same 
color as the starting pixel, plus any pixels connected 4-directionally 
to those pixels (also with the same color as the starting pixel), and 
so on. Replace the color of all of the aforementioned pixels with 
the newColor.

At the end, return the modified image.
*/

///////////////////////////EXAMPLE 1://////////////////////////

///////////////////////////////////////////////////////////////
//                                                           //
//   Input:                                                  //
//      image = [[1,1,1],[1,1,0],[1,0,1]]                    //
//      sr = 1, sc = 1, newColor = 2                         //
//                                                           //
//   Output: [[2,2,2],[2,2,0],[2,0,1]]                       //
//                                                           //
//   Explanation:                                            //
//      From the center of the image (with position          //
//      (sr, sc) = (1, 1)), all pixels connected             //
//      by a path of the same color as the starting pixel    //
//      are colored with the new color.                      //
//      Note the bottom corner is not colored 2, because it  //
//      is not 4-directionally connected                     //
//      to the starting pixel.                               //
//                                                           //
///////////////////////////////////////////////////////////////


var floodFill = function(image, sr, sc, newColor) {
    // get the color value present at given coordinates
    let color = image[sr][sc];

    // the value of i and j index should never be less than zero
    // and greater than the row and column length.
    // we have to fill only the pixel whose color is similar to the
    // starting pixel color.
    const helper = (image, i, j, newColor, color) => {
        if (i < 0 || j < 0 || i >= image.length || j >= image[0].length || image[i][j] != color) {
            return
        }
        image[i][j] = newColor;

        helper(image, i + 1, j, newColor, color)
        helper(image, i - 1, j, newColor, color)
        helper(image, i, j + 1, newColor, color)
        helper(image, i, j - 1, newColor, color)
    }

    // if it's different than the new color
    // recursively paint the pixel with the new color
    if (color != newColor) {
        helper(image, sr, sc, newColor, color)
    }
    return image
};