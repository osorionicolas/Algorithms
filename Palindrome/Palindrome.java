import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Palindrome {

    public static void main(String[] args) {
        System.out.println(isPalidrome("abccba"));
        System.out.println(isPalidrome("ME"));
    }

    private static boolean isPalidrome(String word) {
        String result = revert(word);
        return result.equals(word);
    }

    private static String revert (String word) {
        int half = word.length() / 2;
        char[] array = word.toCharArray();
        for(int i = 0; i < half; i++) {
            char aux = array[i];
            array[i] = array[word.length() - 1 - i];
            array[word.length() - 1 - i] = aux;
        }
        return new String(array);
    }
}
