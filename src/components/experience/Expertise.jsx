import Heading from "../Heading"
import Experience from "./Experience"

function Expertise() {
    return (
        <section id="expertise" className="py-20">
			<div className="container">

				<Heading
					subheading="Expertise"
					heading="Experience"
				/>

				<Experience
					year="2021 - Present"
					job="Freelance"
					desc="Working on some Freelance projects and contract based job including WordPress and UI/UX development. Also learning new technologies to increase my skills."
				/>
				<Experience
					year="2017 - 2021"
					job="Full Stack WordPress Developer"
					desc="My recent job was in MyThemeShop, and my role is to design and develop custom Themes which is fast, SEO optimized and follows WordPress Coding Standards. I have to create a design in Photoshop/XD/Figma then convert
					into WordPress."
					company="MyThemeShop"
					siteLink="https://mythemeshop.com/"
					siteName="Website"
				/>
				<Experience
					year="2015 - 2017"
					job="WordPress Developer"
					desc="I was hired to design and develop custom WordPress Themes from scratch. Testing and browser compatibility was also part of my job."
					company="Shabd Media"
				/>
				<Experience
					year="2015 - 2017"
					job="Senior Software Engineer"
					desc="I was hired as Senior Software Engineer and my role was to design and develop WordPress Themes or customise the pre-build Theme for Client. Custom and new widget, functionality, troubleshooting and debugging
					for clients was also part of my job."
					company="SDLC Lab"
					siteLink="http://www.sdlclabs.com/"
					siteName="Website"
				/>
				<Experience
					year="2009 - 2014"
					job="Freelance"
					desc="Worked as freelance and learned new Technology as PHP, WordPress, HTML/CSS, Photoshop, JS/JQuery/Ajax."
					last="true"
				/>
            </div>
        </section>
    )
}

export default Expertise