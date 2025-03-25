import skillsData from "../data/skillsData.js"

const skillsRowOne = document.querySelector('.skills__row-one')
const skillsRowTwo = document.querySelector('.skills__row-two')
const skillsRowThree = document.querySelector('.skills__row-three')

let skillsRowOneHTML = '';
let skillsRowTwoHTML = '';
let skillsRowThreeHTML = '';

skillsData.forEach((skill) => {
  if (skill.row === 1) {
    skillsRowOneHTML+= `
    <div class="skills__skill">
    <i class="${skill.icon} skills__icon"></i>
    <p class="skills__description">${skill.name}</p>
    </div>
  `
  } else if (skill.row === 2) {
    skillsRowTwoHTML+= `
    <div class="skills__skill">
    <i class="${skill.icon} skills__icon"></i>
    <p class="skills__description">${skill.name}</p>
    </div>
  `
  } else if (skill.row === 3) {
    skillsRowThreeHTML+= `
    <div class="skills__skill">
    <i class="${skill.icon} skills__icon"></i>
    <p class="skills__description">${skill.name}</p>
    </div>
  `
  }
})

skillsRowOne.innerHTML = skillsRowOneHTML
skillsRowTwo.innerHTML = skillsRowTwoHTML
skillsRowThree.innerHTML = skillsRowThreeHTML


