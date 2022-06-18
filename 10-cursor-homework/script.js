
let keys = document.querySelectorAll(".key")

/////////// UNDONE //////////////////
// keys.forEach(el => {
// 	el.addEventListener("click", () => {
// 		// clearActiveClasses()

// 		el.classList.add("active")
// 		setTimeout(() => clearActiveClasses(), 0)
// 	})
// })

// // keys.forEach(el => el.addEventListener("mouseout", () => clearActiveClasses()))

// function clearActiveClasses () {
// 	keys.forEach(el => el.classList.remove("active"))
// }
/////////////////////////////

keys.forEach((el, i) => el.addEventListener("mousedown", () => {
	let audioId = document.getElementById(`${i}`)
	let audio = new Audio(`${audioId.src}`)
	audio.play()

	clearActiveBorder()
	el.classList.add("border-active")
}))

function clearActiveBorder () {
		keys.forEach(el => el.classList.remove("border-active"))
	}



