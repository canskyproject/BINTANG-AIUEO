const options = document.querySelectorAll('.option');

options.forEach(option => {

  option.addEventListener('click', () => {

    options.forEach(opt => {
      opt.style.background = '#eff6ff';
    });

    option.style.background = '#93c5fd';

  });

});let time = 600;

const timer = document.getElementById('timer');

setInterval(() => {

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  timer.innerHTML = `${minutes}:${seconds}`;

  if(time > 0){
    time--;
  }

}, 1000);