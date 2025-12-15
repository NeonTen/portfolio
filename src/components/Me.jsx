import React, { useState } from "react";
import Sajid from "../assets/sajid.png";
import Pattern1 from "../assets/pattern-1.png";
import Pattern2 from "../assets/pattern-2.png";
import WPCV from "../assets/Sajid-WP-24.pdf";
import FullStackCV from "../assets/CV-React-2024.pdf";
// import UICV from "../assets/Sajid-Khan-UI-2023.pdf";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { IoIosArrowDropdown } from "react-icons/io";
import {
	RiGithubFill,
	RiLinkedinFill,
	RiWhatsappFill,
	RiTelegramFill,
} from "react-icons/ri";
import { Link } from "react-scroll";

function Me() {
	const [dropdown, setDropdown] = useState(false);

	const openDropdown = () => {
		setDropdown(!dropdown);
	};

	return (
		<section id="me" className="md:mt-32 mb-20">
			<div className="container">
				<div className="grid lg:grid-cols-2 gap-10 lg:gap-x-48 items-center">
					{/* Left */}
					<div className="grid">
						<div className="text-4xl lg:text-5xl inline-flex flex-col">
							<h2 className="font-bold mb-3">Hello !</h2>
							<h1 className="w-max text-3xl lg:text-5xl mt-2 relative after:content-[''] after:h-5 lg:after:h-7 after:bg-primary/15 after:absolute after:-bottom-1.5 after:-left-2 after:-right-2 after:-z-10 dark:after:bg-white/15">
								I'm <strong className="text-secondary">Sajid Khan</strong>
							</h1>
						</div>
						<p className="text-lg font-bold uppercase mt-14">
							Full Stack WordPress Developer
						</p>
						<p className="mt-4 leading-relaxed opacity-80">
						{/* With over 10 years of experience, I build fast, accessible, and user-friendly WordPress websites. I specialize in WooCommerce, SEO, website optimization, and debugging to ensure smooth performance and a great user experience.
						<br /><br />
						I stay updated with the latest technologies and trends, allowing me to deliver modern, effective, and high-quality digital solutions. */}
						
						WordPress Technical Project Manager with 10+ years of experience delivering high-quality, scalable websites. I work closely with clients, developers, designers, and QA teams to ensure smooth execution, clear communication, and on-time delivery. Strong hands-on experience with WordPress, WooCommerce, and modern project management tools.
						</p>
						<ul className="flex gap-4 mt-10 2xl:mt-14 text-sm opacity-80">
							<li>
								<a
									className="hover:text-secondary"
									href="https://github.com/smartworkingsolutions/"
									target="_blank"
									rel="noreferrer"
								>
									<RiGithubFill size={24} />
								</a>
							</li>
							<li>
								<a
									className="hover:text-secondary"
									href="https://www.linkedin.com/in/sajid-khan-93687246/"
									target="_blank"
									rel="noreferrer"
								>
									<RiLinkedinFill size={24} />
								</a>
							</li>
							<li>
								<a
									className="hover:text-secondary"
									href="https://wa.me/+918010335015"
									target="_blank"
									rel="noreferrer"
								>
									<RiWhatsappFill size={24} />
								</a>
							</li>
							<li>
								<a
									className="hover:text-secondary"
									href="https://t.me/mrandrason"
									target="_blank"
									rel="noreferrer"
								>
									<RiTelegramFill size={24} />
								</a>
							</li>
						</ul>
						<div className="flex md:space-x-8 mt-10 xl:hidden">
							<Link
								to="biography"
								smooth={true}
								offset={-100}
								className="hidden md:flex items-center space-x-2 text-sm uppercase opacity-80 hover:text-secondary hover:opacity-100 cursor-pointer"
							>
								<IoIosArrowDropdown size={24} className="animate-bounce" />{" "}
								<span>Explore me</span>
							</Link>
							<div className="relative">
								<button
									className="button w-[210px] justify-between"
									onClick={openDropdown}
								>
									Download CV <HiOutlineFolderDownload size={24} />
								</button>
								{dropdown && (
									<div className="w-full grid bg-white text-sm border border-border-color absolute left-0 ring-0 top-14 -mt-px">
										<a
											href={WPCV}
											className="text-sm text-dark/80 uppercase px-4 py-4 border-b border-border-color hover:bg-secondary hover:text-white"
											download
										>
											WordPress Developer
										</a>
										<a
											href={FullStackCV}
											className="text-sm text-dark/80 uppercase px-4 py-4 border-b border-border-color hover:bg-secondary hover:text-white"
											download
										>
											Full Stack Developer
										</a>
										{/* 
										<a
											href={UICV}
											className="text-sm text-dark/80 uppercase px-4 py-4 hover:bg-secondary hover:text-white"
											download
										>
											UI/UX developer
										</a> */}
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Right */}
					<div className="w-full relative order-first lg:order-none">
						<img
							className="w-full h-full object-cover"
							src={Sajid}
							alt="Sajid Khan"
						/>
						<img
							className="hidden lg:block absolute top-14 -left-[60px]"
							src={Pattern1}
							alt="background pattern 1"
						/>
						<img
							className="hidden lg:block absolute bottom-44 -right-9"
							src={Pattern2}
							alt="background pattern 2"
						/>

						<div className="hidden xl:flex md:space-x-8 absolute bottom-12 -left-64">
							<Link
								to="biography"
								smooth={true}
								offset={-100}
								className="hidden md:flex items-center space-x-2 text-sm uppercase opacity-80 hover:text-secondary hover:opacity-100 cursor-pointer"
							>
								<IoIosArrowDropdown size={24} className="animate-bounce" />{" "}
								<span>Explore me</span>
							</Link>
							<div className="relative">
								<button
									className="button w-[210px] justify-between"
									onClick={openDropdown}
								>
									Download CV <HiOutlineFolderDownload size={24} />
								</button>
								{dropdown && (
									<div className="w-full grid bg-white text-sm border border-border-color absolute left-0 ring-0 top-14 -mt-px">
										<a
											href={WPCV}
											className="text-sm text-dark/80 uppercase px-4 py-4 border-b border-border-color hover:bg-secondary hover:text-white"
											download
										>
											WordPress Developer
										</a>
										<a
											href={FullStackCV}
											className="text-sm text-dark/80 uppercase px-4 py-4 border-b border-border-color hover:bg-secondary hover:text-white"
											download
										>
											Full Stack Developer
										</a>
										{/* 
										<a
											href={UICV}
											className="text-sm text-dark/80 uppercase px-4 py-4 hover:bg-secondary hover:text-white"
											download
										>
											UI/UX developer
										</a> */}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Me;
