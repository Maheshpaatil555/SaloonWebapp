import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import SliderGallery from "../components/SliderGallery";


const slides = [
  {
    title: "Welcome to Our Salon",
    description: "Experience luxury and style with our professional services.",
    image: "/assist/poster/saloon1.jpg",
  },
  {
    title: "Transform Your Hair",
    description: "We make your hair look amazing and healthy.",
    image: "/assist/poster/saloon.jpg",
  },
  {
    title: "Relax & Enjoy",
    description: "A perfect place to unwind while we pamper you.",
    image: "/assist/poster/saloon3.webp",
  },
];

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full p-3 md:p-0  mt-[70px] md:mt-24 bg-white md:px-10 relative" >
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-[40vh]  rounded-xl sm:h-[50vh] md:h-[100vh] lg:h-[calc(96vh-85px)]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full  relative bg-cover bg-center flex flex-col justify-center items-start px-6 md:px-20"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <h2
                className={`text-black
               mt-16
              text-xl sm:text-2xl  md:text-3xl lg:text-4xl xl:text-5xl 
              font-hero mb-1 md:mb-3 leading-snug 
              max-w-[90%] sm:max-w-[80%] md:max-w-[70%] 
              drop-shadow-2xl transition-opacity duration-700 
              ${activeIndex === index ? "opacity-100 animate-slideIn" : "opacity-0"}`}
              >
                {slide.title}
              </h2>

              <p
                className={`text-black
              text-xs font-desc font-bold sm:text-base  md:text-xl lg:text-2xl xl:text-3xl 
              max-w-[90%] sm:max-w-[80%] md:max-w-[70%] 
             drop-shadow-2xl transition-opacity duration-700 
              ${activeIndex === index ? "opacity-100 animate-slideIn delay-300" : "opacity-0"}`}
              >
                {slide.description}
              </p>

            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev-custom absolute bottom-6 md:bottom-10 
                right-16  sm:right-28 md:right-20 lg:right-40 
                bg-black bg-opacity-55 p-3 rounded-full z-10 
                text-white text-base md:text-2xl cursor-pointer hover:text-green-200 transition">
          <FaArrowLeft />
        </div>

        <div className="swiper-button-next-custom absolute bottom-6 md:bottom-10  
                right-4 sm:right-16 md:right-36 lg:right-24 
                bg-black bg-opacity-55 p-3 rounded-full z-10 
                text-white text-base sm:text-xl md:text-2xl cursor-pointer hover:text-green-200 transition">
          <FaArrowRight />
        </div>

      </Swiper>
      <SliderGallery />
    </div>
  );
}

export default Slider;
