//imports
import Notiflix from 'notiflix';

import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

// finding elements in dom
const picker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

// obj for flatpickr

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  //
  onClose() {
    const timerStart = () => {
      const timerId = setInterval(() => {
        let now = new Date();
        const deadline = new Date(picker.value);
        const diff = deadline - now;

        if (diff <= 0) {
          clearInterval(timerId);
          return;
        }

        // console.log(diff);

        console.log(convertMs(diff));
        secondsSpan.textContent = convertMs(diff).seconds;
        if (secondsSpan.textContent.length === 1) {
          secondsSpan.textContent = '0' + secondsSpan.textContent;
        }
        minutesSpan.textContent = convertMs(diff).minutes;
        if (minutesSpan.textContent.length === 1) {
          minutesSpan.textContent = '0' + minutesSpan.textContent;
        }
        hoursSpan.textContent = convertMs(diff).hours;
        if (hoursSpan.textContent.length === 1) {
          hoursSpan.textContent = '0' + hoursSpan.textContent;
        }
        daysSpan.textContent = convertMs(diff).days;
        if (daysSpan.textContent.length === 1) {
          daysSpan.textContent = '0' + daysSpan.textContent;
        }
        startBtn.disabled = true;
      }, 1000);
    };

    startBtn.addEventListener('click', timerStart);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
// flatpickr call
flatpickr(picker, options);

function inputChecker(evt) {
  if (new Date(evt.target.value) < new Date()) {
    return Notiflix.Notify.failure('Please choose a date in the future');
  }
}

picker.addEventListener('change', inputChecker);
