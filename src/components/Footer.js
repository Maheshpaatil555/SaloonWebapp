import { FaInstagram, FaYoutube } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className=" w-full rounded-se-2xl">

            {/* <div className="bg-[#382d21] text-white py-3">
                <div className="flex justify-center items-center gap-10 text-lg sm:text-xl">

                    <div className="flex justify-center rounded-full bg-green-100 md:bg-[#382d21] p-2 items-center gap-2 cursor-pointer">
                        <RiFacebookFill className="text-blue-500" />
                        <span className="hidden md:block">Facebook</span>
                    </div>

                    <div className="flex rounded-full bg-green-100 md:bg-[#382d21] p-2 items-center gap-2 cursor-pointer">
                        <FaInstagram className="text-yellow-600" />
                        <span className="hidden md:block">Instagram</span>
                    </div>

                    <div className="flex rounded-full bg-green-100 md:bg-[#382d21] p-2 items-center gap-2 cursor-pointer">
                        <FaYoutube className="text-red-500" />
                        <span className="hidden md:block">YouTube</span>
                    </div>

                </div>
            </div> */}

            <div className="max-w-7xl rounded-ss-[70px] rounded-se-[70px] bg-[#f8f2f2] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-10 py-6">

                <div>
                    <img src="./assist/Logos.png" alt="logo" className="h-20 mb-2" />
                    <p className="text-[#895e58] font-thin text-sm sm:text-base leading-relaxed">
                        <b>Kala Beauty Studio</b> is your one-stop destination for premium beauty
                        and grooming services. We believe every person deserves to look and feel
                        their best, which is why our skilled professionals bring creativity, care,
                        and expertise to every service. From hair styling and skincare to makeup,
                        spa treatments, and bridal makeovers, we transform your everyday moments
                        into extraordinary beauty experiences. With a commitment to quality,
                        hygiene, and personalized attention,
                    </p>
                </div>

                {/* Map Section */}
                <div>
                    <h2 className="text-2xl font-bold text-[#5f433e] mb-2">Location</h2>
                    <div className="w-12 h-[2px] bg-[#6f5450] mb-4"></div>

                    <div className="w-full md:mt-6 h-52 md:h-full">
                        <iframe
                            title="Kala Beauty Studio Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.887064695274!2d73.1681370752072!3d22.300572285193227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f4d8e93338f9d%3A0xc2f5ed6c49ecb799!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1701068240000!5m2!1sen!2sin"
                            width="100%" 
                            style={{ border: 0 }}
                            allowFullScreen=""
                            className="shadow-2xl h-[100%] md:h-[60%]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#5f433e] mb-2">Contacts</h2>
                    <div className="w-12 h-[2px] bg-[#6f5450] mb-4"></div>

                    <p className="text-2xl text-[#6f5450] mt-2 font-semibold"><FaWhatsapp /></p>
                    <p className="mb-4 text-[#895e58] font-thin">+91 7069999594</p>

                    <p className="text-2xl text-[#6f5450] font-semibold"><MdOutlineEmail /></p>
                    <p className="mb-4 text-[#895e58] font-thin">kalabeautystudio@gmail.com</p>

                    <p className="text-2xl text-[#6f5450] font-semibold"><MdOutlineLocationOn /></p>
                    <p className="text-[#895e58] font-thin leading-relaxed">
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
