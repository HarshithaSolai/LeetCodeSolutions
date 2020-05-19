/* Two Sum 

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example :

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var indexes = {},
      len     = nums.length;

  for (var i = 0; i < len; i++) {
    var diff = target - nums[i];

    if (indexes[diff] !== undefined && indexes[diff] !== i) {
      return [i, indexes[diff]];
    } else {
      indexes[nums[i]] = i;
    }
  }
};


/*  Solution Approach 

1. Create a Object Map for each number in the array as key and its index as value

2. Check if target - current element in the while loop is already present in the object map 

3. If present, return current index and the index of its diff element

4. If not present, then add the current element into object map

*/