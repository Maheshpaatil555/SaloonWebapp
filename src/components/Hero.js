function Hero({ title, bgImage }) {
  return (
    <div
      className="relative text-center md:mt-32 mb-10 mt-28 text-white py-20 md:py-20 font-bold text-xl md:text-4xl"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          filter: 'blur(8px)',
          // optionally dim it a bit:
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
