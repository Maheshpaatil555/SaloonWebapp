import React from "react";
import Hero from "../components/Hero";
import { NavLink } from "react-router-dom";

const reviews = [
  { id: 1, name: "Hetal Raval", img: "/assist/Review/unnamed.png", message: "This salon was so beautiful✨. I like this salon do much. Thank you so much for my mom's beautiful hair cut ✂ she is so happy after cutting her hair ", date: "Nov 25, 2025" },
  { id: 2, name: "Manish Chawla", img: "/assist/Review/unnamed2.png", message: "A nice place you should visit for either a simple a hair cut or for any hair treatment. The prices are reasonable and the staff is cooperative.", date: "3 years ago" },
  { id: 3, name: "Harsh", img: "/assist/Review/unnamed3.png", message: "Its really good parlour for haircut, all hairstylist are good in their own i don't have to wait for long time.", date: "4 year ago" },
  { id: 4, name: "Sarang B", img: "/assist/Review/unnamed1.png", message: "Had a great haircut and beard trim there today. Guys were nice. Didn’t have to wait long.  I would go back.", date: "2 year ago" },
  { id: 5, name: "Shalini Bhole",img: "/assist/Review/unnamed4.png", message: "Very nice  place  and  treated   very well person  gets beauty  treatment  at  reasonable price", date: "4 year ago" },
];

const Star = () => <span className="text-yellow-400">★</span>;

function Review() {
  return (
    <div className="container mx-auto">
      <Hero title='Review'/>
      <div className="grid md:px-60 px-3 mb-20 mt-20 grid-cols-1 md:grid-cols-1 gap-8">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`
              p-6 border border-gray-200 rounded-2xl shadow-lg bg-white 
              transform transition duration-300 hover:scale-105 hover:shadow-2xl
              ${index % 2 === 0 ? "md:mr-32" : "md:ml-32"}
            `}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-10 md:w-16 h-10  md:h-16 rounded-full border-2 border-gray-200"
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => <Star key={i} />)}
              </div>
            </div>
            <p className="text-gray-700 text-xs md:text-lg leading-relaxed">{review.message}</p>
          </div>
        ))}
        <div className="flex justify-center mt-5">
            <NavLink to='https://www.google.com/maps/place/Kala+Hair+Art+%26+Ladies+Beauty+Parlour/@22.2947364,73.2004387,643m/data=!3m1!1e3!4m6!3m5!1s0x395fc8acd8cf46b9:0x6f189f0812c93ec!8m2!3d22.2945775!4d73.2034437!16s%2Fg%2F1w663tc3!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D'>
          <button className="text-black border border-gray-400 px-16 py-2 rounded transition duration-300 hover:bg-[#5f433e] hover:text-white">
            View More
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Review;
