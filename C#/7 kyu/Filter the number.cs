using System;
using System.Text.RegularExpressions;

public class Kata
{
  public static int FilterString(string s)
  { 
    return int.Parse(string.Concat(Regex.Matches(s, @"\d")));
  }
}