import { sideNavArray } from "../data/siteData.js"

document.querySelector('.welcome__arrow').addEventListener('click', () => {
  window.scrollTo({top: (sideNavArray[1].top), behavior: 'smooth'})
})