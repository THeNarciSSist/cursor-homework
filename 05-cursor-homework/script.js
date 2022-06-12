"use strict"

function getRandomArray (length, min, max) {
	let randomArr = []
	if (min > max || Number.isInteger(min) !== true ||  Number.isInteger(max) !== true) {
		return "Min number can't be bigger than max number. Also do not enter float numbers"
	}
	while (randomArr.length < length) {
		randomArr.push(Math.round(Math.random() * (max - min + 1) + min - 0.5))
	}
	return randomArr
}
console.log(getRandomArray(15, 1, 10));

function getModa (...numbers) {
	let modes = []
	// filter values that repeats at least 2 times
	let	filteredArr = [...numbers].filter((val, i, arr) => arr.indexOf(val) !== arr.lastIndexOf(val) && Number.isInteger(val) === true)
	// count occurrences
	const frequencies = filteredArr.reduce((a,v) => {
		a[v] = (a[v]||0) + 1
		return a
}, {})
// find maximum frequency number and compare with other values' occurrences
let maxIndex = Math.max(...Object.values(frequencies))
for (let num of new Set(filteredArr)) {
	frequencies[num] === maxIndex ? modes.push(num) : null
}
return modes
}
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 23.2, 23.2, 23.2, 23.2, 23.2));

function getAverage (...numbers) {
	const numArr = [...numbers].filter(num => Number.isInteger(num))
	const result = numArr.reduce((acc, val) => acc + val)
return result / numArr.length
}
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 32.2))

function getMedian (...numbers) {
	let sortedArr = [...numbers].sort((a,b) => a - b).filter(el => Number.isInteger(el))

	if(sortedArr.length % 2 !== 0) {
		let average = Math.round(sortedArr.length / 2 - 1)
		return sortedArr[average]
	}

	else {
		let average = sortedArr.length / 2
		return (sortedArr[average - 1] + sortedArr[average]) / 2
	}

}
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 23.2));

function filterEvenNumbers (...numbers) {
	return [...numbers].filter(num => num % 2 !== 0)
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

function countPositiveNumbers (...numbers) {
	return [...numbers].filter(num => num > 0).length
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6, 0));

function getDividedByFive (...numbers) {
	return [...numbers].filter(num => num % 5 === 0 && num !== 0)
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


function replaceAndAddBadWords () {
	let badWords = []

	return function (string, ...newBadWords) {
		let stringToCheck = string.split(" ")
		// add new bad words
		if (!badWords.includes(...newBadWords)) {
			badWords.push(...newBadWords)
		}
		// create new array with transformed bad words
		stringToCheck.forEach((word, index) => {
				for (let i = 0; i < badWords.length; i++) {
					let rgx = new RegExp(badWords[i], "gi")
					if(word.toLowerCase().includes(badWords[i])) {
					stringToCheck[index] = word.replace(rgx, badWords[i].split("").fill("*").join(""))
				}
					else continue
			}
		})
	return stringToCheck.join(" ")
	}
}

let replaceBadWords = replaceAndAddBadWords()
console.log(replaceBadWords("Are you fuckingfucking kidding? OMG, shit! You are Bastard!", "fuck", "shit"));
console.log(replaceBadWords("Are you fuckingfucking kidding? OMG, shit! You are Bastard!", "bastard"));


function divideByThree(word) {
	const result = []
	if (word.split('').length < 3) {
		return "not enough letters. Write word with 4 or more letters"
	}
		let wordToDivide = word.toLowerCase().replace(/\s/g, "").split("")
		wordToDivide.map((el, i, arr) => result.push(arr.splice(i, 3, 0).join("")))
		return result
}

console.log(divideByThree("commander r"));

function generateCombinations([...wordArr]) {
	let resultArr = []
	let result = []
	if (wordArr.length === 1) return [wordArr]

	wordArr.forEach((letter) => {
		let temporary = generateCombinations(wordArr.filter((l, i, arr) => {arr.sort((a, b) => a - b)
		 return arr[i] === arr[i + 1] || l !== letter}))
		temporary = [...temporary].map(combinations => [letter, ...combinations])
		resultArr = [...resultArr, ...temporary]
	})
	resultArr.forEach(element => result.push(element.join("")))
	return  Array.from(new Set(result))
}

console.log(generateCombinations("man"));
console.log(generateCombinations("mman"));