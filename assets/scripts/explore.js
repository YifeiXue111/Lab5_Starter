// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img[alt="Smiling face"]');

  function populateVoices() {
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '<option value="select">Select a Voice</option>';
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  speechSynthesis.onvoiceschanged = populateVoices;
  populateVoices();

  talkButton.addEventListener('click', () => {
    const text = textArea.value;
    const voiceIndex = voiceSelect.value;
    
    if (text && voiceIndex !== 'select') {
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = speechSynthesis.getVoices();
      utterance.voice = voices[voiceIndex];

      faceImage.src = 'assets/images/smiling-open.png';
    
      utterance.onend = () => {
        faceImage.src = 'assets/images/smiling.png';
      };

      speechSynthesis.speak(utterance);
    }
  });
}