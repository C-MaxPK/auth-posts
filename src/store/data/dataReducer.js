import { ADD_USERS, ADD_POSTS, ADD_PHOTOS } from './dataActions';

const initialState = {
  users: [],
  posts: [],
  photos: []
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USERS:
      return {...state, users: payload};
    case ADD_POSTS:
      return {...state, posts: payload};
    case ADD_PHOTOS:
      return {...state, photos: payload};
    default:
      return state;
  }
};

export default userReducer;
