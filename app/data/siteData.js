// Array of alternate subtitles
export const subtitleArray = [
  "I hope I remembered to pay the power bill",
  "I hope this looks okay in light mode...",
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
  '.about__button'
]

// All multi-use classes that should receive the '.glowing' class and respective colour theme
// ie the ones using querySelectorAll
export const glowingArrayAll = [
  '.heading',
  '.paragraph',
  '.skills__icon',
  '.skills__description',
  '.projects__icon',
  '.projects__link',
  '.contact__icon'
]

// Array of all sidenav links
// Top and Bottom are the scroll breakpoints for each section, used for adding and removing the 'sidebar--active' class
export const sideNavArray =
[
  {
    id: 'welcome',
    class: '.sidenav__welcome',
    top: 0,
    bottom: 776
  },
  {
    id: 'about',
    class: '.sidenav__about',
    top: 776,
    bottom: 1329
  },
  {
    id: 'skills',
    class: '.sidenav__skills',
    top: 1329,
    bottom: 2067
  },
  {
    id: 'projects',
    class: '.sidenav__projects',
    top: 2067,
    bottom: 3342
  },
  {
    id: 'qualifications',
    class: '.sidenav__qualifications',
    top: 3342,
    bottom: 3875
  },
  {
    id: 'contact',
    class: '.sidenav__contact',
    top: 3875,
    bottom: 9999
  }
]