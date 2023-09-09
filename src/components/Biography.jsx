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
							I'm a seasoned WordPress Developer with a strong passion for crafting efficient and visually appealing websites. My expertise includes creating custom WordPress themes from scratch, minimizing plugin usage to ensure seamless functionality.
						</p>
						<p>
							Furthermore, I'm well-versed in UI/UX design, delivering fast-loading, accessible, and standards-compliant websites that are not only clean and well-commented but also incredibly user-friendly.
						</p>
						<p className="font-bold">
							Here's a more concise and focused list of key skills:
						</p>
						<ul className="list-inside list-disc space-y-1">
							<li>Mobile-first and responsive development</li>
							<li>Proficient in converting wireframes into HTML/CSS/WordPress</li>
							<li>Skilled in interacting with RESTful APIs (JSON, XML)</li>
							<li>Experienced in version control (GitHub)</li>
							<li>Proficient with debugging tools (e.g., Firebug, Chrome inspector)</li>
							<li>Efficiently manages multiple projects</li>
							<li>Identifies and resolves performance issues</li>
							<li>Adaptable, excelling both independently and as part of a team</li>
							<li>Writes clean, concise, and reusable code</li>
						</ul>
					</div>

				</div>

			</div>
		</section>
	)
}

export default Biography