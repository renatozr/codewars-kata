using System;

public class Kata
{
  public static int SumMul(int n, int m)
  {
    if (n < 1 || m <= n)
    {
      throw new ArgumentException();
    }

    int sum = 0;

    for (int multiple = n; multiple < m; multiple += n)
    {
      sum += multiple;
    }

    return sum;
  }
}