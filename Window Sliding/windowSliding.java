/*
 * The general use of the Sliding window technique can be demonstrated as follows:
 *
 * Find the size of the window required 
 * Compute the result for 1st window, i.e. from the start of the data structure
 * Then use a loop to slide the window by 1, and keep computing the result window by window.
 */

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {

	public static void main(String[] args) {
		List<Double> trees = Arrays.asList(1, 6, 12, 15, 19, 21, 26, 32, 36, 41, 43, 44, 45, 47, 51, 52, 58, 61).stream().map(num -> Double.valueOf(num)).collect(Collectors.toList());
		double response = getBestAngle(30, trees);
		System.out.println(response);
	}
	
	static double getBestAngle(double alpha, List<Double> trees){
		int totalOfTrees = 0;
		for(int index = 0; index < trees.size() - 1; index ++){
			int partialTrees = 0;
			Double firstPoint = trees.get(index);
			for(int secondaryIndex = index + 1; secondaryIndex < trees.size() ; secondaryIndex ++){
				Double secondaryPoint = trees.get(secondaryIndex);
				if(secondaryPoint - firstPoint <= alpha){
					partialTrees = secondaryIndex - index;
				}
				else{
					break;
				}

			}
			totalOfTrees = totalOfTrees > partialTrees ? totalOfTrees : partialTrees;
		}
		return totalOfTrees;
	}

}
