import styled from 'styled-components';

export const AuthForm = styled.form`
	margin: 100px auto 0;
	max-width: 480px;
	border: 5px solid #27569C;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 6px;
	text-align: center;
	@media (max-width: 465px) {
		margin-top: 14px;
		max-width: 290px;
	}
`;

export const Input = styled.input`
	width: 295px;
	height: 45px;
	background: #D9D9D9;
	border: 4px solid #27569C;
	border-radius: 10px;
	font-size: inherit;
	padding: 0 10px;
	outline: none;
	@media (max-width: 465px) {
		width: 212px;
		height: 39px;
	}
`;

export const Title = styled.div`
	margin: 35px 0;
	color: #27569C;
	@media (max-width: 465px) {
		margin: 8px 0;
	}
`;

export const Login = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	@media (max-width: 465px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Pass = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	margin: 25px 0;
	@media (max-width: 465px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Btn = styled.button`
	cursor: pointer;
	width: 213px;
	height: 43px;
	background: #E4B062;
	color: #000;
	border-radius: 10px;
	border: none;
	font-weight: inherit;
	font-size: inherit;
	line-height: inherit;
	margin-bottom: 27px;
`;

export const Error = styled.div`
	color: red;
	margin-bottom: 10px;
`;

export const LoginTitle = styled.div`
	@media (max-width: 465px) {
		align-self: start;
		margin: 0 0 13px 16px;
		text-align: left;
	}
`;

export const PassTitle = styled.div`
	@media (max-width: 465px) {
		align-self: start;
		margin: 0 0 13px 16px;
		text-align: left;
	}
`;
