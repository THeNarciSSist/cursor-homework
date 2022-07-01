"use strict"

export class Student {
  constructor(university, course, fullName) {
    this._university = university
    this._course = course
    this._fullName = fullName
    this._marks = []
    this._isStudent = true
  }

  get marks() {
    return this._isStudent ? this._marks : null
  }

  set marks(value) {
    return this._isStudent ? this._marks.push(value) : null
  }

  getInfo() {
    return `Студент ${this._course}-го курсу ${this._university}, ${this._fullName}.`
  }

  getAverage() {
    return this._isStudent
      ? this._marks.reduce((acc, val) => acc + val) / this._marks.length
      : "Student is dismissed"
  }

  dismiss() {
    return (this._isStudent = false)
  }

  recover() {
    return (this._isStudent = true)
  }
}
