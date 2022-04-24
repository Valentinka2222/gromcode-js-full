const baseUrl = 'https://626567dd94374a2c506ffa47.mockapi.io/newUser';

export const getUser = () => {
  return fetch(baseUrl).then((response) => response.json());
};

export const createUser = (userData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
};

export const updateUser = (userId, updatedUserData) => {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedUserData),
  });
};

export const deleteUser = (userId) => {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });
};
