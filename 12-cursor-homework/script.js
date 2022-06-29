"use strict"
import { generateCards, getFilm } from "/functions.js"

export const BASE_URL = "https://swapi.dev/api"
export const characterList = document.querySelector(".characters")
const body = document.querySelector(".body")
const notification = document.querySelector(".notification")
const characters = document.querySelector(".section-characters")
const submitButton = document.getElementById("submit-button")
const loadingAnimation = document.querySelector(".loading-animation")
const header = document.querySelector(".header")
const submitForm = document.querySelector(".subform")

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
    .then((characters) => generateCards(characters))
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
      .then((characters) => generateCards(characters))
      .finally(() => {
        body.classList.remove("loading-background")
        loadingAnimation.classList.remove("view-loading")
        submitForm.scrollIntoView({
          block: "start",
          behavior: "smooth",
        })
      })
  })
})

notification.addEventListener("click", () => {
  notification.classList.add("invisible")
  notification.classList.remove("animated")

  setTimeout(() => (notification.style.display = "none"), 400)
})
