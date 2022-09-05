import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	height: 118px;
  background-color: #E4B062;
	display: flex;
  justify-content: space-between;
	align-items: center;
	padding: 0 41px 0 35px;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 34px;
`;

export const Logout = styled.img`
	cursor: pointer;
`;

export const Logo = styled.img`
	@media (max-width: 520px) {
		display: none;
	}
`;

export const LogoMini = styled.img`
	display: none;
	@media (max-width: 520px) {
		display: block;
	}
`;