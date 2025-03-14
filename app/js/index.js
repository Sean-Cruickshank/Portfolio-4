const lightbulb = document.querySelector('.lightbulb')
let lightStatus = false

let colourVal = 'blue'
const colourList = ['blue', 'green', 'purple', 'yellow']

// Array of all sidenav links
// Top and Bottom are the scroll breakpoints for each section, used for adding and removing the 'sidebar--active' class
const sideNavArray =
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

// Creates the onClick scroll functionality for the sidenav links
// Scroll is set to the top breakpoint + 10 so that the 'sidenav--active' class doesn't trigger so late
sideNavArray.forEach((page) => {
  document.querySelector(page.class).addEventListener('click', () => {
    window.scrollTo({top: (page.top + 10), behavior: 'smooth'})
  })
})

// Sets up functionality for all of the colour picker buttons
colourList.forEach((colour) => {

  // Creates the onClick event for each button
  document.querySelector(`.colour-picker--${colour}`).addEventListener('click', () => {
    colourVal = colour

    // Removes the glowing effect from any active button
    document.querySelectorAll('.colour-picker-active').forEach((item) => {
      item.classList.remove('colour-picker-active')
    })

    // Applies the glowing effect to the new active button
    document.querySelector(`.colour-picker--${colour}`).classList.add('colour-picker-active')
    
    // Removes the existing theme from all elements
    glowingArray.forEach((element) => {
      document.querySelector(element).classList.remove('glowing--blue', 'glowing--green', 'glowing--purple', 'glowing--yellow')
    })

    // Replaces the colour theme for the sidenav
    sideNavArray.forEach((page) => {
      document.querySelector(page.class).classList.remove('blue', 'green', 'purple', 'yellow')
      document.querySelector(page.class).classList.add(colourVal)
    })

    // Replaces the colour theme for all h2 headings
    document.querySelectorAll('.heading').forEach((icon) => {
      icon.classList.remove('glowing--blue', 'glowing--green', 'glowing--purple', 'glowing--yellow')
    })
    document.querySelectorAll('.heading').forEach((icon) => {
      icon.classList.add(`glowing--${colourVal}`)
    })

    // Replaces the colour theme for skill icons and descriptions
    document.querySelectorAll('.skills__icon').forEach((icon) => {
      icon.classList.remove('glowing--blue', 'glowing--green', 'glowing--purple', 'glowing--yellow')
    })
    document.querySelectorAll('.skills__description').forEach((icon) => {
      icon.classList.remove('glowing--blue', 'glowing--green', 'glowing--purple', 'glowing--yellow')
    })
    document.querySelectorAll('.skills__icon').forEach((icon) => {
      icon.classList.add(`glowing--${colourVal}`)
    })
    document.querySelectorAll('.skills__description').forEach((icon) => {
      icon.classList.add(`glowing--${colourVal}`)
    })
    

    // Applies the new theme to all elements
    glowingArray.forEach((element) => {
      document.querySelector(element).classList.add(`glowing--${colour}`)
    })
    
  })
})

// Array of all single-use classes that should receive the '.glowing' class
const glowingArray = [
  '.welcome__title',
  '.welcome__subtitle',
  '.social__github',
  '.social__linkedin',
  '.welcome__arrow'
]

// Array of alternate subtitles
let lightbulbFirstTrigger = false;
const subtitleArray = [
  "I hope I remembered to pay the power bill",
  "I wonder how this looks in light mode?",
  "Why is it so dark in here?",
  "Can you please leave that on?"
]

function triggerLightbulb() {
  lightStatus = !lightStatus

  // When the light is turned on
  if (lightStatus) {
    // Selects a random entry from the subtitle Array
    const subtitle = document.querySelector('.welcome__subtitle')
    const s = Math.floor(Math.random() * subtitleArray.length)
    // Only applies from the second activation onwards
    if (lightbulbFirstTrigger) {
      subtitle.innerHTML = subtitleArray[s]
    // Also reveals the 'skills', 'timeline', etc. when the lightbulb is pressed for the first time
    } else {
      lightbulbFirstTrigger = true
      document.querySelector('.skills').classList.remove('hidden')
      document.querySelector('.timeline').classList.remove('hidden')
      document.querySelector('.about').classList.remove('hidden')
      document.querySelector('.contact').classList.remove('hidden')
    }

    //Applies the "glowing" effect when the light is turned on
    glowingArray.forEach((element) => {
      
      // Staggers the GitHub link by 1 second
      if (element === '.social__github') {
        setTimeout(() => {
          if (lightStatus) {
            document.querySelector(element).classList.add(`glowing--${colourVal}`)
          }
        },1000)

      // Staggers the LinkedIn link by 1.5 seconds
      } else if (element === '.social__linkedin') {
        setTimeout(() => {
          if (lightStatus) {
            document.querySelector(element).classList.add(`glowing--${colourVal}`)
          }
        },1500)

        // Staggers the welcome arrow by 2 seconds
      } else if (element === '.welcome__arrow') {
        setTimeout(() => {
          if (lightStatus) {
            document.querySelector(element).classList.add('active')
          }
        },2000)

        // All other classes have the effect applied instantly
      } else {
        document.querySelector(element).classList.add(`glowing--${colourVal}`)
      }
    })

    // Adds the glowing effect for all h2 headings
    document.querySelectorAll('.heading').forEach((icon) => {
      icon.classList.add(`glowing--${colourVal}`)
    })

    // Adds the glowing effect for all skill icons and descriptions
    document.querySelectorAll('.skills__icon').forEach((icon) => {
      icon.classList.add(`glowing--${colourVal}`)
    })
    document.querySelectorAll('.skills__description').forEach((icon) => {
      icon.classList.add(`glowing--${colourVal}`)
    })

    // Also activates the lightbulb and colour picker
    document.querySelector('.lightbulb').classList.add('active')
    document.querySelector('.colour-picker').classList.add('active')

    // When the light is turned off
  } else {
    //Removes the "glowing" effect from all single-use classes
    glowingArray.forEach((element) => {
      document.querySelector(element).classList.remove('glowing--blue')
      document.querySelector(element).classList.remove('glowing--green')
      document.querySelector(element).classList.remove('glowing--purple')
      document.querySelector(element).classList.remove('glowing--yellow')
    })

    // Removes the glowing effect for all h2 headings
    document.querySelectorAll('.heading').forEach((icon) => {
      icon.classList.remove(`glowing--${colourVal}`)
    })

    // Removes the glowing effect for all skill icons and descriptions
    document.querySelectorAll('.skills__icon').forEach((icon) => {
      icon.classList.remove('glowing--blue')
      icon.classList.remove('glowing--green')
      icon.classList.remove('glowing--purple')
      icon.classList.remove('glowing--yellow')
    })
    document.querySelectorAll('.skills__description').forEach((icon) => {
      icon.classList.remove('glowing--blue')
      icon.classList.remove('glowing--green')
      icon.classList.remove('glowing--purple')
      icon.classList.remove('glowing--yellow')
    })

    // Also deactivates the lightbulb and colour picker
    document.querySelector('.lightbulb').classList.remove('active')
    document.querySelector('.colour-picker').classList.remove('active')
    document.querySelector('.welcome__arrow').classList.remove('active')
  }
}

// Trigger lightbulb when clicked or when the user hits "Enter"
lightbulb.addEventListener('click', () => {  
  triggerLightbulb()
})
// document.body.addEventListener('keydown', (e) => {
//   if (e.key === "Enter") {
//     triggerLightbulb()
//   }
// })

window.addEventListener('scroll', () => {
  const position = Math.floor(scrollY);
  console.log(position)
  // Reveals the sidenav when the user scrolls more than 25px down
  if (position > 25) {
    document.querySelector('.sidenav').classList.remove('hidden')
  }

  // Sets the breakpoints for the 'sidenav--active' class for each sidenav link
  sideNavArray.forEach((page) => {
    if (position >= page.top & position < page.bottom) {
      document.querySelectorAll('.sidenav--active').forEach((item) => {
        item.classList.remove('sidenav--active')
      })
      document.querySelector(page.class).classList.add('sidenav--active')
    }
  })
})
