/* eslint-disable linebreak-style */
/* eslint-disable quotes */

/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */

function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line semi
    promise
      .then((e) => transformer(e))
      .then((e) => resolve(e))
      .catch((e) => reject(e))
      .catch((e) => reject(e));
  });
}
/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise.then(
    (e) =>
      new Promise((resolve, reject) => {
        let aux = parseInt(e, 10) || "Cannot convert '" + e + "' to a number!";
        if (typeof e === "number") return resolve(e ** 2);
        return typeof aux === "number" ? resolve(aux ** 2) : reject(aux);
      })
  );
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch(() => {
    return new Promise((resolve) => resolve(0));
  });
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */

function switcheroo(promise) {
  return promise.then(
    (res) => Promise.reject(res),
    (res2) => Promise.resolve(res2)
  );
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};
