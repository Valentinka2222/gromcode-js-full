export const parseUser = jsonString => {
  let userData;
  try {
    userData = JSON.parse(jsonString);
  } catch (err) {
    if (err instanceof SyntaxError) {
      return null;
    }
  }
  return userData;
};
