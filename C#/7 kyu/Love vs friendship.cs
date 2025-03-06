using System;

public static class Kata
{
  public static int WordsToMarks(string str)
  {
    string alphabet = "abcdefghijklmnopqrstuvwxyz";
    int sum = 0;
    
    foreach (char c in str)
    {
      sum += alphabet.IndexOf(c) + 1;
    }
    
    return sum;
  }
}