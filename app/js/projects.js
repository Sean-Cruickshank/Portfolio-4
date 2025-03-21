import { projectData } from "../data/projectsData.js"

let projectListHTML = ""

projectData.forEach((project) => {
  let projectListTags = ""
  let count = 0
  project.tagsClass.forEach((tag) => {
    const title = project.tagsText[count++]
    projectListTags += `
      <i
        class="${tag} projects__icon"
        title=${title}
      ></i>
    `
  })
  projectListHTML += `
    <div class="projects__card">
      <div class="projects__title">
      <h3 class="heading">${project.title}</h3>
      <a
        title=${project.link}
        target="_blank"
        href=${project.link} class="projects__link fa-solid fa-link"
      ></a>
      </div>
      <i class="paragraph projects__date">${project.date}</i>
      <p class="paragraph">${project.description}</p>
      <div class="projects__icons">
      ${projectListTags}
      </div>
      <img class="projects__image" src=${project.image} />
    </div>
  `
})

document.querySelector('.projects__list').innerHTML = projectListHTML