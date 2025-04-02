public class Human
{
  public Human() {}
}

public class Man : Human
{
  public Man() {}
}

public class Woman : Human
{
  public Woman() {}
}

public class God
{
  public static Human[] Create()
  {
    return [new Man(), new Woman()];
  }
}
