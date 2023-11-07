/*
  04.11.

  Header Component

  07.11.
  'profile' endpoint setup
  UserContext Implementation for Logout

*/

import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Header() {

	const { userInfo, setUserInfo } = useContext(UserContext);

	useEffect(() => {
		fetch('http://127.0.0.1:4000/profile', {
			credentials: 'include',
		}).then((response) => {
			// Parsing JSON
			response.json().then((userInfo) => {
				setUserInfo(userInfo);
			});
		});
	}, [setUserInfo]);

	function logout() {
		fetch('http://127.0.0.1:4000/logout', {
			credentials: 'include',
			method: 'POST',
		});
		setUserInfo(null);
	}

	const username = userInfo?.username;

	return (
		<header>
			<Link to='/' className='logo'>
				helloWorld
			</Link>

			<nav>
				{/* When a username is available ie, someone is logged in */}
				{username && (
					<>
						<Link to='/create'>Create new post</Link>
						<Link to='/' onClick={logout}>
							Logout
						</Link>
					</>
				)}

				{/* When a username is not available */}
				{!username && (
					<>
						<Link to='/login'>Login</Link>
						<Link to='/register'>Register</Link>
					</>
				)}
			</nav>
		</header>
	);
}
