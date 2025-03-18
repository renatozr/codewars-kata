public class Kata
{
    public static char FindMissingLetter(char[] array)
    {
        int expectedSum = 0;
        for (char c = array[0]; c <= array[array.Length - 1]; c++)
        {
            expectedSum += c;
        }

        int actualSum = 0;
        foreach (char c in array)
        {
            actualSum += c;
        }

        return (char)(expectedSum - actualSum);
    }
}
