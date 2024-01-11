function twoSum (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const currentValueInMap = map.get(nums[i]);
    if (currentValueInMap === undefined) {
      map.set(nums[i], i);
    }

    const compliment = target - nums[i];
    const complimentIndex = map.get(compliment);
    if (complimentIndex != undefined && i !== complimentIndex) {
      return [complimentIndex, i];
    }
  }
  return [];
}

console.log(twoSum([3,3], 6));
