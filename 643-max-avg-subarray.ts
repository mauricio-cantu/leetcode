function findMaxAverage(nums: number[], k: number): number {
    let L = 0, R = k, maxAverage = -Infinity
    while (R <= nums.length - 1) {
        let leftToRightSum = 0;
        for (let index = L; index <= R; index++) {
            leftToRightSum += nums[index];            
        }
        const leftToRightMean = leftToRightSum / k;
        maxAverage = Math.max(maxAverage, leftToRightMean)
        L++, R++
    }
    return maxAverage;
};

console.log(findMaxAverage([1,1,1], 2))