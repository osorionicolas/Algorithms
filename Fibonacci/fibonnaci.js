const fibonacci = (number, memo = {}) => {
	if (number in memo) return memo[number]
	if(number < 2) return 1

	memo[number] = fibonacci(number - 1, memo) + fibonacci(number - 2, memo)
	return memo[number]
}

console.log(fibonacci(5))