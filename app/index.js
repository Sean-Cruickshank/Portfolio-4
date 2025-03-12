const lightbulb = document.querySelector('.lightbulb')
let lightStatus = false

let colourVal = 'blue'
const colourList = ['blue', 'green', 'purple', 'yellow']

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
      document.querySelector(element).classList.remove('glowing--blue')
      document.querySelector(element).classList.remove('glowing--green')
      document.querySelector(element).classList.remove('glowing--purple')
      document.querySelector(element).classList.remove('glowing--yellow')
    })

    // Applies the new theme to all elements
    glowingArray.forEach((element) => {
      document.querySelector(element).classList.add(`glowing--${colour}`)
    })
  })
})

// Array of all classes that should receive the '.glowing' class
const glowingArray = [
  '.welcome__title',
  '.welcome__subtitle',
  '.social__github',
  '.social__linkedin',
  '.welcome__arrow'
]

// Array of alternate subtitles
let subtitleText = false;
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
    // Only applies from the second activation onwards
    const subtitle = document.querySelector('.welcome__subtitle')
    const s = Math.floor(Math.random() * subtitleArray.length)
    if (subtitleText) {
      subtitle.innerHTML = subtitleArray[s]
    } else {
      subtitleText = true
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
            document.querySelector(element).classList.add(`glowing--${colourVal}`)
          }
        },2000)

        // All other classes have the effect applied instantly
      } else document.querySelector(element).classList.add(`glowing--${colourVal}`)
    })

    // Also activates the lightbulb and colour picker
    document.querySelector('.lightbulb').classList.add('active')
    document.querySelector('.colour-picker').classList.add('active')
    document.querySelector('.welcome__arrow').classList.add('active')

    // When the light is turned off
  } else {
    //Removes the "glowing" effect from all classes
    glowingArray.forEach((element) => {
      document.querySelector(element).classList.remove('glowing--blue')
      document.querySelector(element).classList.remove('glowing--green')
      document.querySelector(element).classList.remove('glowing--purple')
      document.querySelector(element).classList.remove('glowing--yellow')
    })

    // Also deactivates the lightbulb and colour picker
    document.querySelector('.lightbulb').classList.remove('active')
    document.querySelector('.colour-picker').classList.remove('active')
  }
}

// Trigger lightbulb when clicked or when the user hits "Enter"
lightbulb.addEventListener('click', () => {  
  triggerLightbulb()
})
document.body.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    triggerLightbulb()
  }
})
