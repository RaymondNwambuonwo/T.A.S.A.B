const container = document.getElementById('container');
const text = document.getElementById('text');

const yogiTime = 7500;
const yogiBreath = (yogiTime / 5) * 2;
const yogiHold = yogiTime / 5;

breatheYogi();

function breatheYogi() {
  text.innerText = 'Yogi Breath In';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Yogi Hold';

    setTimeout(() => {
      text.innerText = 'Yogi Breathe Out';
      container.className = 'container shrink';
    }, yogiHold);
  }, yogiBreath);
}

setInterval(breatheYogi, yogiTime);