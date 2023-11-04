/*
  04.11.

  Login Page
*/

import '../App.css';

export default function LoginPage() {
	return (
		<form className='login'>
			<h1>Let's Get Started!</h1>

			<input type='text' placeholder='username' />
			<input type='password' placeholder='password' />

			<button>Login</button>
		</form>
	);
}
