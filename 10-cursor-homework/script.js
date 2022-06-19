
let keyboard = document.querySelector(".keyboard")
let keys = document.querySelectorAll(".key")


keyboard.addEventListener("click", function (event) {
	event.preventDefault()

	let key = event.target.closest(".key")
	let audio = new Audio(key.firstElementChild.src)
	audio.play()
	
	clearActiveBorder()
	addActiveBorder(key)
})

document.addEventListener("keydown", (event) =>  {
	if(document.getElementById(`${event.key}`) === null) return
		
	let key = document.getElementById(`${event.key}`)
	let audio = new Audio (key.firstElementChild.src)
	audio.play()
	
	clearActiveBorder()
	clearActiveBorder()
	addActiveBorder(key)
	})



	function clearActiveBorder () {
			keys.forEach(el => {
				el.classList.remove("border-active")
				el.classList.remove("animated")
			})
		}

		function addActiveBorder (key) {
			key.classList.add("animated")
			key.classList.add("border-active")
		}