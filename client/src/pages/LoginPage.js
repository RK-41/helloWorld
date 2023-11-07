/*
  04.11.

  Login Page

  07.11.
  State Management and Event Handling
*/

import { useContext, useState } from 'react';
import '../App.css';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function LoginPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);
	const { setUserInfo } = useContext(UserContext);

	async function login(ev) {
		ev.preventDefault();

		const response = await fetch('http://127.0.0.1:4000/login', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: {
				'Content-type': 'application/json',
				'Access-Control-Allow-Credentials': true,
			},
			credentials: 'include',
		});

		if (response.ok) {
			response.json().then((userInfo) => {
				setUserInfo(userInfo);
				setRedirect(true);
			});
		} else {
			alert('Wrong Credential(s)');
		}
	}

	if (redirect) {
		return <Navigate to={'/'} />;
	}
	return (
		<form className='login' onSubmit={login}>
			<h1>Let's Get Started!</h1>

			<input
				type='text'
				placeholder='username'
				value={username}
				onChange={(ev) => setUsername(ev.target.value)}
			/>
			<input
				type='password'
				placeholder='password'
				value={password}
				onChange={(ev) => setPassword(ev.target.value)}
			/>

			<button>Login</button>
		</form>
	);
}
