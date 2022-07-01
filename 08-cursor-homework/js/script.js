"use strict"
import { Student } from "./Student.js"
import { BudgetStudent } from "./BudgetStudent.js"

const student1 = new Student("ЛНУ", "3", "Пріндин Віктор")

console.log(student1.getInfo())

student1.marks = 5
student1.marks = 5
student1.marks = 5
student1.marks = 4

console.log(student1.marks)

console.log(student1.getAverage())

student1.dismiss()

// can't add marks after dismiss func
console.log((student1.marks = 3))
console.log(student1.marks)
console.log(student1.getAverage())

student1.recover()

// recover func gives access to marks
console.log(student1.marks)

const studentBudget1 = new BudgetStudent("ЛНУ", "3", "Пріндин Віктор")

console.log(studentBudget1.marks)

studentBudget1.dismiss()

// can't add marks after dismiss func
console.log((studentBudget1.marks = 3))
console.log(studentBudget1.marks)

console.log(studentBudget1.recover())

// recover func gives access to marks
console.log(studentBudget1.marks)
