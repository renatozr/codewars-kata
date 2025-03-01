using System.Linq;

public static class Kata
{
  public static int SumOfDifferences(int[] arr)
  {
    return arr.Length > 1 ? arr.Max() - arr.Min() : 0;
  }
}