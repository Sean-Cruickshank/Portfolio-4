import { colourList, sideNavArray, glowingArray, subtitleArray, glowingArrayAll } from "../data/siteData.js"

// Creates the onClick scroll functionality for the sidenav links
sideNavArray.forEach((page) => {
  document.querySelector(page.class).addEventListener('click', () => {
    document.getElementById(page.id).scrollIntoView({behavior: "smooth"})
  })
})

// Sets up functionality for all of the colour picker buttons
let colourVal = 'blue'
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
    
    // Replaces the existing theme for all single-use classes
    glowingArray.forEach((element) => {
      document.querySelector(element).classList.remove('glowing--blue', 'glowing--green', 'glowing--purple', 'glowing--yellow')
    })
    glowingArray.forEach((element) => {
      document.querySelector(element).classList.add(`glowing--${colour}`)
    })

    // Replaces the colour theme for the sidenav
    sideNavArray.forEach((page) => {
      document.querySelector(page.class).classList.remove('blue', 'green', 'purple', 'yellow')
      document.querySelector(page.class).classList.add(colourVal)
    })

    // Replaces the colour theme for all multi-use classes
    glowingArrayAll.forEach((element) => {
      document.querySelectorAll(element).forEach((icon) => {
        icon.classList.remove('glowing--blue', 'glowing--green', 'glowing--purple', 'glowing--yellow')
      })
      document.querySelectorAll(element).forEach((icon) => {
        icon.classList.add(`glowing--${colourVal}`)
      })
    })

    // Adds the theme colour to image borders
    document.querySelectorAll('.projects__image').forEach((image) => {
    image.style.border = `3px solid var(--${colourVal})`
    })

    // Replaces the colour theme for buttons
    document.querySelectorAll('.button').forEach((button) => {
      button.style.backgroundColor = `var(--${colourVal}`
    })
  })
})

let lightbulbFirstTrigger = false;
let lightStatus = false

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
    // Also reveals the 'skills', 'projects', etc. when the lightbulb is pressed for the first time
    } else {
      lightbulbFirstTrigger = true
      document.querySelector('.skills').classList.remove('hidden')
      document.querySelector('.projects').classList.remove('hidden')
      document.querySelector('.qualifications').classList.remove('hidden')
      document.querySelector('.about').classList.remove('hidden')
      document.querySelector('.contact').classList.remove('hidden')
      document.querySelector('.footer').classList.remove('hidden')
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

      // All other single-use classes have the effect applied instantly
      } else {
        document.querySelector(element).classList.add(`glowing--${colourVal}`)
      }
    })

    // Adds the "glowing" effect for all multi-use classes
    glowingArrayAll.forEach((element) => {
      document.querySelectorAll(element).forEach((icon) => {
        icon.classList.add(`glowing--${colourVal}`)
      })
    })

    // Adds the theme colour to image borders
    document.querySelectorAll('.projects__image').forEach((image) => {
      image.style.border = `2px solid var(--${colourVal})`
    })

    // Also activates the lightbulb and colour picker
    document.querySelector('.lightbulb').classList.add('active')
    document.querySelector('.colour-picker').classList.add('active')

    // Reveals sections when lightbulb is turned on
    document.querySelectorAll('.section').forEach((section) => {
      section.classList.remove('hidden')
    })

    // When the light is turned off
  } else {
    // Removes the "glowing" effect from all single-use classes
    glowingArray.forEach((element) => {
      document.querySelector(element).classList.remove('glowing--blue')
      document.querySelector(element).classList.remove('glowing--green')
      document.querySelector(element).classList.remove('glowing--purple')
      document.querySelector(element).classList.remove('glowing--yellow')
    })

    // Removes the "glowing" effect from all multi-use classes
    glowingArrayAll.forEach((element) => {
      document.querySelectorAll(element).forEach((icon) => {
        icon.classList.remove('glowing--blue', 'glowing--green', 'glowing--purple', 'glowing--yellow')
      })
    })

    // Also deactivates the lightbulb and colour picker
    document.querySelector('.lightbulb').classList.remove('active')
    document.querySelector('.colour-picker').classList.remove('active')
    document.querySelector('.welcome__arrow').classList.remove('active')

    // Hides sections when lightbulb is turned off
    document.querySelectorAll('.section').forEach((section) => {
      section.classList.add('hidden')
    })
  }
}

// Trigger lightbulb when clicked
document.querySelector('.lightbulb').addEventListener('click', () => {  
  triggerLightbulb()
})

window.addEventListener('scroll', () => {
  const position = Math.floor(scrollY);
  console.log(position)
  
  // Reveals the sidenav when the user scrolls more than 25px down
  if (position > 25) {
    document.querySelector('.sidenav').classList.remove('hidden')
  }

  // Sets the breakpoints for the 'sidenav--active' class for each sidenav link
  sideNavArray.forEach((page) => {
    if (position >= page.top - 250 & position < page.bottom - 250) {
      document.querySelectorAll('.sidenav--active').forEach((item) => {
        item.classList.remove('sidenav--active')
      })
      document.querySelector(page.class).classList.add('sidenav--active')
    }
  })

  // Fade in effect for the three rows of skill icons
  if (position > 1180) {
    setTimeout(() => {
      document.querySelector('.skills__row-one').classList.remove('hidden')
    },250)
    setTimeout(() => {
      document.querySelector('.skills__row-two').classList.remove('hidden')
    },500)
    setTimeout(() => {
      document.querySelector('.skills__row-three').classList.remove('hidden')
    },750)
  }
})
