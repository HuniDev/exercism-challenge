import logo from '../assets/images/logo.svg';
import trackicon from '../assets/images/track-icon.svg';
import cardash from '../assets/images/car-dashboard-speed.svg';
import bubble from '../assets/images/Group 259.svg';
import hexagon from '../assets/images/Group 258.svg';
import railroad from '../assets/images/Group.svg';
import convo from '../assets/images/convo.svg';
import toys from '../assets/images/Toygroup.svg';

function Navbar() {
	return (
		<nav className='bg-white shadow flex flex-row h-20 w-full'>
			<div className='flex flex-direction-row ml-10 items-center marker:p-1 text-gray-600 '>
				<img src={logo} alt='logo' />

				<div className='logo-box flex'>
					<img src={trackicon} alt='track' className='frame' />
					<img src={cardash} className='myImg' alt='cardash' />
				</div>
				<div className='flex ml-20'>
					<a
						href='#'
						className='text-gray-800 border-transparent transition-colors duration-200 transform border-b-2  mx-1.5 sm:mx-6'
					>
						Dashboard
					</a>

					<img src={railroad} alt='tracks' />

					<a
						href='#'
						className='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform  hover: mx-1.5 sm:mx-6'
					>
						Tracks
					</a>

					<img src={convo} alt='convo' />

					<a
						href='#'
						className='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform   mx-1.5 sm:mx-6'
					>
						Mentoring
					</a>

					<img src={toys} alt='contribute' />

					<a
						href='#'
						className='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform  hover: mx-1.5 sm:mx-6'
					>
						Contribute
					</a>
				</div>
			</div>
			<div className='flex items-center ml-4'>
				<img src={bubble} alt='bubble' />

				<img src={hexagon} alt='hexagon' />

				<a
					href='#'
					className='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform  hover: mx-1.5 sm:mx-6'
				/>

				<a
					href='#'
					className='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform   mx-1.5 sm:mx-6'
				/>
			</div>
		</nav>
	);
}

export default Navbar;
