public class Kata
{
  public static string WhatDay(int n)
  {
    if (n < 1 || n > 7) return "Wrong, please enter a number between 1 and 7";
    
    string[] weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    return weekdays[n - 1];
  }
}