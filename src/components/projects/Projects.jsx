import Heading from '../Heading'
import Project from './Project'
import cardway from '../../assets/cardway.jpg'
import dda from '../../assets/dda.jpg'
import lawtech from '../../assets/lawtech.jpg'
import rms from '../../assets/rms.jpg'
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
						img={cardway}
						name="Cardway"
						url="https://netbiz:newsite@s1.cardway.netbizpreview.co.uk/"
					/>
					<Project
						img={dda}
						name="Direct Data Analysis"
						url="https://netbiz:newsite@s1.directdataanalysis.netbizpreview.co.uk/"
					/>
					<Project
						img={lawtech}
						name="LawTech"
						url="https://netbiz:newsite@s1.lawtech.netbizpreview.co.uk/"
					/>
					<Project
						img={hgash}
						name="HG Ash"
						url="https://www.hgash.co.uk/"
					/>
					<Project
						img={netbiz}
						name="Netbiz CMS"
						url="https://netbiz:newsite@s1.newcms.netbizpreview.co.uk"
					/>
					<Project
						img={rms}
						name="RMS"
						url="https://rms-ltd.com/"
					/>
					<Project
						img={kavanagh}
						name="Kavanagh"
						url="https://mesajid.com/projects/kavanagh/"
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