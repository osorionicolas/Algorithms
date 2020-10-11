var string = process.argv.slice(2)[0];
console.log(string);

function palindrome() {
	if(string){
		const original = string.replace(/\s/g,'').toLowerCase();
		const reverse = original.split('').reverse().join('');
		return original === reverse;
	}
}

console.log(palindrome());