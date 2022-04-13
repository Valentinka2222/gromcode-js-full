'use strict';

export const requestUserData = (userId) => {
  const p = new Promise((resolve, rejected) => {
    if (userId === 'broken') {
      setTimeout(() => {
        rejected(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId: `${userId}`,
          email: `${userId}'@example.com'`,
        });
      }, 1000);
    }
  });
  return p;
};
requestUserData('userid777').then((data) => console.log(data));
