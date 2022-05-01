import React from 'react'
import kavanagh from '../assets/kavanagh.png'

function Projects() {
	return (
		<section id="projects" className="py-20">
			<div className="container">

				{/* Heading */}
				<div className="mb-12 md:mb-20">
					<p className="text-sm uppercase opacity-80">Latest Works</p>
					<h2 className="w-max text-4xl lg:text-5xl font-bold mt-2 relative after:content-[''] after:h-7 after:bg-primary/15 after:absolute after:-bottom-1.5 after:-left-2 after:-right-2 after:-z-10 dark:after:bg-white/15">My Projects</h2>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

					<div className="project border border-border-color relative group">
						<div className="w-full">
							<img className="w-full h-full aspect-square object-cover" src={kavanagh} alt="" />
						</div>
						<div className="bg-gradient-to-b from-[#3E7E80] to-[#FF2929] absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
						<p className="text-xl font-bold text-white uppercase absolute inset-0 z-10 grid place-content-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">Mobile App Redesign</p>
					</div>

					<div className="project border border-border-color relative group">
						<div className="w-full">
							<img className="w-full h-full aspect-square object-cover" src={kavanagh} alt="" />
						</div>
						<div className="bg-gradient-to-b from-[#3E7E80] to-[#FF2929] absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
						<p className="text-xl font-bold text-white uppercase absolute inset-0 z-10 grid place-content-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">Mobile App Redesign</p>
					</div>

					<div className="project border border-border-color relative group">
						<div className="w-full">
							<img className="w-full h-full aspect-square object-cover" src={kavanagh} alt="" />
						</div>
						<div className="bg-gradient-to-b from-[#3E7E80] to-[#FF2929] absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
						<p className="text-xl font-bold text-white uppercase absolute inset-0 z-10 grid place-content-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">Mobile App Redesign</p>
					</div>

					<div className="project border border-border-color relative group">
						<div className="w-full">
							<img className="w-full h-full aspect-square object-cover" src={kavanagh} alt="" />
						</div>
						<div className="bg-gradient-to-b from-[#3E7E80] to-[#FF2929] absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
						<p className="text-xl font-bold text-white uppercase absolute inset-0 z-10 grid place-content-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">Mobile App Redesign</p>
					</div>

					<div className="project border border-border-color relative group">
						<div className="w-full">
							<img className="w-full h-full aspect-square object-cover" src={kavanagh} alt="" />
						</div>
						<div className="bg-gradient-to-b from-[#3E7E80] to-[#FF2929] absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
						<p className="text-xl font-bold text-white uppercase absolute inset-0 z-10 grid place-content-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">Mobile App Redesign</p>
					</div>

					<div className="project border border-border-color relative group">
						<div className="w-full">
							<img className="w-full h-full aspect-square object-cover" src={kavanagh} alt="" />
						</div>
						<div className="bg-gradient-to-b from-[#3E7E80] to-[#FF2929] absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
						<p className="text-xl font-bold text-white uppercase absolute inset-0 z-10 grid place-content-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">Mobile App Redesign</p>
					</div>

				</div>

			</div>
		</section>
	)
}

export default Projects