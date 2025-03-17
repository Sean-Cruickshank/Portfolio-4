import { meFacts } from "../data/aboutData.js";

const button = document.querySelector('.about__button')
let count = 0

const heading = document.querySelector('.about__facts h3')
const fact = document.querySelector('.me-fact')

button.addEventListener("click", () => {
  heading.classList.remove('hidden')
  fact.classList.remove('hidden')
  fact.innerHTML = meFacts[count]
  count < meFacts.length - 1
    ? count++
    : count = 0
})