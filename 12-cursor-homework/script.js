"use strict"
const BASE_URL = "https://swapi.dev/api"
const body = document.querySelector(".body")
const notification = document.querySelector(".notification")
const characters = document.querySelector(".section-characters")
const characterList = document.querySelector(".characters")
const submitButton = document.getElementById("submit-button")
const loadingAnimation = document.querySelector(".loading-animation")
const header = document.querySelector(".header")

async function getFilm(id = 2) {
  if (id === 0) throw new Error("There is no such film ")
  let request = await fetch(`${BASE_URL}/films/${id}`)

  return request.json()
}

// function getPlanets(page) {
// 	return new Promise (res => res(fetch(`${BASE_URL}/planets/?page=${page}`)))
// }

// getPlanets(1).then(response => response.json()).then(response => console.log(response.results))

// console.log(fetch("https://swapi.dev/api/films"))

getFilm(2).then((film) => {
  Promise.all(film.characters.map((character) => fetch(character)))
    .then((responses) => {
      return responses
    })
    .then((responses) => Promise.all(responses.map((r) => r.json())))
    .then((characters) =>
      characters.forEach((character) => {
        let liElement = document.createElement("li")
        let divElement = document.createElement("div")
        let pName = document.createElement("p")
        let pOpen = document.createElement("p")
        liElement.className = "character"
        divElement.className = "info"
        pName.className = "name"
        pOpen.className = "open"
        pName.innerText = `${character.name}`
        pOpen.innerText = "Open"
        divElement.append(pName, pOpen)
        liElement.append(divElement)
        characterList.append(liElement)
      })
    )
})

submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  header.scrollIntoView({ block: "start", behavior: "smooth" })
  setTimeout(
    () => document.querySelectorAll(".character").forEach((el) => el.remove()),
    500
  )

  body.classList.add("loading-background")
  loadingAnimation.classList.add("view-loading")
  const uniqueFilm = document.getElementById("filmid").value

  getFilm(+uniqueFilm).then((film) => {
    Promise.all(film.characters.map((character) => fetch(character)))
      .then((responses) => {
        return responses
      })
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((characters) =>
        characters.forEach((character) => {
          let liElement = document.createElement("li")
          let divElement = document.createElement("div")
          let pName = document.createElement("p")
          let pOpen = document.createElement("p")
          liElement.className = "character"
          divElement.className = "info"
          pName.className = "name"
          pOpen.className = "open"
          pName.innerText = `${character.name}`
          pOpen.innerText = "Open"
          divElement.append(pName, pOpen)
          liElement.append(divElement)
          characterList.append(liElement)
        })
      )
      .finally(() => {
        body.classList.remove("loading-background")
        loadingAnimation.classList.remove("view-loading")
        characterList.scrollIntoView({
          block: "start",
          behavior: "smooth",
        })
      })
  })
})

let charactersObserver = new IntersectionObserver(
  (entry) => {
    if (entry[0].isIntersecting) {
      characters.classList.add("view-characters")
      charactersObserver.unobserve(entry[0].target)
      notification.classList.remove("invisible")
      notification.classList.add("animated")
    }
  },
  {
    threshold: 0.3,
  }
)
charactersObserver.observe(characters)

MicroModal.init({
  disableScroll: true,
  awaitCloseAnimation: true,
})

notification.addEventListener("click", () => {
  notification.classList.add("invisible")
  notification.classList.remove("animated")

  setTimeout(() => (notification.style.display = "none"), 400)
})
