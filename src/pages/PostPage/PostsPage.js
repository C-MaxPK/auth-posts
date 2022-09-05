import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Post from '../../Components/Post/Post';
import { getData } from '../../store/data/dataActions';
import { selectAuthData } from '../../store/auth/authSelectors';
import { selectUsersData, selectPostsData, selectPhotosData } from '../../store/data/dataSelectors';
import { Posts } from './styles.js';

const PostsPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authData = useSelector(selectAuthData);
	const usersData = useSelector(selectUsersData);
	const postsData = useSelector(selectPostsData);
	const photosData = useSelector(selectPhotosData);
	const [ data, setData ] = useState(null);

	useEffect(() => {
		if (!authData.verification) {
			return navigate("/");
		}
	}, [authData]);
			
	useEffect(() => {
		dispatch(getData());
	}, []);

	useEffect(() => {
		if (usersData.length > 0 && postsData.length > 0 && photosData.length > 0) {
			const newData = usersData.map(user => {
				const post = postsData.find(post => post.userId === user.id);
				const photo = photosData.find(photo => photo.albumId === user.id);
				return {
					id: user.id, 
					name: user.name, 
					company: user.company.name,
					postTitle: post.title,
					postBody: post.body,
					photo: photo.thumbnailUrl
				};
			});
			setData(newData);
		}
	}, [usersData, postsData, photosData]);

	return (
		<>
			<Header />
			<Posts>
				{data && data.map(post => <Post key={post.id} post={post}/>)}
			</Posts>
		</>
	);
};

export default PostsPage;
