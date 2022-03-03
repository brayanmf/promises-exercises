/* eslint-disable linebreak-style */
/* eslint-disable quotes */

/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((e) => asyncTransformer(e))
      .then(
        (e) => resolve(e),
        (e) => reject(e)
      );
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} firstPromise
 * @param {function} slowAsyncProcess
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
  return firstPromise.then((e) => slowAsyncProcess(e));
}

/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    return getUserById(userId).then((user) => {
      if (user) {
        return getOrganizationById(user.organizationId).then((organization) => {
          user.organization = organization;
          return user;
        });
      }
    });
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};
