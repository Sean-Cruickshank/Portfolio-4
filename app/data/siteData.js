// Array of alternate subtitles
export const subtitleArray = [
  "I hope I remembered to pay the power bill",
  "I wonder how this looks in light mode?",
  "Why is it so dark in here?",
  "Can you please leave that on?"
]

// All the different theme colours for the glowing effect
export const colourList = ['blue', 'green', 'purple', 'yellow']

// All single-use classes that should receive the '.glowing' class and respective colour theme
// ie the ones using querySelector
export const glowingArray = [
  '.welcome__title',
  '.welcome__subtitle',
  '.social__github',
  '.social__linkedin',
  '.welcome__arrow'
]

// All multi-use classes that should receive the '.glowing' class and respective colour theme
// ie the ones using querySelectorAll
export const glowingArrayAll = [
  '.heading',
  '.skills__icon',
  '.skills__description'
]

// Array of all sidenav links
// Top and Bottom are the scroll breakpoints for each section, used for adding and removing the 'sidebar--active' class
export const sideNavArray =
[
  {
    class: '.sidenav__welcome',
    top: 0,
    bottom: 500
  },
  {
    class: '.sidenav__skills',
    top: 500,
    bottom: 700
  },
  {
    class: '.sidenav__timeline',
    top: 700,
    bottom: 900
  },
  {
    class: '.sidenav__about',
    top: 900,
    bottom: 1100
  },
  {
    class: '.sidenav__contact',
    top: 1100,
    bottom: 9999
  }
]