using System;

public class Predicter
{
    public static int PredictAge(int age1, int age2, int age3, int age4, int age5, int age6, int age7, int age8){
      int[] ages = [age1, age2, age3, age4, age5, age6, age7, age8];
      int sum = 0;
      
      foreach (int age in ages)
      {
        sum += age * age;
      }
      
      double result = Math.Sqrt(sum);
      result /= 2;
      
      return (int) Math.Floor(result);
    }
}