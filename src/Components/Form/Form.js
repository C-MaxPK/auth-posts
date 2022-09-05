import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { userLogin } from '../../store/auth/authActions';
import { AuthForm, Input, Title, Login, Pass, Btn, Error, LoginTitle, PassTitle } from './styles.js';

const Form = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loginInput, setLoginInput] = useState('');
	const [passInput, setPassInput] = useState('');
	const [errorFlg, setErrorFlg] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		if (loginInput === 'admin' && passInput === '12345') {
			dispatch(userLogin(loginInput));
			navigate('/posts');
		} else {
			setErrorFlg(true);
			setLoginInput('');
			setPassInput('');
		}
	};

	return (
		<AuthForm onSubmit={e => onSubmit(e)}>

			<Title>Authorization</Title>

			<Login>
				<LoginTitle>login</LoginTitle>
				<Input value={loginInput} onChange={e => setLoginInput(e.target.value)} autoFocus />
			</Login>

			<Pass>
				<PassTitle>password</PassTitle>
				<Input value={passInput} onChange={e => setPassInput(e.target.value)} />
			</Pass>

			<Btn>Submit</Btn>

			{errorFlg && <Error>Неверный логин или пароль</Error>}
			
		</AuthForm>
	)
};

export default Form;
