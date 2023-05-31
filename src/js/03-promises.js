function createPromise(position, delay, firstDelay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {}, firstDelay);
  });

  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
