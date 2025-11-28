import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full rounded-se-2xl">

            <div className="max-w-7xl rounded-ss-[70px] rounded-se-[70px] bg-[#f8f2f2] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 gap-10 px-14 py-6">

                {/* Logo & Description */}
                <div>
                    <div>
                        <img src="./assist/Logos.png" alt="logo" className="h-20 mb-2" />
                    </div>
                    <p className="text-[#895e58] text-base  font-semibold font-desc  leading-relaxed">
                        <b> The Kala Beauty Studio</b> is your one-stop destination for premium beauty
                        and grooming services. We believe every person deserves to look and feel
                        their best, which is why our skilled professionals bring creativity, care,
                        and expertise to every service.
                    </p>
                </div>

                {/* Quicklinks & Social Platform */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-head text-[#5f433e] mb-2">Quicklinks</h2>
                    <div className="w-12 h-[2px] bg-[#6f5450] mb-4"></div>

                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                        <Link to="/services" className="nav-link">Services</Link>
                        <Link to="/gallery" className="nav-link">Gallery</Link>
                        <Link to="/gallery" className="nav-link">Gallery</Link>
                    </div>

                    <h2 className="text-2xl md:text-3xl mt-10 font-head text-[#5f433e] mb-2">Social Platform</h2>
                    <div className="w-12 h-[2px] bg-[#6f5450] mb-4"></div>

                    <div className="flex gap-4 mt-2">
                          <a 
                            href="https://www.instagram.com/YourProfile" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#5f433e] text-2xl hover:text-[#c13584] transition-colors"
                        >
                            <FaInstagram />
                        </a>
                        <a 

                            href="https://www.facebook.com/YourPage" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#5f433e] text-2xl hover:text-[#2d4373] transition-colors"
                        >
                            <FaFacebookSquare />
                        </a>
                      
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl md:text-3xl font-head text-[#5f433e] mb-2">Contacts</h2>
                    <div className="w-12 h-[2px] bg-[#6f5450] mb-4"></div>

                    <p className="text-2xl text-[#6f5450] mt-2 font-semibold"><FaWhatsapp /></p>
                    <p className="mb-4 mt-1 nav-link">+91 7069999594</p>

                    <p className="text-2xl text-[#6f5450] font-semibold"><MdOutlineEmail /></p>
                    <p className="mb-4 mt-1 nav-link">kalabeautystudio@gmail.com</p>

                    <p className="text-2xl text-[#6f5450] font-semibold"><MdOutlineLocationOn /></p>
                    <p className="nav-link mt-1">
                        12, Jay Complex, Anand Mahal Rd, near Shree Ram Petrol Pump,
                        Vadodara, Gujarat
                    </p>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="text-center bg-[#f8f2f2] text-gray-700 py-4 md:text-sm text-xs">
                Copyright © 2025 | Kala Beauty Studio. All Rights Reserved.
            </div>
        </footer>
    );
}
