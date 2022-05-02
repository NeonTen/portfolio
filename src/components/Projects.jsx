import Heading from './Heading'
import Project from './Project'
import kavanagh from '../assets/kavanagh.jpg'
import square from '../assets/square.jpg'
import church from '../assets/church.jpg'

function Projects() {
	return (
		<section id="projects" className="py-20">
			<div className="container">

				<Heading
					subheading="Latest Works"
					heading="My Projects"
				/>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

					<Project
						img={kavanagh}
						name="Kavanagh"
						url="https://kavanagh.fyrefli.ie/"
					/>
					<Project
						img={square}
						name="Square"
						url="https://demo.mythemeshop.com/square-beta/"
					/>
					<Project
						img={church}
						name="Church"
						url="https://demo.mythemeshop.com/church/"
					/>

				</div>

			</div>
		</section>
	)
}

export default Projects