export const isValidUsername = (username) => {
  const isValid = username.length >= 5;

  return isValid;
};

export const isValidPassword = (password) => {
  const isValid =
    password.length >= 8 &&
    /([A-Z]|[À-Ü])/.test(password) &&
    /\d/.test(password);

  return isValid;
};

export const isSamePassword = (password1, password2) => {
  const isSame = password1 === password2;

  return isSame;
};

export const isAdultAge = (age) => {
  const isAdult = age >= 18;

  return isAdult;
};
