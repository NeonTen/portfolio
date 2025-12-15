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
						{/* <div className="grid gap-3">
							<p className="font-bold uppercase">Nationality</p>
							<p className="text-sm">Indian</p>
						</div> */}
						<div className="grid gap-3">
							<p className="font-bold uppercase">Languages</p>
							<p className="text-sm">English & Hindi</p>
						</div>
						{/* <div className="grid gap-3">
							<p className="font-bold uppercase">Relationship</p>
							<p className="text-sm">Married</p>
						</div> */}
					</div>

					{/* Content */}
					<div className="content md:col-span-3 grid gap-6">
						{/* <p>
							I'm an experienced WordPress Developer with a passion for building fast, user-friendly, and visually appealing websites. I specialize in creating custom WordPress themes from scratch while keeping plugin usage minimal for better performance.
						</p>
						<p>
							I have strong skills in UI/UX design, ensuring websites are fast-loading, accessible, and easy to use. My expertise also includes WooCommerce, SEO, website optimization, and debugging to deliver high-quality solutions.
						</p>
						<p className="font-bold">
							Key Skills:
						</p>
						<ul className="list-inside list-disc space-y-1">
							<li>Mobile-first and responsive development</li>
							<li>Converting wireframes into HTML, CSS, and WordPress</li>
							<li>WooCommerce setup and customization</li>
							<li>Working with RESTful APIs (JSON, XML)</li>
							<li>Version control (GitHub)</li>
							<li>Debugging tools (Firebug, Chrome Inspector)</li>
							<li>Website speed optimization and SEO best practices</li>
							<li>Managing multiple projects efficiently</li>
							<li>Identifying and fixing performance issues</li>
							<li>Adapting to different team environments and working independently</li>
						</ul> */}
						<ul className="list-inside list-disc space-y-1">
							<li><strong>Project Management:</strong> Agile/Scrum workflows, sprint planning, risk handling, client communication</li>
							<li><strong>WordPress:</strong> Custom themes & plugins, WooCommerce, multisite, ACF, Elementor, Gutenberg</li>
							<li><strong>Front-End & Tech:</strong> HTML, CSS, Tailwind, JavaScript, jQuery, AJAX, Git</li>
							<li><strong>Team & Leadership:</strong> Cross-team coordination, stakeholder handling, resource planning</li>
							<li><strong>Performance & QA:</strong> Speed optimization, debugging, SEO basics, accessibility standards</li>
							<li><strong>Tools:</strong> ClickUp, Jira, Trello, GitHub, Figma, Adobe tools</li>
							<li><strong>AI & Automation:</strong> Using AI tools for estimation, QA support, and workflow improvement</li>
						</ul>
					</div>

				</div>

			</div>
		</section>
	)
}

export default Biography