"use strict"

const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

// Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"]
// - яка повертає список предметів для конкретного студента. 
// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
function getSubjects (studentObj) {
	const {subjects} = studentObj
	const allSubjects = Object.keys(subjects)
	return allSubjects.map((el) => (el[0].toUpperCase() + el.slice(1, el.length)).replace(/_/g, ' '))
}

console.log(getSubjects(students[0]));


// Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку 
// по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. 
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)
function getAverageMark(studentObj) {
	const {subjects} = studentObj
	const studentSubjectsMarks = Object.values(subjects)
	const marks = []
	studentSubjectsMarks.forEach(el => marks.push(...el))
	return +(marks.reduce((acc, num) => acc + num, 0) / marks.length).toFixed(2)
}

console.log(getAverageMark(students[0]))


// Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – 
// яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). 
// ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.
function getStudentInfo (studentObj) {
	const {course, name} = studentObj
	const studentInfo = {
		course,
		name,
		averageMark: +getAverageMark(studentObj),
	}
	return studentInfo
}

console.log(getStudentInfo(students[0]));


// Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка 
// повертає імена студентів у алфавітному порядку.
function getStudentsNames (studentsArr) {
	return studentsArr.map((student) => student.name).sort()
}

console.log(getStudentsNames(students))


// Створіть функцію getBestStudent(students) --> "Anton" – яка 
// повертає кращого студента зі списку по показнику середньої оцінки.
function getBestStudent(studentsArr) {
	const studentNames = studentsArr.map(student => student.name)
	const studentsMarks = studentsArr.map(student => getAverageMark(student))
	const bestMark = Math.max(...studentsMarks)
	return studentNames[studentsMarks.indexOf(bestMark)]
}

console.log(getBestStudent(students));


// Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка 
// повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
function calculateWordLetters (word) {
	const frequencies = word.replace(/\s/g, "").split("").reduce((a,v) => {
		a[v] = (a[v]||0) + 1
		return a
}, {})
 return frequencies
}

console.log(calculateWordLetters("тес т"));