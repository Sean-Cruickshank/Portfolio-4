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
  '.welcome__arrow',
  '.social__github',
  '.social__linkedin',
  '.about__button',
  '.test'
]

// All multi-use classes that should receive the '.glowing' class and respective colour theme
// ie the ones using querySelectorAll
export const glowingArrayAll = [
  '.heading',
  '.paragraph',
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
    bottom: 760
  },
  {
    class: '.sidenav__about',
    top: 760,
    bottom: 1320
  },
  {
    class: '.sidenav__skills',
    top: 1320,
    bottom: 1700
  },
  {
    class: '.sidenav__projects',
    top: 1700,
    bottom: 2200
  },
  {
    class: '.sidenav__qualifications',
    top: 2200,
    bottom: 2700
  },
  {
    class: '.sidenav__contact',
    top: 2700,
    bottom: 9999
  }
]