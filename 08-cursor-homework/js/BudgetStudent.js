"use strict"
import { Student } from "./Student.js"

export class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName)
    this._studentBudget = 0
    // hardcoded values
    this._marks = [5, 4, 3, 5]
    this.getScholarship()
  }

  getScholarship() {
    setInterval(() => {
      if (this.getAverage() >= 4 && this._isStudent) {
        console.log("Ви отримали 1400 грн стипендії")
        console.log(`Ваша стипендія: ${this._studentBudget + 1400} грн.`)
        return (this._studentBudget += 1400)
      } else {
        console.log("На жаль, ми не можемо надати Вам стипендію")
        return null
      }
    }, 30000)
  }
}
