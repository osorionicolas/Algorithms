import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class CharCount {

    public static void main(String[] args) {
        Map<Object, Long> map = 
            args[0].chars()
                    .mapToObj(i -> (char) i)
                    .collect(Collectors.groupingBy(
                        Function.identity(), Collectors.counting()
                    ));
        System.out.println(map);
    }
    
}
