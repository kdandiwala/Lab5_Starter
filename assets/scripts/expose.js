// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let options = document.getElementById("horn-select")
  options.addEventListener('change', (event) => {
    let choice = event.target.value
    const image = document.querySelector('header + img')
    const audio = document.querySelector("audio")
    if (choice == "air-horn") {
      image.src = "assets/images/air-horn.svg"
      audio.src = "assets/audio/air-horn.mp3"
    } else if (choice == "car-horn") {
      image.src = "assets/images/car-horn.svg"
      audio.src = "assets/audio/car-horn.mp3"
    } else if (choice == "party-horn") {
      image.src = "assets/images/party-horn.svg"
      audio.src = "assets/audio/party-horn.mp3"
    }
  });

  let volume = document.getElementById("volume")
  document.querySelector("audio").volume  = 0.5
  volume.addEventListener('change', (event) => {
    const icon = document.querySelector('input + img')
    let level = parseInt(event.target.value)
    console.log()
    document.querySelector("audio").volume = level / 100
    
    if(level == 0){
      icon.src = "assets/icons/volume-level-0.svg"
    } else if(1 <= level && level < 33) {
      icon.src = "assets/icons/volume-level-1.svg"
    } else if(33 <= level && level < 67) {
      icon.src = "assets/icons/volume-level-2.svg"
    } else if(level >= 67) {
      icon.src = "assets/icons/volume-level-3.svg"
    } 
    
  });
  
  const jsConfetti = new JSConfetti()
  let button = document.querySelector("button")
  button.addEventListener("click", function(){ 
    document.querySelector("audio").play()
    if(options.value == "party-horn"){
      jsConfetti.addConfetti()
    }
  });

}
