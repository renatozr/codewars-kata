using System;
using System.Text.RegularExpressions;

public class Kata
{
    public static bool ValidatePin(string pin)
    {
        return !pin.Contains('\n') && Regex.IsMatch(pin, @"^(\d{4}|\d{6})$");
    }
}
