const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';

export function getUsersList() {
  return fetch(baseUrl).then((response) => response.json());
}

export function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`).then((response) => response.json());
}

export function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    body: userData,
  }).then((response) => response.json());
}

export function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  }).then((response) => response.json());
}

export function updateUser(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    body: userData,
  }).then((response) => response.json());
}
