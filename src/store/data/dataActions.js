export const ADD_USERS = 'DATA::ADD_USERS';
export const ADD_POSTS = 'DATA::ADD_POSTS';
export const ADD_PHOTOS = 'DATA::ADD_PHOTOS';

const addUsersData = (users) => ({
  type: ADD_USERS,
  payload: users
});

const addPostsData = (posts) => ({
  type: ADD_POSTS,
  payload: posts
});

const addPhotosData = (photos) => ({
  type: ADD_PHOTOS,
  payload: photos
});

export const getData = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch(addUsersData(data)))
    .catch(err => console.log(err));
    
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => dispatch(addPostsData(data)))
    .catch(err => console.log(err));

  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => dispatch(addPhotosData(data)))
    .catch(err => console.log(err));
};
