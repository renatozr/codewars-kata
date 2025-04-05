using System;

public static class Kata
{
  public static int NearestSq(int n)
  {
    return (int)Math.Pow(Math.Round(Math.Sqrt(n)), 2);
  }
}