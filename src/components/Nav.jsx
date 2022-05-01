import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { VscColorMode } from 'react-icons/vsc'
import useDarkMode from '../hooks/useDarkMode'

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
                    <li className="text-secondary group relative">Biography<span className="w-1.5 h-1.5 bg-secondary rounded-full absolute top-0.5 -right-2"></span></li>
                    <li className="group relative">Projects</li>
                    <li className="group relative">Skills</li>
                    <li className="group relative">Expertise</li>
                    <li className="group relative">Get In Touch</li>
                </ul>
            </nav>

            {/* Hamberger Icon */}
            <div className="md:hidden relative z-30" onClick={navHandler}>
                { ! nav ? <RiMenu3Line size={24} /> : <RiCloseLine size={24} className="text-white absolute top-0" /> }
            </div>

            {/* Mobile menu */}
            <nav className={ nav ? 'w-full h-screen text-2xl bg-black text-white grid place-content-center md:hidden text-center fixed inset-0 z-20 transition-all' : 'w-full h-screen text-2xl bg-black text-white grid place-content-center md:hidden text-center fixed top-0 left-full z-20 transition-all' }>
                <ul className="grid gap-8">
                    <li>Biography</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Expertise</li>
                    <li>Get In Touch</li>
                </ul>
            </nav>

            <button onClick={ () => { setMode(colorTheme) } }>
                <VscColorMode size={24} className="dark:text-white" />
            </button>
        </div>
    )
}

export default Nav