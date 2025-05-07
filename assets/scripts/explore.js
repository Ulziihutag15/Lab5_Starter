// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO

  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");
  const image = document.querySelector('img[alt="Smiling face"]');
  const textToSpeak = document.getElementById("text-to-speak");
  const pitch = document.getElementById("pitch");
  const rate = document.getElementById("rate");
  let voices = [];
  let selected = "";

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener("click", function () {
    let utterThis = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedVoiceName =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedVoiceName) {
        console.log(selectedVoiceName);
        utterThis.voice = voices[i];
      }
    }
    utterThis.pitch = 0.5;
    utterThis.rate = 1;

    image.src = "./assets/images/smiling-open.png";

    utterThis.onend = () => {
      image.src = "./assets/images/smiling.png";
    };
    synth.speak(utterThis);
  });
}
