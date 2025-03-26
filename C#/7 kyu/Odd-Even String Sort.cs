public class Kata
{
  public static string SortMyString(string s)
  {
    string evenIndexed = "";
    string oddIndexed = "";
    
    for (int i = 0; i < s.Length; i++)
    {
      if (i % 2 == 0)
      {
        evenIndexed += s[i];
      }
      else
      {
        oddIndexed += s[i];
      }
    }
    
    return evenIndexed + " " + oddIndexed;
  }
}