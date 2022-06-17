"use strict"
import {generateBlocks, generateBlocksInterval} from "./functions.js"

export let box = document.createElement("div")
document.body.prepend(box)

box.style.cssText = `
	display: flex;
	flex-wrap: wrap;
	width: 250px;
	height: 250px;
`

let buttonBox =  document.querySelector(".generate-box")
let buttonColor = document.querySelector(".generate-color")
buttonColor.disabled = true

buttonBox.addEventListener("click", () => {
buttonColor.disabled = false
	generateBlocks()
	buttonBox.disabled = true;
})

buttonColor.addEventListener("click", () => {
	generateBlocksInterval()
	buttonColor.disabled = true
})








