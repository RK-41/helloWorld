/*
   04.11.

   Post Preview/Link Section on Home Page

   23.11.
   Implemented the Attributes and Functionalities of the Post Section

*/
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export default function Post({
	_id,
	title,
	summary,
	cover,
	createdAt,
	author,
}) {
	return (
		<div className='post'>
			<Link to={`/post/${_id}`}>
				<div className='image'>
					<img src={'http://localhost:4000/' + cover} alt='Cover' />
				</div>
			</Link>

			<div className='texts'>
				<Link to={`/post/${_id}`}>
					<h2>{title}</h2>
				</Link>

				<p className='info'>
					{/* FUTURE CORRECTION: Update 'href' to proper route */}
					<a href='/' className='author'>
						{author.username}
					</a>
					<time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
				</p>

				<p className='summary'>{summary}</p>
			</div>
		</div>
	);
}
