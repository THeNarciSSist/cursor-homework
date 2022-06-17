"use strict"
import {box} from "./script.js"

export let randomHex = () => {
	return '#'+Math.floor(Math.random()*16777215).toString(16)
}

export function generateBlocks () {
	for (let i = 0; i < 25; i++) {
		let block = document.createElement("div")
		block.className = "block"
		block.style.cssText = `
	display: inline-block;
	width: 50px;
	height: 50px;
	background-color: ${randomHex()};
`
	box.append(block)
	}
}

export function generateBlocksInterval () {
	let blocks = document.querySelectorAll(".block")
	setInterval(() => blocks.forEach(el => el.style.backgroundColor = `${randomHex()}`), 1000)
	
}