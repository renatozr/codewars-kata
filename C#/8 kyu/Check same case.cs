public class Kata {
  public static int SameCase(char a, char b) {
    if (!char.IsLetter(a) || !char.IsLetter(b)) return -1;
    
    return char.IsLower(a) == char.IsLower(b) ? 1 : 0;
  }
}