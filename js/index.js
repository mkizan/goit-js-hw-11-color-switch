const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.body,
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const DELAY = 1000;
let intervalId = null;

refs.startBtn.addEventListener('click', onColorChange);
refs.stopBtn.addEventListener('click', onStopColorChange);

function onColorChange(event) {
  event.target.disabled = true;
  intervalId = setInterval(() => {
    const index = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[index];
  }, DELAY);
}

function onStopColorChange() {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
