import Heading from '../Heading'
import Project from './Project'
import kavanagh from '../../assets/kavanagh.jpg'
import square from '../../assets/square.jpg'
import church from '../../assets/church.jpg'
import books from '../../assets/books.jpg'
import designer from '../../assets/designer.jpg'
import realEstate from '../../assets/real-estate.jpg'
import outlet from '../../assets/outlet.jpg'
import technologist from '../../assets/technologist.jpg'
import agency from '../../assets/agency.jpg'
import magnus from '../../assets/magnus.jpg'
import news from '../../assets/news.jpg'
import seekers from '../../assets/seekers.jpg'

function Projects() {
	return (
		<section id="projects" className="py-20">
			<div className="container">

				<Heading
					subheading="Latest Works"
					heading="My Projects"
				/>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

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
					<Project
						img={books}
						name="Books"
						url="https://demo.mythemeshop.com/books/"
					/>
					<Project
						img={agency}
						name="Agency"
						url="https://demo.mythemeshop.com/agency/"
					/>
					<Project
						img={magnus}
						name="magnus"
						url="https://demo.mythemeshop.com/magnus/"
					/>
					<Project
						img={news}
						name="News"
						url="https://demo.mythemeshop.com/news/"
					/>
					<Project
						img={seekers}
						name="Seekers"
						url="https://demo.mythemeshop.com/seekers/"
					/>
					{/* <div className="col-span-full grid justify-center mt-6">
						<button className="button">Show More</button>
					</div> */}
					<Project
						img={designer}
						name="Designer"
						url="https://demo.mythemeshop.com/designer/"
					/>
					<Project
						img={realEstate}
						name="Real Estate"
						url="https://demo.mythemeshop.com/real-estate/"
					/>
					<Project
						img={outlet}
						name="Outlet"
						url="https://demo.mythemeshop.com/outlet/"
					/>
					<Project
						img={technologist}
						name="Technologist"
						url="https://demo.mythemeshop.com/technologist/"
					/>

				</div>

			</div>
		</section>
	)
}

export default Projects