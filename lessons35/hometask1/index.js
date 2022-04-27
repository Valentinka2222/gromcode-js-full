export const parseUser = jsonString => {
  const userData = JSON.parse(jsonString);
  try {
    userData;
  } catch (err) {
    console.err(err);
    return null;
  }
  return userData;
};
