import Notiflix from 'notiflix';
const form = document.querySelector('form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    // setTimeout(() => {
    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay });
    } else {
      // Reject
      reject({ position, delay });
    }
    // }, delay);
  });
}

function onSubmit(evt) {
  evt.preventDefault();
  const delayInp = Number(evt.currentTarget.elements.delay.value);
  const amount = Number(evt.currentTarget.elements.amount.value);
  const step = Number(evt.currentTarget.elements.step.value);

  for (let i = 1; i <= amount; i++) {
    let position = i;
    let currentDelay = i === 1 ? delayInp : delayInp + step * (position - 1);

    setTimeout(() => {
      createPromise(position, currentDelay)
        .then(({ position, delay }) => {
          if (position === 1) {
            Notiflix.Notify.success(
              `&#9989 Fulfilled promise ${position} in ${currentDelay}ms`
            );
          } else {
            Notiflix.Notify.success(
              `&#9989 Fulfilled promise ${position} in ${currentDelay}ms`
            );
          }
        })
        .catch(({ position, delay }) => {
          if (position === 1) {
            Notiflix.Notify.failure(
              `&#10060 Rejected promise ${position} in ${currentDelay}ms`
            );
          } else {
            Notiflix.Notify.failure(
              `&#10060 Rejected promise ${position} in ${currentDelay}ms`
            );
          }
        });

      console.log(currentDelay);
    }, currentDelay);
  }

  evt.currentTarget.elements.delay.value = '';
  evt.currentTarget.elements.amount.value = '';
  evt.currentTarget.elements.step.value = '';
}

form.addEventListener('submit', onSubmit);
