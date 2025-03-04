using System;

public static class Kata
{
  public static string CountSheep(int n)
  {
    string result = "";
    
    for (int i = 1; i <= n; i++)
    {
      result += $"{i} sheep...";
    }
    
    return result;
  }
}