using System;
using System.Linq;

public class Kata
{
  public static string SortGiftCode(string code)
  {
    return new string(code.OrderBy(c => c).ToArray());
  }
}