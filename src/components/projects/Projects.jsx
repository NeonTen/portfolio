import Heading from "../Heading";
import Project from "./Project";
import lm from "../../assets/lm.jpg";
import sws from "../../assets/sws.jpg";
import dda from "../../assets/dda.jpg";
import lawtech from "../../assets/lawtech.jpg";
import rms from "../../assets/rms.jpg";
import kavanagh from "../../assets/kavanagh.jpg";
import hgash from "../../assets/hgash.jpg";
import square from "../../assets/square.jpg";
import church from "../../assets/church.jpg";
import books from "../../assets/books.jpg";
import designer from "../../assets/designer.jpg";
import realEstate from "../../assets/real-estate.jpg";
import outlet from "../../assets/outlet.jpg";
import technologist from "../../assets/technologist.jpg";
import agency from "../../assets/agency.jpg";
import magnus from "../../assets/magnus.jpg";
import news from "../../assets/news.jpg";
import seekers from "../../assets/seekers.jpg";
import pt from "../../assets/PT.jpg";
import cc from "../../assets/CC.jpg";
import ntls from "../../assets/NLTS.jpg";

function Projects() {
	return (
		<section id="projects" className="py-20">
			<div className="container">
				<Heading subheading="Latest Works" heading="My Projects" />

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<Project
						img={ntls}
						name="NewLinksTraining"
						url="https://www.newlinkstraining.com/"
						skills={[
							"HTML5",
							"CSS3",
							"Tailwind",
							"WordPress",
							"WooCommerce",
							"ACF",
							"Guterberg",
							"Figma",
							"JQuery",
							"AlpineJS",
							"AJAX",
							"NPM",
							"WPCS",
							"SEO",
						]}
						desc="Redesigned NewLinksTraining’s website in Figma and fully redeveloped it in WordPress, transforming an outdated design into a clean, modern, and faster experience with improved usability and performance."
					/>
					<Project
						img={cc}
						name="ConnollyCove"
						url="https://www.connollycove.com/"
						skills={[
							"HTML5",
							"CSS3",
							"Tailwind",
							"WordPress",
							"ACF",
							"Guterberg",
							"Figma",
							"JQuery",
							"AlpineJS",
							"AJAX",
							"NPM",
							"WPCS",
							"SEO",
						]}
						desc="Redesigned and redeveloped ConnollyCove’s website to enhance performance and SEO, ensuring faster load times and a seamless experience for content-rich travel pages."
					/>
					<Project
						img={pt}
						name="ProfileTree"
						url="https://profiletree.com/"
						skills={[
							"HTML5",
							"CSS3",
							"Tailwind",
							"WordPress",
							"ACF",
							"Figma",
							"JQuery",
							"AlpineJS",
							"AJAX",
							"NPM",
							"WPCS",
							"SEO",
						]}
						desc="Complete redevelopment of ProfileTree with a focus on speed, SEO, and scalability, resulting in faster load times and improved Core Web Vitals."
					/>
					<Project
						img={lm}
						name="LearningMole"
						url="https://learningmole.com/"
						skills={[
							"HTML5",
							"CSS3",
							"Tailwind",
							"WordPress",
							"WooCommerce",
							"LearnDash",
							"ACF",
							"Figma",
							"JQuery",
							"AlpineJS",
							"AJAX",
							"NPM",
							"WPCS",
							"SEO",
						]}
						desc="LearningMole's website has been completely revamped, boasting a stellar performance with a Google PageSpeed Insights score of 98+, ensuring it's SEO-ready and loads blazingly fast."
					/>
					<Project
						img={sws}
						name="Smartworking Solutions"
						url="https://smartworking-solutions.com/"
						skills={[
							"HTML5",
							"CSS3",
							"Tailwind",
							"WordPress",
							"ACF",
							"Figma",
							"JQuery",
							"NPM",
							"WPCS",
						]}
						desc="The main site of SWS Smartworking pvt ltd, which is clean, minimal, optimized, SEO-friendly and lightning fast. The design was created using Figma and then developed using Tailwind/WordPress from scratch. The requirements were to re-develop, optimize and increase speed."
					/>
					<Project
						img={dda}
						name="Direct Data Analysis"
						url="https://netbiz:newsite@s1.directdataanalysis.netbizpreview.co.uk/"
						skills={[
							"HTML5",
							"CSS3",
							"Tailwind",
							"WordPress",
							"ACF",
							"Figma",
							"JQuery",
							"NPM",
							"WPCS",
						]}
						desc="The design was created using Figma and then developed using Tailwind/WordPress from scratch."
					/>
					<Project
						img={lawtech}
						name="LawTech"
						url="https://netbiz:newsite@s1.lawtech.netbizpreview.co.uk/"
						skills={[
							"HTML5",
							"CSS3",
							"SASS",
							"WordPress",
							"ACF",
							"Photoshop",
							"JQuery",
							"NPM",
							"WPCS",
						]}
						desc="The design was created using Photoshop and then developed using HTML/CSS/WordPress from scratch."
					/>
					<Project
						img={hgash}
						name="HG Ash"
						url="https://www.hgash.co.uk/"
						skills={[
							"HTML5",
							"CSS3",
							"WordPress",
							"ACF",
							"JQuery",
							"NPM",
							"WPCS",
						]}
						desc="The HTML templated was already given by client, so I developed it using WordPress with some modifications in HTML/CSS."
					/>
					<Project
						img={rms}
						name="RMS"
						url="https://rms-ltd.com/"
						skills={[
							"HTML5",
							"CSS3",
							"Tailwind",
							"WordPress",
							"ACF",
							"Figma",
							"JQuery",
							"NPM",
							"WPCS",
						]}
						desc="The design was created using Figma and then developed using Tailwind/WordPress from scratch."
					/>
					<Project
						img={kavanagh}
						name="Kavanagh"
						url="https://mesajid.com/projects/kavanagh/"
						skills={[
							"HTML5",
							"CSS3",
							"Tailwind",
							"WordPress",
							"ACF",
							"Figma",
							"JQuery",
							"NPM",
							"WPCS",
						]}
						desc="The design was created using Figma and then developed using Tailwind/WordPress from scratch."
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
	);
}

export default Projects;
