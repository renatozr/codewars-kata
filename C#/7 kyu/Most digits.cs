using System;
using System.Linq;

public class Kata
{
  public static int FindLongest(int[] numbers)
  {
    return numbers.MaxBy(number => number.ToString().Length);
  }
}