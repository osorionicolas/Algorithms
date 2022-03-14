const numbers = [1, 2, 7, 8, 9]
const sum = 10

const quickstart = (number, list, memo = {}) => {
    if (number in memo) return memo[number]
    if (number === 0) return true
    if (number < 0) return false

    for (let num of list) {
        if (quickstart(number - num, list, memo)) {
            memo[number] = true
            return true
        }
    }
    memo[number] = false
    return false
}

console.log(quickstart(sum, numbers))
 