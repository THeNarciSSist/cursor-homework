"use strict"
const body = document.querySelector(".body")
const notification = document.querySelector(".notification")
let notificationAudio = new Audio("audio/notification-sound.wav")

window.onload = function () {
	setTimeout(() => {
		notification.classList.remove("invisible")
		notification.classList.add("animated")
		notificationAudio.play()
	}, 1000)
}

notification.addEventListener("click", () => {
	notification.classList.add("invisible")
	notification.classList.remove("animated")

	setTimeout(() => notification.style.display = "none", 400)
})


// const BASE_URL = "https://swapi.dev/api"

// async function getFilm (id) {
// 	if(id === 0) throw new Error ("There is no such a film ")
// 	let request = await fetch(`${BASE_URL}/films/${id}`)

// 	return request.json()
// } 

// getFilm(2).then(response => console.log(response)).catch(error => alert(error))


// getFilm(2).then(film => {
// 	Promise.all(film.characters.map(character => fetch(character)))
// 	.then(responses => {
// 		return responses
// 	})
// 	.then(responses => Promise.all(responses.map(r => r.json())))
// 	.then(characters => characters.forEach(character => console.log(character.name, character.birth_year, character.gender)))
// })


// function getPlanets(page) {
// 	return new Promise (res => res(fetch(`${BASE_URL}/planets/?page=${page}`)))
// }


// getPlanets(1).then(response => response.json()).then(response => console.log(response.results))

// console.log(fetch("https://swapi.dev/api/films"))