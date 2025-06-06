import Heading from "../Heading";
import Experience from "./Experience";

function Expertise() {
	return (
		<section id="expertise" className="py-20">
			<div className="container">
				<Heading subheading="Expertise" heading="Experience" />

				<Experience
					year="2021 - 2024"
					job="Full Stack WordPress Developer"
					desc="I worked at Smartworking Solutions, where I designed and developed WordPress themes from scratch. I also enhanced and customized existing site features while managing testing and maintenance for our website portfolio."
					company="Smartworking Solutions"
				/>
				<Experience
					year="2017 - 2021"
					job="Full Stack WordPress Developer"
					desc="I had a significant tenure at MyThemeShop, where I held the role of crafting custom themes known for their speed, SEO optimization, and strict adherence to WordPress Coding Standards. My workflow involved transforming design concepts from Photoshop, XD, or Figma into fully functional WordPress themes."
					company="MyThemeShop"
				/>
				<Experience
					year="2015 - 2017"
					job="WordPress Developer"
					desc="My role involved the creation of custom WordPress themes from the ground up, with a strong emphasis on design and development. Additionally, I conducted rigorous testing to ensure optimal browser compatibility and performance."
					company="Shabd Media"
				/>
				<Experience
					year="2015 - 2017"
					job="Senior Software Engineer"
					desc="I was hired as Senior Software Engineer and my role was to design and develop WordPress Themes or customise the pre-build Theme for Client. Custom and new widget, functionality, troubleshooting and debugging
					for clients was also part of my job."
					company="SDLC Lab"
				/>
				<Experience
					year="2009 - 2014"
					job="Freelance"
					desc="Worked as freelance and learned new Technology as PHP, WordPress, HTML/CSS, Photoshop, JS/JQuery/Ajax."
					last="true"
				/>
			</div>
		</section>
	);
}

export default Expertise;
