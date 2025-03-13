using System;

public static class Kata 
{
    public static string[] Websites;

    static Kata() 
    {
        Websites = new string[1000];
        
        for (int i = 0; i < Websites.Length; i++) 
        {
            Websites[i] = "codewars";
        }
    }
}
