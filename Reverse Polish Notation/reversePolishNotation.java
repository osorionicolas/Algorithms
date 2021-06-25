/*Your job is to create a calculator which evaluates expressions in Reverse Polish notation.
For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.
Note that for simplicity you may assume that there are always spaces between numbers and operations, e.g. 1 3 + expression is valid, but 1 3+ isn't.
Empty expression should evaluate to 0.
Valid operations are +, -, *, /.
You may assume that there won't be exceptional situations (like stack underflow or division by zero).

Examples
"1 2 3.5"				3.5
"10000 123 +"			10123
"5 1 2 + 4 * + 3 -"		14*/

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;
import java.util.function.BiFunction;

public class Main {

	static Map<String, BiFunction<Double, Double, Double>> operations = new HashMap<String, BiFunction<Double, Double, Double>>() {{
		put("+", (a,b) -> a + b);
		put("-", (a,b) -> b - a);
		put("*", (a,b) -> a * b);
		put("/", (a,b) -> a / b);
	}};

	public static void main(String[] args) {
		double response = evaluate("5 1 2 + 4 * + 3 -");
		System.out.println(response);
	}

	public static double evaluate(String expr) {
		if(expr.isBlank()) return 0;
		Stack<Double> numbers = new Stack<>();
		Arrays.asList(expr.split(" ")).stream().forEach(number -> 
			numbers.push(operations.containsKey(number) ? operations.get(number).apply(numbers.pop(), numbers.pop()) : Double.parseDouble(number))
		);
		return numbers.pop();
	}

}