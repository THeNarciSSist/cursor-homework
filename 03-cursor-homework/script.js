"use strict"

function getMaxDigit(num) {

    if(Number.isInteger(num)) {
        return Math.max(...(String(num).split("")))
    }

    else return "NO float numbers"
}

// console.log(getMaxDigit(1256)); // 6


function calcNumPow (a, b) {
    let sum = 1
    for (let i = 0; i < b; i++) {
        sum *= a
    }
    return sum
}

console.log(calcNumPow(5, 2)); // 25


function toUpperCaseLetter (word) {
    return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase()
}

// console.log(toUpperCaseLetter("nUMBER")); // Number


function calcSumWithTax (num) {
    let tax = 19.5 / 100;
    return num - num * tax
}

// console.log(calcSumWithTax(1000)); // 805


function getRandomNumber (min, max) {
    return  Math.round(Math.random() * (max - min) + min)
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

    if (/^\d+\$$/.test(num)) {
        return num.match(numRegEx).join() * 25 + " грн"
    }

    else if(/^\d+UAH$/i.test(num))
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
    let newWord = word.toLowerCase().split("").filter(x => x !== letter).join("")

    return newWord
}

// console.log(deleteLetters("a", "blablabla"));

function isPalyndrom(word) {
    let originalWord = word.toLowerCase().split(" ").join("")
    let reversedWord = word.toLowerCase().split("").reverse().join("").replace(/ /g, "")

    return originalWord === reversedWord
}

// console.log(isPalyndrom("Я несу гусеня")); // true


function deleteDuplicateLetter(word) {
    const originalWord = word.toLowerCase().replace(/ /g, "").split("")
    const frequencies = originalWord.reduce((a,v) => {
    a[v] = (a[v]||0) + 1
    return a
}, {})

return originalWord.filter(v => frequencies[v] === 1).join("")
}

console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним")) // "сктдеим"


document.writeln(`
    1) getMaxDigit(1256) = ${getMaxDigit(1256)}<br>
    2) calcNumPow(5, 2) = ${calcNumPow(5, 2)}<br>
    3) toUpperCaseLetter("nUMBER") = ${toUpperCaseLetter("nUMBER")}<br>
    4) calcSumWithTax(1000) = ${calcSumWithTax(1000)}<br>
    5) getRandomNumber(1, 100) = ${getRandomNumber(1, 100)}<br>
    6) countLetter('а', 'Асталавіста') = ${countLetter('а', 'Асталавіста')}<br>
    7) convertCurrency('100$') = ${convertCurrency('100$')}<br>
    8) getRandomPassword(8) = ${getRandomPassword()}<br>
    9) deleteLetters('a', 'blablabla') = ${deleteLetters('a', 'blablabla')}<br>
    10) isPalyndrom("Я несу гусеня") = ${isPalyndrom("Я несу гусеня")}<br>
    11) deleteDuplicateLetter("Бісквіт був дуже ніжним") = ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}
`)
