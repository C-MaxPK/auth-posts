import styled from 'styled-components';

export const Container = styled.div`
	width: 467px;
	height: 388px;
	border: 5px solid #27569C;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	padding: 25px 21px;
	font-size: 16px;
	line-height: 19px;
	@media (max-width: 768px) {
		width: 325px;
		height: 470px;
	}
	@media (max-width: 376px) {
		width: 292px;
		height: 200px;
		padding: 10px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	@media (max-width: 768px) {
		display: block;
	}
`;

export const UserInfo = styled.div`
	margin-left: 30px;
	@media (max-width: 768px) {
		margin-left: 0;
		margin-top: 22px;
	}
	@media (max-width: 376px) {
		margin-top: 0;
	}
`;

export const Author = styled.div`
	margin-bottom: 11px;
	@media (max-width: 768px) {
		margin-bottom: 8px;
	}
`;

export const Title = styled.div`
	margin: 11px 0 24px;
	@media (max-width: 768px) {
		margin: 8px 0;
	}
`;

export const Img = styled.img`
	@media (max-width: 376px) {
		display: none;
	}
`;

export const Company = styled.div`
	@media (max-width: 376px) {
		margin: 27px 0;
	}
`;

export const Body = styled.div`
	@media (max-width: 376px) {
		display: none;
	}
`;