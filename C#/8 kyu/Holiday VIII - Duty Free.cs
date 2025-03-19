using System;

public class Kata
{
  public static int DutyFree(int normPrice, int discount, int hol)
  {
    double discountRate = discount / 100.0;
    double savePerBottle = normPrice * discountRate;
    int purchaseCount = (int)(hol / savePerBottle);
    
    return purchaseCount;
  }
}