"use strict"

function getRandomArray (length, min, max) {
	let randomArr = []
	while (randomArr.length < length) {
		randomArr.push(Math.round(Math.random() * (max - min + 1) + min - 0.5))
	}
	return randomArr
}
// console.log(getRandomArray(15, 1, 10));

function getModa (...numbers) {
	let filteredArr = [], modes = []

	for(let num of [...numbers]) {
		if(!isNaN(num)) {
			filteredArr = [...numbers].filter((val, i, arr) => arr.indexOf(val) !== arr.lastIndexOf(val))
		}
	}
	// count occurrences
	const frequencies = filteredArr.reduce((a,v) => {
		a[v] = (a[v]||0) + 1
		return a
}, {})
// find maximum frequency number and compare with other values' occurrences
let maxIndex = Math.max(...Object.values(frequencies))

for (let num of new Set(filteredArr)) {
	if(frequencies[num] === maxIndex) modes.push(num)
}
return modes
}
// console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

function getAverage (...numbers) {
	let numArr = [...numbers]
	let result = 0
	for (let i = 0; i < numArr.length; i++) {
	if(!isNaN(numArr[i])) {
		result += numArr[i]
	}
}
return result / numArr.length
}
// console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

function getMedian (...numbers) {
	let sortedArr = [...numbers].sort((a,b) => a - b)

	if(sortedArr.length % 2 !== 0) {
		let average = Math.round(sortedArr.length / 2 - 1)
		return sortedArr[average]
	}

	else {
		let average = sortedArr.length / 2
		return (sortedArr[average - 1] + sortedArr[average]) / 2
	}

}
// console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

function filterEvenNumbers (...numbers) {
	return [...numbers].filter(num => num % 2 !== 0)
}
// console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

function countPositiveNumbers (...numbers) {
	return [...numbers].filter(num => num > 0).length
}
// console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

function getDividedByFive (...numbers) {
	return [...numbers].filter(num => num % 5 === 0)
}
// console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
