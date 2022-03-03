/* eslint-disable linebreak-style */
/* eslint-disable no-constant-condition */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable no-console */
// ejercicio 3:
// usar resolve y reject cuando vas a crear,{then catch} cuando vas a usar

/*
```js
somePromise
  .then(successCb)
  .catch(failureCb)
posible que la 1ra se resuelva y la 2da se rechace
  ```


is equivalent to

```js
somePromise
  .then(successCb, failureCb)
```
*/
function squarePromise(numberPromise) {
  return numberPromise.then(
    (e) =>
      new Promise((resolve, reject) => {
        let aux =
          parseInt(e, 10) || `¡No se puede convertir ${e} en un número!`;
        if (typeof e === "number") resolve(e ** 2);
        return typeof aux === "number" ? resolve(aux ** 2) : reject(aux);
      })
  );
}

/// node ./node_modules/mocha/bin/mocha -- .\02-consuming-promises\
