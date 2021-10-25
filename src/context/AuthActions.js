export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START"
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS"
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE"
});