function Hero({ title, bgImage }) {
  return (
    <div
      className="relative text-center md:mt-32  mb-4 mt-28 text-white py-20 md:py-20 font-hero font-bold text-2xl md:text-4xl"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          // filter: 'blur(2px)',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      />
      <div className="relative">
        {title}
      </div>
    </div>
  );
}


export default Hero;
