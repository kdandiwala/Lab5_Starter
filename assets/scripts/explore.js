// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let speech = window.speechSynthesis
  let voices = []
  const dropdown = document.getElementById("voice-select")
  setTimeout(() => {
    voices = speech.getVoices()
    for(let i = 0; i < voices.length; i++) {
      const option = document.createElement('option')
      option.textContent = `${voices[i].name} (${voices[i].lang})`
      option.setAttribute('data-lang', voices[i].lang)
      option.setAttribute('data-name', voices[i].name)
      dropdown.appendChild(option)
    }
  }, 50);


  document.querySelector("button").onclick = (event) => {
    event.preventDefault()
    const utterThis = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value)
    const selectedOption = dropdown.selectedOptions[0].getAttribute('data-name')
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i]
      }
    }
    
    speech.speak(utterThis)
  }
  
  function changeImage() {
    if (speech.speaking == true) {
      document.querySelector("img").src = "assets/images/smiling-open.png"
    } else {
      document.querySelector("img").src = "assets/images/smiling.png"
    }
  }
  setInterval(changeImage);
  
}