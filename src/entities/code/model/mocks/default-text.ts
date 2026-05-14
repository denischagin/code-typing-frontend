import type { CodeExample } from "@entities/code"

const createDefaultText = (languageName: string, content: string): CodeExample => ({
    UUID: `default-${languageName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    content,
    languageName
})

export const defaultTexts: CodeExample[] = [
    createDefaultText(
        "Scala",
        `object Solution {
  def main(args: Array[String]): Unit = {
    val result: (String, Int) => String = (name, age) => Student(name, age).toString
    println(result("Android", 19))
  }
}

case class Student(name: String, age: Int)`
    ),
    createDefaultText(
        "Java",
        `public class Solution {
    public static void main(String[] args) {
        String result = getResult("Android", 19);
        System.out.println(result);
    }

    private static String getResult(String name, int age) {
        return new Student(name, age).toString();
    }
}

class Student {
    private final String name;
    private final int age;

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}`
    ),
    createDefaultText(
        "TypeScript",
        `type User = {
  id: number
  name: string
  isActive: boolean
}

const users: User[] = [
  { id: 1, name: "Ada", isActive: true },
  { id: 2, name: "Linus", isActive: false }
]

const activeNames = users.filter(user => user.isActive).map(user => user.name)
console.log(activeNames.join(", "))`
    ),
    createDefaultText(
        "JavaScript",
        `const prices = [12, 8, 24, 16]
const total = prices.reduce((sum, price) => sum + price, 0)
const average = total / prices.length

console.log(` +
            "`Total: ${total}`" +
            `)
console.log(` +
            "`Average: ${average}`" +
            `)`
    ),
    createDefaultText(
        "Python",
        `def fibonacci(limit):
    numbers = [0, 1]
    while numbers[-1] + numbers[-2] <= limit:
        numbers.append(numbers[-1] + numbers[-2])
    return numbers

for value in fibonacci(100):
    print(value)`
    ),
    createDefaultText(
        "Go",
        `package main

import "fmt"

func main() {
    tasks := []string{"build", "test", "deploy"}
    for index, task := range tasks {
        fmt.Printf("%d: %s\\n", index+1, task)
    }
}`
    ),
    createDefaultText(
        "Rust",
        `fn main() {
    let numbers = vec![2, 4, 6, 8];
    let sum: i32 = numbers.iter().sum();

    println!("sum = {}", sum);
    println!("count = {}", numbers.len());
}`
    ),
    createDefaultText(
        "Kotlin",
        `data class Book(val title: String, val pages: Int)

fun main() {
    val books = listOf(Book("Clean Code", 464), Book("Refactoring", 448))
    val longBooks = books.filter { it.pages > 450 }
    println(longBooks.joinToString { it.title })
}`
    ),
    createDefaultText(
        "C#",
        `using System;
using System.Linq;

var scores = new[] { 95, 82, 77, 100 };
var best = scores.Max();
var passed = scores.Count(score => score >= 80);

Console.WriteLine($"Best score: {best}");
Console.WriteLine($"Passed: {passed}");`
    ),
    createDefaultText(
        "C++",
        `#include <iostream>
#include <vector>

int main() {
    std::vector<int> values {3, 6, 9, 12};
    int total = 0;

    for (int value : values) {
        total += value;
    }

    std::cout << "total = " << total << std::endl;
}`
    ),
    createDefaultText(
        "PHP",
        `<?php

$names = ["Grace", "Alan", "Barbara"];

foreach ($names as $index => $name) {
    echo ($index + 1) . ". " . strtoupper($name) . PHP_EOL;
}
`
    ),
    createDefaultText(
        "Ruby",
        `orders = [
  { id: 1, total: 42 },
  { id: 2, total: 18 },
  { id: 3, total: 75 }
]

large_orders = orders.select { |order| order[:total] > 40 }
puts large_orders.map { |order| order[:id] }.join(", ")`
    ),
    createDefaultText(
        "Swift",
        `struct Task {
    let title: String
    let isDone: Bool
}

let tasks = [Task(title: "Write tests", isDone: true), Task(title: "Ship app", isDone: false)]
let openTasks = tasks.filter { !$0.isDone }

print(openTasks.map { $0.title }.joined(separator: ", "))`
    ),
    createDefaultText(
        "Dart",
        `void main() {
  final words = ['code', 'typing', 'practice'];
  final sentence = words.map((word) => word.toUpperCase()).join(' ');

  print(sentence);
}`
    ),
    createDefaultText(
        "Elixir",
        `defmodule Greeter do
  def hello(names) do
    names
    |> Enum.map(fn name -> "Hello, " <> name end)
    |> Enum.join("\n")
  end
end

IO.puts(Greeter.hello(["Ada", "Edsger"]))`
    ),
    createDefaultText(
        "Haskell",
        `doubleValues :: [Int] -> [Int]
doubleValues values = map (* 2) values

main :: IO ()
main = do
  let result = doubleValues [1, 2, 3, 4]
  print result`
    ),
    createDefaultText(
        "Lua",
        `local inventory = { apple = 3, orange = 5, pear = 2 }
local total = 0

for item, count in pairs(inventory) do
  print(item .. ": " .. count)
  total = total + count
end

print("total: " .. total)`
    ),
    createDefaultText(
        "SQL",
        `SELECT department, COUNT(*) AS employee_count
FROM employees
WHERE active = TRUE
GROUP BY department
HAVING COUNT(*) > 3
ORDER BY employee_count DESC;`
    ),
    createDefaultText(
        "HTML",
        `<article class="card">
  <h2>Typing practice</h2>
  <p>Small daily sessions improve speed and accuracy.</p>
  <button type="button">Start</button>
</article>`
    ),
    createDefaultText(
        "CSS",
        `.card {
  display: grid;
  gap: 12px;
  padding: 16px;
  border: 1px solid #9ca3af;
  border-radius: 8px;
}

.card button:hover {
  transform: translateY(-1px);
}`
    ),
    createDefaultText(
        "Shell",
        `#!/usr/bin/env bash

set -euo pipefail

for file in src/*.ts; do
  echo "Checking ${"$"}{file}"
  test -f "${"$"}{file}"
done`
    ),
    createDefaultText(
        "R",
        `values <- c(10, 12, 15, 18, 20)
average <- mean(values)
above_average <- values[values > average]

print(average)
print(above_average)`
    )
]
