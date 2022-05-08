import { BsSuitHeartFill } from 'react-icons/bs'

function Footer() {
	return (
		<footer>
			<div className="container">
				<p className="text-sm text-dark/80 dark:text-white/80 flex items-center space-x-2 py-4">
					<span>Copyright 2022. Made by Sajid Khan with love</span>
					<BsSuitHeartFill className="text-secondary" />
				</p>
			</div>
		</footer>
	)
}

export default Footer