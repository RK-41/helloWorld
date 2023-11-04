/*
  04.11.

*/

export default function Post() {
	return (
		<div className='post'>
			<div className='image'>
				<img
					src='https://www.popsci.com/uploads/2022/09/06/IMG_6219-1-scaled.jpg?auto=webp&width=1440&height=1080'
					alt=''
				/>
			</div>

			<div className='texts'>
				<h2>Journey to the center of a quantum computer</h2>

				<p className='info'>
					<a href='' className='author'>
						Charlotte Hu
					</a>
					<time>2023-11-04 16:46</time>
				</p>

				<p className='summary'>
					The beating heart of IBM’s quantum computer is a chip no bigger than a
					quarter. These extravagant machines promise to solve difficult
					problems that stump today’s best classical computers.
				</p>
			</div>
		</div>
	);
}
