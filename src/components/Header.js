import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Desktop Header (md and above) */}
            <div className='h-[85px] hidden md:flex px-4 justify-between 
                            fixed top-0 w-full bg-opacity-80 bg-[#f8f2f2] z-[999] shadow-md'>

                <img className='ps-8' src='./assist/Logos.png' alt='logo' />

                <div className='flex text-black cursor-pointer items-center gap-20 font-bold text-xl pr-10'>
                    <p>Home</p>
                    <div className="relative group">
                        <p>Pages</p>
                        <div className="absolute font-thin z-50 -left-3 mt-1 hidden group-hover:block 
                               bg-opacity-70 bg-blue-50 text-black shadow-lg rounded-lg w-48 py-2">
                            <NavLink to='/bookapoiment'>
                                <p className="px-2 py-2 text-lg hover:bg-gray-200 hover:ps-3 cursor-pointer transition-all duration-300">
                                    Book Appointment
                                </p>
                            </NavLink>
                            <NavLink to='/Gallery'>
                                <p className="px-2 py-2 text-lg hover:bg-gray-200 hover:ps-3 cursor-pointer transition-all duration-300">
                                    Gallery
                                </p>
                            </NavLink>
                              <NavLink to='/Review'>
                            <p className="px-2 py-2 text-lg hover:bg-gray-200 hover:ps-3 cursor-pointer transition-all duration-300">
                                Review
                            </p>
                            </NavLink>
                        </div>
                    </div>
                    <NavLink to='/About'><p>About</p></NavLink>
                    <NavLink to='/contact'><p>Contact</p>  </NavLink>
                    <p>User</p>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="flex md:hidden h-[70px] px-4 justify-between items-center fixed top-0 w-full bg-[#f8f2f2] bg-opacity-80 z-[999] shadow-md">
                <img className="h-10" src="./assist/Logos.png" alt="logo" />
                <button onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu with transition and bg black */}
            <div
                className={`md:hidden fixed top-[70px] left-0 w-full h-screen bg-black bg-opacity-75 z-50 transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="flex flex-col pt-6 text-white">
                    <NavLink onClick={toggleMobileMenu} to="/" className="px-4 py-3 hover:bg-gray-800 transition">Home</NavLink>
                    <NavLink onClick={toggleMobileMenu} to="/bookapoiment" className="px-4 py-3 hover:bg-gray-800 transition">Book Appointment</NavLink>
                    <NavLink onClick={toggleMobileMenu} to="/Gallery" className="px-4 py-3 hover:bg-gray-800 transition">Gallery</NavLink>
                      <NavLink onClick={toggleMobileMenu} to='/Review' ><p className="px-4 py-3 hover:bg-gray-800 cursor-pointer transition">Review</p></NavLink>
                    <NavLink onClick={toggleMobileMenu} to="/About" className="px-4 py-3 hover:bg-gray-800 transition">About</NavLink>
                    <NavLink onClick={toggleMobileMenu} to="/contact" className="px-4 py-3 hover:bg-gray-800 transition">Contact</NavLink>
                    <p className="px-4 py-3 hover:bg-gray-800 cursor-pointer transition">User</p>
                </div>
            </div>
        </>
    );
}

export default Header;
