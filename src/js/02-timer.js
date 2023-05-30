const picker = document.querySelector('#datetime-picker');

const now = new Date();
const deadline = new Date(picker.value);

const diff = deadline - now;
