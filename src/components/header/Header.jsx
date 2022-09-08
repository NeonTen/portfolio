import Nav from './Nav'
import { Link } from 'react-scroll'

function Header() {
	return (
		<header id="header" className="h-32 flex items-center md:fixed top-0 left-0 right-0 bg-white dark:bg-dark z-20">
			<div className="container">
				<div className="flex justify-between items-center">

					{/* Logo */}
					<h2 className="text-2xl font-bold relative cursor-pointer">
						<Link to="me" smooth={true} spy={true} offset={-130}>Sajid</Link>
						<span className='w-1 h-1 rounded-full bg-primary/60 absolute -right-1.5 bottom-[7px] dark:bg-white/60'></span>
						<div className="w-8 h-8 bg-primary/15 absolute -left-3 top-0 -z-10 dark:bg-white/15"></div>
					</h2>

					<Nav />

				</div>
			</div>
		</header>
	);
}

export default Header;