"use strict"
import { Student } from './Student.js'
import { budgetStudent } from './BudgetStudent.js'

const student1 = new Student("ЛНУ", "3", "Пріндин Віктор")

console.log(student1.getInfo())

student1.mark = 5
student1.mark = 5
student1.mark = 5
student1.mark = 4

console.log(student1.mark);

console.log(student1.getAverage());

console.log(student1.dismiss());

// can't add marks after dismiss func
console.log(student1.mark = 3)
console.log(student1.mark);

console.log(student1.recover());

// recover func gives access to marks
console.log(student1.mark);


const studentBudget1 = new budgetStudent("ЛНУ", "3", "Пріндин Віктор")

console.log(studentBudget1.mark);

console.log(studentBudget1.dismiss());

// can't add marks after dismiss func
console.log(studentBudget1.mark = 3)
console.log(studentBudget1.mark);

console.log(studentBudget1.recover());

// recover func gives access to marks
console.log(studentBudget1.mark);


