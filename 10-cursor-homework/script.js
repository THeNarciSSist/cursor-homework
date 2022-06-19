
const keyboard = document.querySelector(".keyboard")
const keys = document.querySelectorAll(".key")

keyboard.addEventListener("click", function (event) {
	event.preventDefault()

	const key = event.target.closest(".key")
	if(key === null) return
	const audio = new Audio(key.firstElementChild.src)
	audio.play()
	
	clearActiveBorder()
	addActiveBorder(key)
})

document.addEventListener("keydown", (event) =>  {
	if(document.getElementById(`${event.code}`) === null) return
		
	const key = document.getElementById(`${event.code}`)
	const audio = new Audio (key.firstElementChild.src)
	audio.play()
	
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