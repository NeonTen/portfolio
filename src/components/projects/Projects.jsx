import Heading from '../Heading'
import Project from './Project'
import kavanagh from '../../assets/kavanagh.jpg'
import hgash from '../../assets/hgash.jpg'
import netbiz from '../../assets/netbiz.jpg'
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
						url="https://mesajid.com/projects/kavanagh/"
					/>
					<Project
						img={hgash}
						name="HG Ash"
						url="https://www.hgash.co.uk/"
					/>
					<Project
						img={netbiz}
						name="Netbiz CMS"
						url="https://mesajid.com/projects/netbizcms/"
					/>
					<Project
						img={square}
						name="Square"
						url="https://mesajid.com/projects/square/"
					/>
					<Project
						img={church}
						name="Church"
						url="https://mesajid.com/projects/church/"
					/>
					<Project
						img={books}
						name="Books"
						url="https://mesajid.com/projects/books/"
					/>
					<Project
						img={agency}
						name="Agency"
						url="https://mesajid.com/projects/agency/"
					/>
					<Project
						img={magnus}
						name="magnus"
						url="https://mesajid.com/projects/magnus/"
					/>
					<Project
						img={news}
						name="News"
						url="https://mesajid.com/projects/news/"
					/>
					<Project
						img={seekers}
						name="Seekers"
						url="https://mesajid.com/projects/seekers/"
					/>
					{/* <div className="col-span-full grid justify-center mt-6">
						<button className="button">Show More</button>
					</div> */}
					<Project
						img={designer}
						name="Designer"
						url="https://mesajid.com/projects/designer/"
					/>
					<Project
						img={realEstate}
						name="Real Estate"
						url="https://mesajid.com/projects/real-estate/"
					/>
					<Project
						img={outlet}
						name="Outlet"
						url="https://mesajid.com/projects/outlet/"
					/>
					<Project
						img={technologist}
						name="Technologist"
						url="https://mesajid.com/projects/technologist/"
					/>

				</div>

			</div>
		</section>
	)
}

export default Projects