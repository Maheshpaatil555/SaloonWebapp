import React from 'react'
import Hero from './Hero'

function Ourservies() {
  return (
    <div className="mb-8">
        <Hero title="ABOUT" bgImage="/assist/banner.jpg" />
         <div className="w-full px-3 md:px-0 min-h-screen flex justify-center items-center">
           <div className="w-full mt-8 md:rounded-se-[200px] mb-10 xl:w-3/4 lg:w-11/12 flex flex-col-reverse md:flex-row shadow-lg">
   
             <div className="w-full bg-[#f8f2f2] md:w-7/12 p-10">
               <span className="relative text-[#5f433e] underline underline-offset-8  font-bold text-4xl">About Us
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
               <div className="mt-1 text-gray-700 leading-relaxed text-lg">
                 <div className="text-xl pt-8 line-through decoration-[1px]  font-bold">WELCOME TO OUR WEBSITE!</div>
                 <p className=" mt-4 text-[#895e58]">
                   We are dedicated to providing the best service possible. Our team works tirelessly to ensure that our
                   clients have the best experience and receive top-quality results. We believe in innovation, creativity,
                   and excellence in every project we undertake. Thank you for visiting and learning more about us.
                   Welcome to our website! We are dedicated to providing the best service possible. Our team works tirelessly
                   to ensure that our clients have the best experience and receive top-quality results. We believe in innovation,
                   creativity, and excellence in every project we undertake. Thank you for visiting and learning more about us.
                 </p>
               </div>
   
             </div>
   
             {/* Image Section */}
            <div
     className="w-full md:rounded-se-[200px] rounded-ss-[100px] rounded-se-[100px] 
                md:rounded-ss-[0px] md:w-5/12 h-80 md:h-auto  bg-center md:bg-cover
       bg-cover bg-no-repeat"
     style={{
       backgroundImage: "url('/assist/gallery/img5.jpg')",
     }}
   ></div>
   
   
           </div>
         </div>
       </div>
  )
}

export default Ourservies