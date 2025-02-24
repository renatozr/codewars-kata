public class Kata
{
  public static string Position(char letter)
  {
    string alphabet = "abcdefghijklmnopqrstuvwxyz";
    int position = alphabet.IndexOf(letter) + 1;
      
    return $"Position of alphabet: {position}";
  }
}