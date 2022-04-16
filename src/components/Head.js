import squiggle from '../assets/images/Frame 8.svg';

function Head() {
	return (
		<div className='flex items-center justify-center py-16 w-100%'>
			<div className='w-100%'>
				<p className='text-3xl font-semibold'>Testimonials I've Left</p>
				<div className='flex justify-center my-5'>
					<img src={squiggle} alt='squiggle' />
				</div>
			</div>
		</div>
	);
}

export default Head;
