using System;

public class Kata
{
  public static int CalculateTip(double amount, string rating)
  {
    double tipRate = 0;
    
    switch (rating.ToLower())
    {
        case "terrible":
          tipRate = 0;
          break;
        case "poor":
          tipRate = 0.05;
          break;
        case "good":
          tipRate = 0.1;
          break;
        case "great":
          tipRate = 0.15;
          break;
        case "excellent":
          tipRate = 0.2;
          break;
        default:
          return -1;
    }
    
    int tip = (int) Math.Ceiling(amount * tipRate);
    
    return tip;
  }
}