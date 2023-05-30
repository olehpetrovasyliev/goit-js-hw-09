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
    const timerStart = flatpickr => {
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
        minutesSpan.textContent = convertMs(diff).minutes;
        hoursSpan.textContent = convertMs(diff).hours;
        daysSpan.textContent = convertMs(diff).days;
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
