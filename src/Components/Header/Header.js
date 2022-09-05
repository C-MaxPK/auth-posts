import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logoImg from './logo.png';
import logoImgMini from './logoMini.png';
import logoutImg from './logout.png';
import { userLogout } from '../../store/auth/authActions';
import { selectAuthData } from '../../store/auth/authSelectors';
import { Container, Wrapper, Logout, Logo, LogoMini } from './styles.js';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authData = useSelector(selectAuthData);

	const logout = () => {
		navigate('/');
		dispatch(userLogout());
	};

	return (
		<Container>
			<Logo src={logoImg} alt='logo' />
			<LogoMini src={logoImgMini} alt='logoMini' />
			{authData.verification && 
				<Wrapper>
					{authData.name}
					<Logout src={logoutImg} alt='logout' onClick={logout}/>
				</Wrapper>
			}
		</Container>
	);
};

export default Header;
