import Heading from '../Heading'
import Project from './Project'
import cof from '../../assets/cof.jpg'
import sws from '../../assets/sws.jpg'
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
						img={cof}
						name="Chic on Fire"
						url="https://chiconfire.com/"
						skills={['HTML5', 'CSS3', 'Tailwind', 'WordPress', 'WooCommerce', 'ACF', 'Figma', 'JQuery', 'NPM', 'WPCS']}
						desc='Chic on Fire is a clean and modern design which was created for clients. The design was created using Figma and then developed using Tailwind/WordPress from scratch. The code is very optimized and SEO-friendly.'
					/>
					<Project
						img={sws}
						name="Smartworking Solutions"
						url="https://smartworking-solutions.com/"
						skills={['HTML5', 'CSS3', 'Tailwind', 'WordPress', 'ACF', 'Figma', 'JQuery', 'NPM', 'WPCS']}
						desc='The main site of SWS Smartworking pvt ltd, which is clean, minimal, optimized, SEO-friendly and lightning fast. The design was created using Figma and then developed using Tailwind/WordPress from scratch. The requirements were to re-develop, optimize and increase speed.'
					/>
					<Project
						img={cardway}
						name="Cardway"
						url="https://netbiz:newsite@s1.cardway.netbizpreview.co.uk/"
						skills={['HTML5', 'CSS3', 'Tailwind', 'WordPress', 'WooCommerce', 'ACF', 'Figma', 'JQuery', 'NPM', 'WPCS']}
						desc='The design was created using Figma and then developed using Tailwind/WordPress from scratch.'
					/>
					<Project
						img={dda}
						name="Direct Data Analysis"
						url="https://netbiz:newsite@s1.directdataanalysis.netbizpreview.co.uk/"
						skills={['HTML5', 'CSS3', 'Tailwind', 'WordPress', 'ACF', 'Figma', 'JQuery', 'NPM', 'WPCS']}
						desc='The design was created using Figma and then developed using Tailwind/WordPress from scratch.'
					/>
					<Project
						img={lawtech}
						name="LawTech"
						url="https://netbiz:newsite@s1.lawtech.netbizpreview.co.uk/"
						skills={['HTML5', 'CSS3', 'SASS', 'WordPress', 'ACF', 'Photoshop', 'JQuery', 'NPM', 'WPCS']}
						desc='The design was created using Photoshop and then developed using HTML/CSS/WordPress from scratch.'
					/>
					<Project
						img={hgash}
						name="HG Ash"
						url="https://www.hgash.co.uk/"
						skills={['HTML5', 'CSS3', 'WordPress', 'ACF', 'JQuery', 'NPM', 'WPCS']}
						desc='The HTML templated was already given by client, so I developed it using WordPress with some modifications in HTML/CSS.'
					/>
					<Project
						img={netbiz}
						name="Netbiz CMS"
						url="https://netbiz:newsite@s1.newcms.netbizpreview.co.uk"
						skills={['HTML5', 'CSS3', 'Tailwind', 'WordPress', 'WooCommerce', 'ACF', 'Adobe XD', 'JQuery', 'NPM', 'WPCS']}
						desc="This is highly customized CMS theme, which can be used to create multiple demo's. The design was created in Adobe XD and then developed using Tailwind/WordPress from scratch."
					/>
					<Project
						img={rms}
						name="RMS"
						url="https://rms-ltd.com/"
						skills={['HTML5', 'CSS3', 'Tailwind', 'WordPress', 'ACF', 'Figma', 'JQuery', 'NPM', 'WPCS']}
						desc='The design was created using Figma and then developed using Tailwind/WordPress from scratch.'
					/>
					<Project
						img={kavanagh}
						name="Kavanagh"
						url="https://mesajid.com/projects/kavanagh/"
						skills={['HTML5', 'CSS3', 'Tailwind', 'WordPress', 'ACF', 'Figma', 'JQuery', 'NPM', 'WPCS']}
						desc='The design was created using Figma and then developed using Tailwind/WordPress from scratch.'
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