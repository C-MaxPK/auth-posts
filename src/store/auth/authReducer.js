import { LOGIN, LOGOUT } from './authActions';

const initialState = {
  verification: false,
  name: null
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {...state, verification: true, name: payload}
    case LOGOUT:
      return {...state, verification: false, name: null}
    default:
      return state;
  }
};

export default authReducer;
