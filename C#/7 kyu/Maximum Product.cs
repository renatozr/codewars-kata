public class Kata
{
    public static int AdjacentElementsProduct(int[] array)
    {
      int maximumProduct = int.MinValue;
      
      for (int i = 0; i < array.Length - 1; i += 1)
      {
        int j = i + 1;
        
        int first = array[i];
        int second = array[j];
        
        int product = first * second;
        
        if (product > maximumProduct) maximumProduct = product;
      }
      
      return maximumProduct;
    }
}