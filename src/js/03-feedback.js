import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const msg = document.querySelector('[name="message"]');
const storageKey = 'feedback-form-state';
const savedStorage = localStorage.getItem(storageKey);

if (savedStorage) {
  const savedData = JSON.parse(savedStorage);
  email.value = savedData.email;
  msg.value = savedData.message;
}

const formFuncInp = evt => {
  evt.preventDefault();
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      email: form.elements.email.value,
      message: form.elements.message.value,
    })
  );
};
form.addEventListener('input', throttle(formFuncInp, 500));

const formFuncSub = evt => {
  if (email.value === '' || msg.value === '') {
    return alert('Fill all the fields please');
  }
  evt.preventDefault();

  console.log(JSON.parse(savedStorage));
  localStorage.clear();
  email.value = '';
  msg.value = '';
};
form.addEventListener('submit', formFuncSub);
