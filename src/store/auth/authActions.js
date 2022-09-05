export const LOGIN = 'AUTH::LOGIN';
export const LOGOUT = 'AUTH::LOGOUT';

export const userLogin = (name) => ({
  type: LOGIN,
  payload: name
});

export const userLogout = () => ({
  type: LOGOUT
});
