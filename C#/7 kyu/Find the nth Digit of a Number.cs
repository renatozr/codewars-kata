using System;
using System.Linq;

public class Kata
{
  public static int FindDigit(int num, int nth)
  {
    if (nth <= 0)
    {
      return -1;
    }
    
    char[] digits = Math.Abs(num).ToString().Reverse().ToArray();
    
    if (nth > digits.Length)
    {
      return 0;
    }
    
    return digits[nth - 1] - '0';
  }
}