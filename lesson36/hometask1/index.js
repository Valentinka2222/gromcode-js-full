'use strict';

/**
 * @param {string[]} users
 * @return {promise}
 */

export const getUsersBlogs = async users => {
  try {
    const responseArr = await users.map(user => {
      const response = fetch(`https://api.github.com/users/${user}`)
        .then(response => {
          if (!response.ok) {
            return null;
          }
          return response.json();
        })
        .then(user => {
          return user.blog;
        });

      return response.then(res => {
        return res;
      });
    });

    return Promise.all(responseArr);
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};
