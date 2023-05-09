import { useHistory } from 'react-router';
import { LoginWrapper } from './style';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';

const Login = () => {
	const history = useHistory();

	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	const signUp = async () => {
		await createUserWithEmailAndPassword(auth, user, password)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<LoginWrapper>
			<form>
				<div>
					<label htmlFor="email-address">Email address</label>
					<input
						type="email"
						value={user}
						onChange={(e) => setUser(e.target.value)}
						required
						placeholder="Email address"
					/>
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						placeholder="Password"
					/>
				</div>

				<button type="submit" onClick={signUp}>
					Sign up
				</button>
			</form>
		</LoginWrapper>
	);
};

export default Login;
