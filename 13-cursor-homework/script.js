"use strict"

function* createIdIterator(id = 0) {
  while (true) {
    yield ++id
  }
}

const idGenerator = createIdIterator()
console.log("Id Generator:")
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)

function* newFontGenerator(px) {
  let fontSize
  while (px) {
    if (fontSize === "up") px += 2
    else if (px === 2) px
    else if (fontSize === "down") px -= 2
    fontSize = yield px
  }
}

const fontGenerator = newFontGenerator(14)

console.log("Font Generator: ")
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("up").value)
