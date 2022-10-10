import React from 'react'
import Sajid from '../assets/sajid.png'
import Pattern1 from '../assets/pattern-1.png'
import Pattern2 from '../assets/pattern-2.png'
import CV from '../assets/Sajid-Khan-CV.pdf'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import { IoIosArrowDropdown } from 'react-icons/io'
import {
    RiLinkedinFill,
    RiWhatsappFill,
    RiTelegramFill
} from 'react-icons/ri'
import { Link } from 'react-scroll'

function Me() {
    return (
        <section id="me" className="md:mt-32 mb-20">
            <div className="container">

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-x-48 items-center">
                    {/* Left */}
                    <div className="grid">
                        <div className="text-4xl lg:text-5xl inline-flex flex-col">
                            <h2 className="font-bold mb-3">Hello !</h2>
                            <h1 className="w-max text-3xl lg:text-5xl mt-2 relative after:content-[''] after:h-5 lg:after:h-7 after:bg-primary/15 after:absolute after:-bottom-1.5 after:-left-2 after:-right-2 after:-z-10 dark:after:bg-white/15">I'm <strong className="text-secondary">Sajid Khan</strong></h1>
                        </div>
                        <p className="text-lg font-bold uppercase mt-14">Full Stack WordPress Developer</p>
                        <p className="mt-4 leading-relaxed opacity-80">
                            I've been a WordPress developer for 9+ years. I live and breathe WordPress.
                        </p>
                        <ul className="flex gap-6 mt-10 2xl:mt-14 text-sm opacity-80">
                            <li>
                                <a className="flex items-center space-x-2 hover:text-secondary" href="https://www.linkedin.com/in/sajid-khan-93687246/" target="_blank" rel="noreferrer">
                                    <RiLinkedinFill size={20} /><span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center space-x-2 hover:text-secondary" href="https://wa.me/+918010335015" target="_blank" rel="noreferrer">
                                    <RiWhatsappFill size={20} /><span>Whats app</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center space-x-2 hover:text-secondary" href="https://t.me/mrandrason" target="_blank" rel="noreferrer">
                                    <RiTelegramFill size={20} /><span>Telegram</span>
                                </a>
                            </li>
                        </ul>
                        <div className="flex md:space-x-8 mt-10 xl:hidden">
                            <Link to="biography" smooth={true} offset={-100} className="hidden md:flex items-center space-x-2 text-sm uppercase opacity-80 hover:text-secondary hover:opacity-100 cursor-pointer"><IoIosArrowDropdown size={24} className="animate-bounce" /> <span>Explore me</span></Link>
                            <a href={CV} className="button w-48 justify-between" download>Download CV <HiOutlineFolderDownload size={24} /></a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="w-full relative order-first lg:order-none">
                        <img className='w-full h-full object-cover' src={Sajid} alt="Sajid Khan" />
                        <img className='hidden lg:block absolute top-14 -left-[60px]' src={Pattern1} alt=""/>
                        <img className='hidden lg:block absolute bottom-44 -right-9' src={Pattern2} alt=""/>

                        <div className="hidden xl:flex md:space-x-8 absolute bottom-12 -left-64">
                            <Link to="biography" smooth={true} offset={-100} className="hidden md:flex items-center space-x-2 text-sm uppercase opacity-80 hover:text-secondary hover:opacity-100 cursor-pointer"><IoIosArrowDropdown size={24} className="animate-bounce" /> <span>Explore me</span></Link>
                            <a href={CV} className="button w-48 justify-between" download>Download CV <HiOutlineFolderDownload size={24} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Me