import Nav from './Nav'

function Header() {
	return (
		<header>
			<div className="container">
				<div className="h-32 flex justify-between items-center">

					{/* Logo */}
					<h2 className="text-2xl font-bold relative">
						<span>Sajid</span>
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