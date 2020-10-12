import sys
string = sys.argv[1]
isPalindrome = string == string[::-1] 
print('is', string, 'palindrome?', isPalindrome)