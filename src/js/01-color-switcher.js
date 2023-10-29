const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
const body = document.body;

let intervalId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
      }

function setButtonState(startDisabled, stopDisabled) {
  startButton.disabled = startDisabled;
  stopButton.disabled = stopDisabled;
}

function startOrStopColorChange() {
  if (intervalId === null) {
    setButtonState(true, false);
    intervalId = setInterval(() => {
      const randomColor = getRandomHexColor();
      body.style.backgroundColor = randomColor;
    }, 1000);
  } else {
    setButtonState(false, true);
    clearInterval(intervalId);
    intervalId = null;
  }
}

startButton.addEventListener('click', startOrStopColorChange);
stopButton.addEventListener('click', startOrStopColorChange);

