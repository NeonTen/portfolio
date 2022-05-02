import React from 'react'
import Sajid from '../assets/sajid.png'
import Pattern1 from '../assets/pattern-1.png'
import Pattern2 from '../assets/pattern-2.png'
import CV from '../assets/Sajid-Khan-CV.pdf'
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn
} from 'react-icons/fa'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import { IoIosArrowDropdown } from 'react-icons/io'

function Me() {
    return (
        <section className="mb-20">
            <div className="container">

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-x-48 items-center">
                    {/* Left */}
                    <div className="grid">
                        <div className="text-4xl lg:text-5xl inline-flex flex-col">
                            <h2 className="font-bold mb-3">Hello !</h2>
                            <h1 className="w-max relative after:content-[''] after:h-7 after:bg-primary/15 after:absolute after:-bottom-1.5 after:-left-2 after:-right-2 after:-z-10 dark:after:bg-white/15">I'm <strong>Sajid Khan</strong></h1>
                        </div>
                        <p className="font-bold uppercase mt-10">Full Stack WordPress Developer</p>
                        <p className="mt-4 leading-relaxed opacity-80">
                            Nunc condimentum lectus vitae lacus vehicula, ac iaculis arcu semper. Aliquam consequat lacus sapien. Cras rhoncus sapien nec hendrerit efficitur. Nunc a mi orci. Nulla cursus mi ut maximus congue. Sed ac elementum velit. Nulla sit amet vehicula nibh, ut rutrum neque. Morbi egestas mi ut fermentum tempus.
                        </p>
                        <p className="font-bold uppercase mt-10">Follow me on</p>
                        <ul className="mt-6 space-y-3 text-sm opacity-80">
                            <li>
                                <a className="flex items-center space-x-3 hover:text-secondary" href="https://www.facebook.com/sajid.khan.39108" target="_blank" rel="noreferrer">
                                    <FaFacebookF size={20} /><span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center space-x-3 hover:text-secondary" href="https://www.facebook.com/sajid.khan.39108" target="_blank" rel="noreferrer">
                                    <FaTwitter size={20} /><span>Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center space-x-3 hover:text-secondary" href="https://www.linkedin.com/in/sajid-khan-93687246/" target="_blank" rel="noreferrer">
                                    <FaLinkedinIn size={20} /><span>LinkedIn</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right */}
                    <div className="w-full relative order-first lg:order-none">
                        <img className='w-full h-full object-cover' src={Sajid} alt="Sajid Khan" />
                        <img className='hidden lg:block absolute top-14 -left-[60px]' src={Pattern1} alt=""/>
                        <img className='hidden lg:block absolute bottom-44 -right-9' src={Pattern2} alt=""/>

                        <div className="flex md:space-x-8 mt-10 lg:mt-0 lg:absolute bottom-12 -left-64">
                            <a href="#biography" className="hidden md:flex items-center space-x-2 text-sm uppercase opacity-80 hover:text-secondary hover:opacity-100"><IoIosArrowDropdown size={24} /> <span>Explore me</span></a>
                            <a href={CV} className="button w-48 justify-between" download>Download CV <HiOutlineFolderDownload size={24} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Me