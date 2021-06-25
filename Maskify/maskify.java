/*Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct.
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which will:

Mask all digits (0-9) with #, unless they are first or last four characters.
Never mask credit cards with less than 6 characters.
Never mask non-digit characters.

"4556364607935616"		"4###########5616"	
"4556-3646-0793-5616"	"4###-####-####-5616"	
"64607935616"			"6######5616"	
ABCD-EFGH-IJKLM-NOPQ	ABCD-EFGH-IJKLM-NOPQ	
A1234567BCDEFG89HI		A#######BCDEFG89HI	
"12345"					"12345"	No #s if less than 6 characters
""						""	Make sure to handle empty strings
"Skippy"				"Skippy"*/

import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Main {

	public static void main(String[] args) {
		String response = maskify("4556364607935616");
		System.out.println(response);

	}

	public static String maskify(String creditCardNumber) {
		if(creditCardNumber.length() < 6) return creditCardNumber;
		
		return IntStream.range(0, creditCardNumber.length())
						.mapToObj(index -> index + ":" + creditCardNumber.charAt(index))
						.map(e -> {
							Integer index = Integer.valueOf(e.split(":")[0]);
							Character _char = e.split(":")[1].charAt(0);
							return (!Character.isDigit(_char) || index == 0 || index > creditCardNumber.length() - 5) ? _char.toString() : "#";
						})
						.collect(Collectors.joining());
	}

}
