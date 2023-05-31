import Notiflix from 'notiflix';
const form = document.querySelector('form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(evt) {
  evt.preventDefault();
  const delayInp = Number(evt.currentTarget.elements.delay.value);
  const amount = Number(evt.currentTarget.elements.amount.value);
  const step = Number(evt.currentTarget.elements.step.value);
  for (let i = 1; i <= amount; i++) {
    const position = i;
    // console.log(i);
    const timerId = setInterval(() => {
      createPromise(position, delayInp)
        .then(({ position, delayInp }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delayInp}ms`
          );
        })
        .catch(({ position, delayInp }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delayInp}ms`
          );
        });
      clearInterval(timerId);
    }, step);
  }
}

form.addEventListener('submit', onSubmit);
