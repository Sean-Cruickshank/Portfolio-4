import { projectData } from "../data/projectsData.js"

let projectListHTML = ""

projectData.forEach((project) => {
  projectListHTML += `
    <div class="projects__card">
      <div class="projects__info">
        <h3>${project.title}</h3>
        <i>${project.date}</i>
        <p>${project.description}</p>
        <p>
      </div>
      <div class="projects__image">
        <img src=${project.image} />
      </div>
    </div>
  `
})

document.querySelector('.projects__list').innerHTML = projectListHTML