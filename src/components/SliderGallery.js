import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Dummy Movies
const demoMovies = [
  { id: 1, title: "Jawan", poster_path: "./assist/gallery/img1.jpg" },
  { id: 2, title: "KGF 2", poster_path: "./assist/gallery/img2.jpg"},
  { id: 3, title: "Pushpa", poster_path: "./assist/gallery/img3.jpg" },
  { id: 4, title: "Salaar", poster_path: "./assist/gallery/img4.jpg" },
  { id: 5, title: "Animal", poster_path: "./assist/gallery/img5.jpg"},
   { id: 5, title: "Animal", poster_path: "./assist/gallery/img6.jpg" },
];

function SliderGallery() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);



  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className=" text-white relative">
      <div className="flex justify-between md:p-8 md:pb-3 md:ps-0 md:pr-0 p-4 pr-5 py-6 pb-1 items-center" >
         <h2 className="text-xl md:text-4xl font-head text-[#5f433e] ">
        GALLERY
      </h2>
    <NavLink to='./Gallery'><p className="text-slate-950 text-base md:text-lg font-desc">view more</p></NavLink>

      </div>
     

      <div className="relative mx-3 md:mx-0">

        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={setSwiperInstance}
          autoplay={{ delay: 2500 }}
          loop={true}
          spaceBetween={20}
          className="!overflow-hidden"
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {demoMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="group relative py-5 rounded-2xl cursor-pointer hover:scale-105 duration-300">

                <img
                  src={movie.poster_path}
                  className="w-full h-40 md:h-80 rounded-2xl object-cover group-hover:grayscale duration-300"
                />

                {/* <div className="absolute bottom-5 inset-0 flex items-end p-3 bg-gradient-to-t from-black/80">
                  <h3 className="text-lg font-normal text-center w-full group-hover:text-yellow-400">
                    {movie.title}
                  </h3>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div
          ref={prevRef}
          className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-3  w-10 h-10 
          bg-black/50 rounded-full cursor-pointer hover:bg-black z-50"
        >
          <FaArrowLeft />
        </div>

        <div
          ref={nextRef}
          className="hidden md:flex items-center justify-center absolute top-1/2 right-3 -translate-y-1/2  w-10 h-10 
          bg-black/50 rounded-full cursor-pointer hover:bg-black z-50"
        >
          <FaArrowRight />
        </div>

      </div>
    </div>
  );
}

export default SliderGallery;
