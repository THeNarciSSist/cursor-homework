"use strict"

export class Student {
	constructor(university, course, fullName) {
		this.university = university
		this.course = course
		this.fullName = fullName
		this.marks = []
		this.isStudent = true
	}

	get mark() {
		if (this.isStudent) return this.marks
		else return null
	}
	
	set mark (value) {
		if(this.isStudent) return this.marks.push(value)
		else return null
	}

	getInfo() {
		return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}.`
	}

	getAverage() {
		return this.marks.reduce((acc, val) => acc + val) / this.marks.length
	}

	dismiss() {
		return this.isStudent = false
	}

	recover() {
		return this.isStudent = true
	}
}