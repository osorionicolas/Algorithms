const duplicateNumbers = [1,2,3,2,1,2]

console.log("Without memoization")

const countDuplicatesSlow = (numbers) => { // O(n^2) big o complexity
    let result = []
    for(let i = 0; i<numbers.length;  i++){ 
        let count = 0
        for(let j = 0; j<numbers.length;  j++){
            if(numbers[i] === numbers[j]){ // if we find a duplicate as we compare all numbers to all numbers
                count++
            }
        }
        result.push(`Found a total of: (${count}) number ${numbers[i]}s`)
    }
    return [...new Set(result)] // only unique
}
console.log(countDuplicatesSlow(duplicateNumbers))



console.log("\nWith memoization")

const countDuplicates = (numbers) => { // O(n) big o complexity
    let result = {}
    for(let i = 0; i<numbers.length;  i++){
        if(!result[numbers[i]]){ // if key does not exist the value has not been accounted for
            let count = 1;
            result[numbers[i]] = numbers[i] //initialize key
            result[numbers[i]] = count // initialize value
        } else {
            result[numbers[i]]++ //increase count if key already exists
        }
    }
    return result
}
console.log(countDuplicates(duplicateNumbers))