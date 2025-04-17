using System;

public static class Kata
{
  public static string Array(string s)
  {
    string[] items = s.Split(',');
    
    if (items.Length < 3) return null;
    
    return string.Join(' ', items[1..^1]);
  }
}