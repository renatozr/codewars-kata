using System;
using System.Linq;

public class Kata
{
  public static int[] MergeArrays(int[] arr1, int[] arr2)
  {
    return arr1.Union(arr2).OrderBy(n => n).ToArray();
  }
}