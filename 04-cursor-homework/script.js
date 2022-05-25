"use strict"

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


function getGirlNames (studentsArr) {
	return studentsArr.filter(student => student.lastIndexOf('а') === student.length - 1)
}


function getBoyNames (studentsArr) {
	return studentsArr.filter(student => student.lastIndexOf('а') !== student.length - 1)
}


function makePairs (girlsArr, boysArr) {
	const pairs = []
	for (let i = 0; i < Math.round(students.length / 2); i++) {
		pairs.push([`${girlsArr[i]} і ${boysArr[i]}`])
	}
	return pairs
}


function concatPairWithTheme (pairsArr, themesArr) {
	const finalArr = []
	for (let i = 0; i < Math.round(students.length / 2); i++) {
		finalArr.push([...pairsArr[i], themesArr[i]])
	}
	return finalArr
}

function addStudentsMarks (studentsArr, marksArr) {
	const studentsMarks = []
	for (let i = 0; i < studentsArr.length; i++) {
		studentsMarks.push([studentsArr[i], marksArr[i]])
	}
	return studentsMarks
}


function addRandomMarks (pairAndThemeArr, min, max) {
	const pairsWithRandomMarks = []

	for (let pair of pairAndThemeArr) {
		pairsWithRandomMarks.push([...pair, Math.round(Math.random() * (max - min + 1) + min - 0.5)])
	}
	return pairsWithRandomMarks
}
;

const girls = getGirlNames(students)
console.log(girls);
const boys = getBoyNames(students)
console.log(boys);
const pairs = makePairs(girls, boys)
console.log(pairs);
const pairAndTheme = concatPairWithTheme(pairs, themes) 
console.log(pairAndTheme);
const studentsWithMarks = addStudentsMarks(students, marks)
console.log(studentsWithMarks);
const studentsWithRandomMarks = addRandomMarks(pairAndTheme, 1, 5)
console.log(studentsWithRandomMarks);

