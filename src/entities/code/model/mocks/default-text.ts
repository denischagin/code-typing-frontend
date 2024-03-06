export const defaultTexts = `
    object Solution {
  def main(args: Array[String]): Unit = {
    val result: (String, Int) => String = (v1, v2) => Student(v1, v2).toString
    println(result("Андрей", 19))
  }
}

case class Student(name: String, age: Int)

object Student {
  def apply(name: String, age: Int): Student = new Student(age.toString, name.toInt)
}
    `