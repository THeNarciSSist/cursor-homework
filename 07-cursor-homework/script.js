"use strict"

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// Створіть функцію getMyTaxes.call(country, salary) -> number; – яка 
// рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
// Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary) {
	return +(salary * this.tax).toFixed(2)
}

console.log("Ukraine:", getMyTaxes.call(ukraine, 2000))
console.log("Latvia:", getMyTaxes.call(latvia, 2000))
console.log("Lithuania:", getMyTaxes.call(litva, 2000))


// Створіть функцію getMiddleTaxes.call(country) -> number; – яка 
// рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. 
// (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes () {
	return +(this.middleSalary * this.tax).toFixed(2)
}

console.log("Ukraine:", getMiddleTaxes.call(ukraine))
console.log("Latvia:", getMiddleTaxes.call(latvia))
console.log("Lithuania:", getMiddleTaxes.call(litva))


// Створіть функцію getTotalTaxes.call(country) -> number; – 
// яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. 
// (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes () {
	return +(this.tax * this.middleSalary * this.vacancies).toFixed(2)
}

console.log("Ukraine:", getTotalTaxes.call(ukraine))
console.log("Latvia:", getTotalTaxes.call(latvia))
console.log("Lithuania:", getTotalTaxes.call(litva))


// Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: 
// { salary: number, taxes: number, profit: number } кожні 10 секунд. 
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. 
// taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

function getMySalary () {
	setInterval(() => {
	const randomSalary = +(Math.random() * (2000 - 1500) + 1500).toFixed(2)
	const info = {
		salary: randomSalary,
		taxes: getMyTaxes.call(this, randomSalary),
		profit: +(randomSalary - randomSalary * this.tax).toFixed(2),
	}
	console.log(info)
	}, 1000)
}

getMySalary.call(ukraine)