/* 
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;
    while (left < right) {
        let area = (right - left) * Math.min(heights[left], heights[right])
        console.log("this is area", area)
        maxArea = Math.max(maxArea, area);
        console.log("this is max area", maxArea)
        if (heights[left] < heights[right]) {
            left++;
        }else {
            right--;
        }
    }
    return maxArea;
}

function containerWithMostWater2(heights) {
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++){
        for (let j = i+1; j < heights.length; j++){
            let width = j-i
            if (heights[i] < heights[j]){
                if (heights[i] * width > maxArea){
                    maxArea = heights[i] * width
                }
            }
            else if (heights[i] > heights[j]){
                if (heights[j] * width > maxArea){
                    maxArea = heights[j] * width
                }
            }
            else {
                if (heights[i] * width > maxArea){
                    maxArea = heights[i] * width
                }
            }
        }
    }
    return maxArea
}

// O(N^2)
function containerWithMostWater2(heights) {
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++){
        for (let j = i+1; j < heights.length; j++){
            let width = j-i
            if (heights[i] * width > maxArea){
                maxArea = heights[i] * width
            }
            else if (heights[j] * width > maxArea){
                maxArea = heights[j] * width
            }
        }
    }
    return maxArea
}