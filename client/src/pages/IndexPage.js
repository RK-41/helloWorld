/*
  04.11.

  Index/Home Page

  23.11.
  Implemented Listing of Posts on the Home Page

*/

import { useState, useEffect } from 'react';
import Post from '../Post';

export default function IndexPage() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch('http://localhost:4000/post').then((res) => {
			res.json().then((posts) => {
				setPosts(posts);
			});
		}, []);
	}, []);

	return (
		<>
			{posts.length > 0 &&
				posts.map((post) => <Post key={post._id} {...post} />)}
		</>
	);
}
