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

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
