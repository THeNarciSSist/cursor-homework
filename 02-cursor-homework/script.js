"use strict"

let n
let m;
let result = 0


// If ESC, OK or empty string is typed - ask again
// if it's not number - reload a page
do {
    n = prompt("Enter first number:", "")
    console.log(n);
    
} while (n === null || n.includes(" ") || n.length === 0)

let firstUserNumber = +n
if(!Number.isInteger(firstUserNumber)) {
    alert("You entered float number or letter. Try again")
    document.location.reload()
}

do {
    m = prompt("Enter second number:", "")
} while (m === null || m.includes(" ") || m.length === 0)

let secondUserNum = +m
if(!Number.isInteger(secondUserNum)) {
    alert("You entered float number or letter. Try again")
    document.location.reload()
}


// reload page in specific cases
if(firstUserNumber > secondUserNum || firstUserNumber === secondUserNum) {
    alert("N is bigger than M or numbers are equal. Try again")
    document.location.reload()
}
    
   
// ask, whether skip EVEN num or not
let booleanVal = confirm("Should i skip EVEN numbers?")

for (let i = firstUserNumber; i <= secondUserNum; i++) {
    if (booleanVal && i % 2 === 0) {
    continue;
    }
    result += i
    }
    
    let reload = confirm(`The result is ${result}. Press Ok to try again`)
    reload === true ? document.location.reload() : alert("End of the game")