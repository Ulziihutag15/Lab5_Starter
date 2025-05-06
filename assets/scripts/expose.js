// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const image = document.querySelector('img[alt="No image selected"]');
  const audio = document.querySelector("audio");
  const button = document.querySelector('button');
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector('img[alt = "Volume level 2"]');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', function() {
    const selected = hornSelect.value;
    image.src = `./assets/images/${selected}.svg`;
    audio.src = `./assets/audio/${selected}.mp3`;
  });

  button.addEventListener('click', function(){
    if(audio.src){
      audio.play();
      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
      }
    }
  });

  volumeSlider.addEventListener('input', () => {
    const volume = parseInt(volumeSlider.value);

    if (volume === 0) {
      volumeIcon.src = './assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = './assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = './assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = './assets/icons/volume-level-3.svg';
    }
    audio.volume = volume / 100;
  });
  
}