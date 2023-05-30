//imports
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// finding elements in dom
const picker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

// obj for flatpickr

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // date variables;
    const now = new Date();
    const deadline = new Date(picker.value);
    const diff = deadline - now;
    console.log(diff);
  },
};

flatpickr(picker, options);
