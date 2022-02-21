"use strict"

function getMaxDigit(num) {

    if(Number.isInteger(num)) {
        let numMax = String(num)
        numMax.split("")
        return Math.max(...numMax)
    }

    else return "NO float numbers"
}

// console.log(getMaxDigit(1256)); // 6


function calcNumPow (a, b) {
    let sum = a
    for (let i = 1; i < b; i++) {
        sum *= a
    }
    return sum
}

// console.log(numPow(5, 2)); // 25

function toUpperCaseLetter (word) {
    return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase()
}

// console.log(toUpperCaseLetter("nUMBER")); // Number

function calcSumWithTax (num) {
    let tax = 19.5 / 100;
    return num - num * tax
}

// console.log(calcSumWithTax(1000)); // 805

function getRandomNumber (a, b) {
    return  Math.round(Math.random() * (b - a) + a)
}

// console.log(getRandomNumber(1, 100)) // any number

function countLetter(letter, word) {

    const frequencies = word.toLowerCase().split("").reduce((a,v) => {
        a[v] = (a[v]||0) + 1
        return a
    }, {})
    return frequencies[letter];
  }

// console.log(countLetter("а", "Асталавіста"));  // 4

function convertCurrency (num) {
    let numRegEx = /^\d+/i;
    if (/^\d+[^.]\$$/.test(num)) {
        return num.match(numRegEx).join() * 25 + " грн"
    }

    else if(/^\d+[^.]UAH$/.test(num))
        return num.match(numRegEx).join() / 25 + " $"

    else {
        return "Unfortunately, this currency is not supported :("
    }
}

// console.log(convertCurrency("100$")); // 2500 uah


function getRandomPassword (num = 8) {
    let password = []
    for (let i = 0; i < num; i++) {
        let randomNum = Math.round(Math.random() * 9)
        password.push(randomNum)
    }
    return password.join("")
    
}

// console.log(getRandomPassword(4)); // random password with 4 digits


function deleteLetters (letter, word) {
    let newWord = word.toLowerCase().split("").filter(x => x !== letter)

    return newWord.join("")
}

// console.log(deleteLetters("a", "blablabla"));

function isPalyndrom(word) {
    let originalWord = word.toLowerCase().split(" ").join("")
    let reversedWord = word.toLowerCase().split("").reverse().join("").replace(/ /g, "")

    return originalWord === reversedWord ? true : false
}

// console.log(isPalyndrom("Я несу гусеня")); // true