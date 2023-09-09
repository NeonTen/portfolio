import { BsSuitHeartFill } from 'react-icons/bs'

function Footer() {
	return (
		<footer>
			<div className="container">
				<p className="text-sm text-dark/80 dark:text-white/80 sm:flex items-center space-x-2 py-4">
					<span className="inline">Copyright { new Date().getFullYear() }. Made by Sajid Khan with love</span>
					<BsSuitHeartFill className="text-secondary inline" />
				</p>
			</div>
		</footer>
	)
}

export default Footer