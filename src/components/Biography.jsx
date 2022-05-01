import React from 'react'

function Biography() {
	return (
		<section id="biography" className="bg-primary/3 dark:bg-white/3 py-20">
			<div className="container">

				{/* Heading */}
				<div className="mb-12 md:mb-20">
					<p className="text-sm uppercase opacity-80">Biography</p>
					<h2 className="w-max text-4xl lg:text-5xl font-bold mt-2 relative after:content-[''] after:h-7 after:bg-primary/15 after:absolute after:-bottom-1.5 after:-left-2 after:-right-2 after:-z-10 dark:after:bg-white/15">Biography</h2>
				</div>

				<div className="grid md:grid-cols-4 gap-10 md:gap-6">

					{/* Sidebar */}
					<div className="grid grid-cols-2 md:grid-cols-1 gap-6 items-start">
						<div className="grid gap-3">
							<p className="font-bold uppercase">Birthday</p>
							<p className="text-sm">10 July 1987</p>
						</div>
						<div className="grid gap-3">
							<p className="font-bold uppercase">Nationality</p>
							<p className="text-sm">Indian</p>
						</div>
						<div className="grid gap-3">
							<p className="font-bold uppercase">Relationship</p>
							<p className="text-sm">Married</p>
						</div>
						<div className="grid gap-3">
							<p className="font-bold uppercase">Languages</p>
							<p className="text-sm">English & Hindi</p>
						</div>
					</div>

					{/* Content */}
					<div className="content md:col-span-3 grid gap-6">
						<p>
							Pellentesque iaculis penatibus sit vestibulum dictum consequat lorem aliquam. Nam nisi, viverra purus ac nibh mattis. Neque elit tristique ullamcorper id luctus sed massa volutpat tempus. Sagittis rhoncus elementum maecenas ridiculus. Maecenas mi, lacinia turpis nulla nec. Sed neque, tempor sed faucibus blandit cursus ipsum erat.
						</p>
						<p>
							Pellentesque viverra senectus donec leo pulvinar euismod convallis. Ut enim sem dolor tristique ornare ut consequat. Nisl id eget massa arcu netus. Tincidunt tincidunt nec consectetur bibendum in sem volutpat amet in. Quam sed amet venenatis tincidunt. Ullamcorper cursus sit in quis sagittis cursus turpis sed id.
						</p>
						<p className="font-bold italic">
							Nulla ultricies imperdiet dignissim purus metus ac elementum. Proin neque tincidunt dui mattis ac enim proin elit scelerisque.
						</p>
					</div>

				</div>

			</div>
		</section>
	)
}

export default Biography