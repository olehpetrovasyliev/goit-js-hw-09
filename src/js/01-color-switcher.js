const startBtn = document.querySelector('[dataset.start]');
const stopBtn = document.querySelector('[dataset.stop]');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
