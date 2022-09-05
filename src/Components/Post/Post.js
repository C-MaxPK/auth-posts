import { Container, Wrapper, UserInfo, Author, Title, Img, Company, Body } from './styles.js';

const Post = ({ post }) => {

	return (
		<Container>

			<Wrapper>
				<Img src={post.photo} alt="photo" />
				<UserInfo>
					<Author>Author: {post.name}</Author>
					<Company>Company: {post.company}</Company>
				</UserInfo>
			</Wrapper>

			<Title>Title: {post.postTitle}</Title>
			<Body>{post.postBody}</Body>

		</Container>
	);
};

export default Post;
