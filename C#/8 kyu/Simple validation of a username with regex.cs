using System;
using System.Text.RegularExpressions;

public class Kata
{
  public static bool ValidateUsr(string username) 
  {
    return Regex.IsMatch(username, @"^[a-z0-9_]{4,16}$");
  }
}