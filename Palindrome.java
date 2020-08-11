import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Palindrome {

    public static void main(String[] args) {
        System.out.println(isPalidrome("abccba"));
        System.out.println(isPalidrome("ME"));
    }

    private static boolean isPalidrome(String word) {

        char[] wordChar = word.toCharArray();
        String result = IntStream.range(0, wordChar.length)
                .mapToObj(i -> wordChar[wordChar.length - i - 1])
                .map(Object::toString)
                .collect(Collectors.joining(""));
        return result.equals(word);
    }
}