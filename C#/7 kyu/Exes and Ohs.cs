using System.Linq;
using System;
public static class Kata 
{
  public static bool XO (string input)
  {
    int xCount = 0;
    int oCount = 0;
    
    foreach (char c in input.ToLower())
    {
      if (c == 'x') xCount++;
      if (c == 'o') oCount++;
    }
    
    return xCount == oCount;
  }
}