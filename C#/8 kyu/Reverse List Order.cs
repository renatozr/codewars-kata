using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
  public static List<int> ReverseList(List<int> lst)
  {
    return lst.AsEnumerable().Reverse().ToList();
  }
}