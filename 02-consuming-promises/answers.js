/* eslint-disable linebreak-style */
/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {thunk} action
 *
 */
function waitForPromise(promise, action) {
  /* IMPLEMENT ME */
  promise.then(() => action());
}
/**
 *
 * EXERCISE 2
 *
 * @param {Promise} promise
 * @param {consumer} consumer
 * @param {handler} handler
 */
function consumePromise(promise, consumer, handler) {
  /* IMPLEMENT ME! */
  promise.then((e) => consumer(e)).catch((e) => handler(e));
}

/**
 * @callback thunk
 * @returns {void}
 */
module.exports = {
  waitForPromise,
  consumePromise,
};
