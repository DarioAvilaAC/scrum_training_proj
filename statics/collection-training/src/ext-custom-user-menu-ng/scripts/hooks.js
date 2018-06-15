/**
 * @name hooks#processProfileData
 * @type {function}
 *
 * @description
 * Processes user data retrieved from user profile endpoint
 *
 * @param {User} user User data
 * @returns {User} Processed data
 */
const processProfileData = (user) =>
  Object.assign(user, { name: user.username });

export default {
  processProfileData,
};
