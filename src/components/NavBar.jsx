import { Link, NavLink } from "react-router-dom"
import { navLinks } from "../constants"
import { useState } from "react";
import { hamburger } from "../assets/icons"
// import { rankminded } from "../assets/images";

const NavBar = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <header className="bg-black px-8 h-16 flex justify-center items-center
        md:px-32 z-50 fixed top-0 left-0 w-full">
        <nav className="mx-auto flex items-center justify-between w-full px-4">
            <Link to="/" className="flex items-center">
                {/* <img src={rankminded} alt="rankminded" height={50} width={50} /> */}
                <h3 className="text-white font-bold text-2xl">
                    Rank
                    <span className="text-orange-600">Minded</span>
                </h3>
            </Link>

            <ul className="hidden md:flex space-x-6 text-xl font-bold text-white">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <NavLink to={item.href} 
                            className={({ isActive }) =>
                                `cursor-pointer transition-all pb-1 hover:text-orange-600 ${
                                  isActive ? 'text-orange-600 border-b-2 border-orange-600' : ''
                            }`}
                            onClick={() => {
                                setIsMenuOpen(false)
                                window.scrollTo(0, 0);
                            }}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div onClick={toggleMenu} className="xl:hidden block items-center focus:outline-none cursor-pointer">
                <img 
                    src={hamburger} 
                    alt="hamburger menu" 
                    width={30} height={30}
                    className="filter invert brightness-0 contrast-100 hover:invert hover:brightness-150
                    hover:hue-rotate-[330deg] hover:saturate-200" 
                />
            </div>

            <div className={`fixed top-0 right-0 w-2/3 h-full bg-black shadow-lg transition-transform ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-5xl text-white hover:text-orange-600">
                        &times;
                    </button>
                </div>
                <ul className={`absolute xl:hidden top-20 left-0 w-full bg-black flex flex-col
                    items-center gap-6 font-semibold text-lg transform transition-transform ${
                    isMenuOpen ? "opacity-100" : "opacity-0"}`}
                    style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                    {navLinks.map((item) => (
                        <li key={item.label} className="mr-10">
                            <NavLink to={item.href}
                                className={({ isActive }) =>
                                    `cursor-pointer text-white transition-all pb-1 hover:text-orange-600 ${
                                      isActive ? 'text-orange-600 border-b-2 border-orange-600' : ''
                                }`}
                                onClick={() => {
                                    setIsMenuOpen(false)
                                    window.scrollTo(0, 0);
                                }}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBar
