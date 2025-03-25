import { qualificationsData } from "../data/qualificationsData.js";

const qualificationsList = document.querySelector('.qualifications__list')

let qualificationsHTML = ''

qualificationsData.forEach((entry) => {
  qualificationsHTML += `
  <div class="qualifications__entry">  
    <h3 class="heading">${entry.date}</h3>  
    <p class="paragraph">${entry.title}</p>
    <i class="paragraph">${entry.location}</i>
  </div>
  `
})

qualificationsList.innerHTML = qualificationsHTML