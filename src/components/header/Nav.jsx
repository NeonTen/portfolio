import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { VscColorMode } from 'react-icons/vsc'
import useDarkMode from '../../hooks/useDarkMode'
import { Link } from 'react-scroll'

function Nav() {

    const [setMode, colorTheme] = useDarkMode()
    const [nav, setNav] = useState(false)

    const navHandler = () => {
        setNav(!nav)
    }

    return (
        <div className="flex space-x-8">
            {/* Main Nav */}
            <nav className="hidden md:block">
                <ul className="flex space-x-8 lg:space-x-10 uppercase">
                    <li className="group relative cursor-pointer">
                        <Link activeClass="active" to="biography" smooth={true} spy={true} offset={-100}>Biography</Link>
                    </li>
                    <li className="group relative cursor-pointer">
                        <Link activeClass="active" to="projects" smooth={true} spy={true} offset={-100}>Projects</Link>
                    </li>
                    <li className="group relative cursor-pointer">
                        <Link activeClass="active" to="skills" smooth={true} spy={true} offset={-100}>Skills</Link>
                    </li>
                    <li className="group relative cursor-pointer">
                        <Link activeClass="active" to="expertise" smooth={true} spy={true} offset={-100}>Expertise</Link>
                    </li>
                    <li className="group relative cursor-pointer">
                        <Link activeClass="active" to="contact" smooth={true} spy={true} offset={-100}>Get In Touch</Link>
                    </li>
                </ul>
            </nav>

            {/* Hamberger Icon */}
            <div className="md:hidden relative z-30" onClick={navHandler}>
                { ! nav ? <RiMenu3Line size={24} /> : <RiCloseLine size={24} className="text-white absolute top-0" /> }
            </div>

            {/* Mobile menu */}
            <nav className={ nav ? 'w-full h-screen text-2xl bg-black text-white grid place-content-center md:hidden text-center fixed inset-0 z-20 transition-all' : 'w-full h-screen text-2xl bg-black text-white grid place-content-center md:hidden text-center fixed top-0 left-full z-20 transition-all' }>
                <ul className="grid gap-8">
                    <li>
                        <Link to="biography" smooth={true} spy={true} offset={-100} onClick={navHandler}>Biography</Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} spy={true} offset={-100} onClick={navHandler}>Projects</Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} spy={true} offset={-100} onClick={navHandler}>Skills</Link>
                    </li>
                    <li>
                        <Link to="expertise" smooth={true} spy={true} offset={-100} onClick={navHandler}>Expertise</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} spy={true} offset={-100} onClick={navHandler}>Get In Touch</Link>
                    </li>
                </ul>
            </nav>

            <button onClick={ () => { setMode(colorTheme) } }>
                <VscColorMode size={24} className="dark:text-white" />
            </button>
        </div>
    )
}

export default Nav