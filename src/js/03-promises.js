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
  let totalDelay = 0;
  for (let i = 0; i < amount; i++) {
    let position = i + 1;
    // delay += position;
    // console.log(i);

    const timerId = setInterval(() => {
      createPromise(position, step)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `:white_check_mark: Fulfilled promise ${position} in ${
              delay * position
            }ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `:x: Rejected promise ${position} in ${delay * position}ms`
          );
        });
      console.log(totalDelay);
      clearInterval(timerId);
    }, Number(step * position));
  }
  evt.currentTarget.elements.delay.value = '';
  evt.currentTarget.elements.amount.value = '';
  evt.currentTarget.elements.step.value = '';
}
form.addEventListener('submit', onSubmit);
