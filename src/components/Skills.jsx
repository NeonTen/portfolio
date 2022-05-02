import Heading from './Heading'
import Skill from './Skill'

function Biography() {
	return (
		<section id="skills" className="bg-primary/3 dark:bg-white/3 py-20">
			<div className="container">

				<Heading
					subheading="Skills"
					heading="Tools and Technologies"
				/>

				<div className="grid md:grid-cols-5 lg:grid-cols-4 gap-10 md:gap-6 items-start">

					{/* Sidebar */}
					<div className="md:col-span-2 lg:col-auto grid grid-cols-2 md:grid-cols-1 gap-4 items-start">
						<p className="font-bold uppercase col-span-full md:col-auto">Profiles</p>
						<p className="text-sm">WordPress Developer</p>
						<p className="text-sm">UI/UX Developer</p>
						<p className="text-sm">React Developer</p>
						<p className="text-sm">Front-End Developer</p>
						<p className="text-sm">HTML Developer</p>
						<p className="text-sm">Product Developer</p>
						<p className="text-sm">PSD to HTML</p>
						<p className="text-sm">PSD to WordPress</p>
						<p className="text-sm">Figma to WordPress</p>
					</div>

					{/* Content */}
					<div className="content md:col-span-3 grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-32">
						
						{/* Left */}
						<div className="w-full flex flex-col space-y-8">
							<Skill
								name="WordPress"
								value="84%"
							/>
							<Skill
								name="PHP"
								value="60%"
							/>
							<Skill
								name="React"
								value="70%"
							/>
							<Skill
								name="Debugging"
								value="90%"
							/>
							<Skill
								name="Git"
								value="70%"
							/>
						</div>

						{/* Right */}
						<div className="w-full flex flex-col space-y-8">
							<Skill
								name="HTML/CSS/SASS/Emmet"
								value="86%"
							/>
							<Skill
								name="JS/ES6/JQuery/Ajax"
								value="60%"
							/>
							<Skill
								name="Gulp/Webpack/LaravelMix"
								value="80%"
							/>
							<Skill
								name="Photoshop/Sketch/AdobeXD/Figma"
								value="90%"
							/>
							<Skill
								name="Bootstrap/Bulma/Tailwind"
								value="90%"
							/>
						</div>

					</div>

				</div>

			</div>
		</section>
	)
}

export default Biography