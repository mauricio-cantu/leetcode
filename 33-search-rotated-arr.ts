// https://leetcode.com/problems/search-in-rotated-sorted-array/
// first intuition: finding the pivot
function search(nums: number[], target: number): number {
    let pivot = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            pivot = i;
            break;
        }
        
    }

    let L = pivot + 1, R = pivot
    while (L - pivot <= R + pivot) {
        let mid = Math.floor((L + R) / 2) - pivot
        if (target > nums[mid]) {
            L = mid + 1
        } else if (target < nums[mid]) {
            R = mid - 1
        } else {
            return mid
        }

    }
    return -1;
};

// pivot idx = 3
// [0,1,2,4,5,6,7]
// [4,5,6,7,0,1,2]

// optimized approach: binary searching without finding pivot previouslu
