const numbers = [1,2,7,8,9]
const sum = 10

console.log("Without memoization")

const twoSumSlow = (numbers, sum) => {// O(n^2) big o complexity
    for(let i = 0; i<numbers.length; i++){
        for(let j = i+1; j<numbers.length; j++){// nested loop j = i+1 to avoid adding same element
            if(numbers[i] + numbers[j] === sum){
                return [i, j]; // return index of elements that sum to target
            }
        }
    }
};

console.log(twoSumSlow(numbers, sum))
// returns => [0,4] which are the indexes of the correct numbers
// because 1 + 9  = 10



console.log("\nWith memoization")

const twoSumFast = (numbers, sum) => {// O(n) big O time complexity

    const dataObject = {}
    for(let i =0; i< numbers.length; i++){
        dataObject[numbers[i]] = i // create memo object
    }
    for(let i =0; i< numbers.length; i++){
        const missingNumber = sum - numbers[i] 

        if(dataObject[missingNumber] && dataObject[missingNumber] !== i){ 
            return [dataObject[missingNumber], i] // return missing number's index and current index
        }
    }
}

console.log(twoSumFast(numbers, sum))
// returns => [0,4] which are the indexes of the correct numbers
// because 1 + 9  = 10



const twoSum = function(nums, target) {
    let firstIndex = 0;
    let secondIndex = 1;
    while (nums[firstIndex] + nums[secondIndex] != target){
        ++secondIndex
        if(secondIndex == nums.length) {
			++firstIndex
			secondIndex = firstIndex + 1
		}
        if(firstIndex == nums.length) break
    }
    return [firstIndex, secondIndex]
}

console.log(twoSum(numbers, sum))

