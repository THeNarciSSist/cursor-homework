"use strict"
import { images } from "/images.js"
import { characterList, BASE_URL } from "./script.js"

export async function getFilm(id = 2) {
  if (id === 0) throw new Error("There is no such film ")
  let request = await fetch(`${BASE_URL}/films/${id}`)

  return request.json()
}

export function generateCards(characters) {
  characters.forEach((character) => {
    let liElement = document.createElement("li")
    let divShape = document.createElement("div")
    let divContent = document.createElement("div")
    let divStats = document.createElement("div")
    let divDetails = document.createElement("div")
    let img = document.createElement("img")
    let pName = document.createElement("p")
    let pBirth = document.createElement("p")
    let pGender = document.createElement("p")
    liElement.className = "character"
    divShape.className = "character__shape"
    divContent.className = "content"
    divDetails.className = "details"
    divStats.className = "character__stats"
    pName.className = "name"
    pBirth.className = "birth-date"
    pGender.className = "gender"
    img.className = "character__photo"
    img.src = images[character.name]
    img.alt = "photo"
    pName.innerText = `Name: ${character.name}`
    pBirth.innerText = `Birth date: ${character.birth_year}`
    pGender.innerText = `Gender: ${character.gender}`
    divStats.append(pName, pBirth, pGender)
    divDetails.append(divStats)
    divContent.append(divDetails)
    divShape.append(img)
    liElement.append(divShape, divContent)
    characterList.append(liElement)
  })
}
