/*
  04.11.

  Register Page

  06.11.
  State Management and Event Handling
*/

import { useState } from 'react';

export default function RegisterPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	async function register(ev) {
		ev.preventDefault();

		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.status === 200) {
			alert('Registration Successful!');
		} else {
			alert(`Registration Failed! ${response.statusText}`);
		}

		console.log(response);
	}

	return (
		<form className='register' onSubmit={register}>
			<h1>Become a Narrator</h1>

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

			<button>Register</button>
		</form>
	);
}
