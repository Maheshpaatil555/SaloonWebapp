import React, { useState } from 'react';
import Hero from '../components/Hero';

function Gallery() {
  const images = Array.from({ length: 16 }, (_, i) => `/assist/gallery/img${i + 1}.jpg`);

  return (
    <div className=''>
      <Hero title="Gallery" bgImage="/assist/pu.jpg" />
      <div className="p-6 grid grid-cols-2 md:mx-3 mt-5 mb-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {images.map((src, index) => (
          <ImageWithSkeleton key={index} src={src} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

// Component for each image with skeleton loader
function ImageWithSkeleton({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-64 md:h-96 overflow-hidden rounded-xl cursor-pointer">
      {/* Skeleton loader */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
      )}
      
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

export default Gallery;
