function searchInsert(nums: number[], target: number): number {
    let L = 0, R = nums.length - 1
    while (L <= R) {
        let mid = Math.floor((L + R) / 2)
        if (target > nums[mid]) {
            L = mid + 1
        } else if (target < nums[mid]) {
            R = mid - 1
        } else {
            return mid
        }

    }
    return L;
};

console.log(searchInsert([1,2,3,5,6,7,8,9,10,11],4))
// [1,2,3,4,5,6,7,8,9,10,11]
// L = 0, mid = 5, R = 10
// L = mid (5 -> 6), R = 10, mid = 








