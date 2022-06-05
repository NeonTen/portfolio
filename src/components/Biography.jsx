import Heading from "./Heading"

function Biography() {
	return (
		<section id="biography" className="bg-primary/3 dark:bg-white/3 py-20">
			<div className="container">

				<Heading
					subheading="About me"
					heading="Biography"
				/>

				<div className="grid md:grid-cols-4 gap-10 md:gap-6 items-start">

					{/* Sidebar */}
					<div className="grid grid-cols-2 md:grid-cols-1 gap-6">
						<div className="grid gap-3">
							<p className="font-bold uppercase">Nationality</p>
							<p className="text-sm">Indian</p>
						</div>
						<div className="grid gap-3">
							<p className="font-bold uppercase">Languages</p>
							<p className="text-sm">English & Hindi</p>
						</div>
						<div className="grid gap-3">
							<p className="font-bold uppercase">Relationship</p>
							<p className="text-sm">Married</p>
						</div>
					</div>

					{/* Content */}
					<div className="content md:col-span-3 grid gap-6">
						<p>
							I am an experienced and passionate WordPress Developer who have good communication skills and ability to communicate with clients. I can create a WordPress Theme from scratch using minimal plugins in order to avoid conflicts.
						</p>
						<p>
							I am also highly trained as UI/UX Designer. My custom-built websites are fast loading, accessible, follow coding standards, clean, commented and easy to manage.
						</p>
						<p className="font-bold">
							These are some key skills, I am good at:
						</p>
						<ul className="list-inside list-disc space-y-1">
							<li>A deep understanding of mobile-first and responsive development</li>
							<li>Ability to convert comprehensive layout and wireframes into working HTML/CSS/WordPress</li>
							<li>Knowledge of how to interact with RESTful APIs and formats (JSON, XML)</li>
							<li>Knowledge of version control, specifically Github</li>
							<li>Knowledge of debugging tools like Firebug, Chrome inspector, etc</li>
							<li>Ability to work on multiple projects</li>
							<li>Find and address performance issues</li>
							<li>Ability to both work autonomously and as part of a team</li>
							<li>Can code cleaner, shorter and re-usable</li>
						</ul>
					</div>

				</div>

			</div>
		</section>
	)
}

export default Biography