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
		fetch('http://localhost:4000/profile', {
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
				{username ? (
					<>
						<Link to='/create'>Create new post</Link>
						<Link to='/' onClick={logout}>
							Logout
						</Link>
					</>
				) : (
					<>
						<Link to='/login'>Login</Link>
						<Link to='/register'>Register</Link>
					</>
				)}
			</nav>
		</header>
	);
}
