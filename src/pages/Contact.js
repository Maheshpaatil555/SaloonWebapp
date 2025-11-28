import React, { useState } from "react";
import Hero from "../components/Hero";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // remove error on typing
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Phone number is invalid";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      // reset form
      setFormData({ name: "", phone: "", email: "", message: "" });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="mb-2">
      <Hero title={"CONTACT"} bgImage="/assist/baan.jpg" />

      <div className="w-full px-6 md:px-0 min-h-screen flex justify-center items-center">
        <div className="w-full mt-8 rounded-ss-[100px] rounded-se-[100px] md:rounded-ss-[200px] mb-10 xl:w-3/4 lg:w-11/12 flex flex-col md:flex-row shadow-lg">

          <div
            className="w-full rounded-ss-[100px] rounded-se-[100px] md:rounded-ss-[200px] md:rounded-se-[0px] md:w-5/12 h-80 md:h-auto bg-center md:bg-cover
    bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url('/assist/gallery/img5.jpg')",
            }}
          ></div>

          <div className="w-full bg-[#f8f2f2] md:w-7/12 p-10">
            <span className="relative text-[#5f433e] underline underline-offset-8 font-head text-4xl">Your Message
              <div className="absolute  -right-8 -top-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="30"
                  height="30"
                  className="animate-slow-rotate"
                >
                  <defs>
                    <linearGradient id="starGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FF7C57" />
                      <stop offset="50%" stopColor="#9B5DE5" />
                      <stop offset="100%" stopColor="#3A86FF" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M256 0
                   C256 100 100 256 0 256
                   C100 256 256 412 256 512
                   C256 412 412 256 512 256
                   C412 256 256 100 256 0Z"
                    fill="url(#starGradient)"
                  />
                </svg>
              </div>
            </span>

            <form className="pt-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-4 mt-4">
                <label className="block mb-2 text-sm font-bold text-[#895e58]">
                  Name
                </label>
                <input
                  className={`w-full text-gray-500 px-3 py-2 border rounded shadow ${errors.name ? "border-red-500" : ""
                    }`}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500  mt-1 text-sm">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-[#895e58]">
                  Phone Number
                </label>
                <input
                  className={`w-full text-gray-500 px-3 py-2 border rounded shadow ${errors.phone ? "border-red-500" : ""
                    }`}
                  type="text"
                  name="phone"
                  placeholder="Your Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500 mt-1 text-sm">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-[#895e58]">
                  Email
                </label>
                <input
                  className={`w-full text-gray-500 px-3 py-2 border rounded shadow ${errors.email ? "border-red-500" : ""
                    }`}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email}</p>}
              </div>

              {/* Message */}
              <div className="mb-4">
                <label className="block  mb-2 text-sm font-bold text-[#895e58]">
                  Message
                </label>
                <textarea
                  className={`w-full text-gray-500  px-3 py-2 border rounded shadow ${errors.message ? "border-red-500" : ""
                    }`}
                  rows="4"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <div className="text-center pt-6">
                <button className="text-black border border-gray-400 px-16 py-2 rounded transition duration-300 hover:bg-[#5f433e] hover:text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
