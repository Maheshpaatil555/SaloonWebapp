import React from 'react';
import Hero from '../components/Hero';

function Gallery() {
  const images = Array.from({ length: 6 }, (_, i) => `/assist/gallery/img${i + 1}.jpg`);

  return (
    <div className='md:mx-3'>
      <Hero title="Gallery" />
      <div className="p-6 grid grid-cols-2 mt-5 mb-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-64 md:h-96 overflow-hidden rounded-xl cursor-pointer transform transition duration-300 hover:scale-105"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transition duration-300 hover:brightness-75"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
