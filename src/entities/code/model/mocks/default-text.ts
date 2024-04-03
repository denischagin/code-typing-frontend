const scala = `
    object Solution {
  def main(args: Array[String]): Unit = {
    val result: (String, Int) => String = (v1, v2) => Student(v1, v2).toString
    println(result("Android", 19))
  }
}

case class Student(name: String, age: Int)

object Student {
  def apply(name: String, age: Int): Student = new Student(age.toString, name.toInt)
}`

const java = `
public class Solution {
    public static void main(String[] args) {
        String result = getResult("Android", 19);
        System.out.println(result);
    }
    private static String getResult(String name, int age) {
        return new Student(name, age).toString();
    
}

public class Student {
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
`

export const defaultTexts = [scala, java]
