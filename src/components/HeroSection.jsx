import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gray-200 rounded-xl mx-2 px-[80px] pt-[50px] pb-[10px]  md:px-1 max-[500px] h-full  ">
      {/* Left side text */}
      <div className="flex flex-col max-w-lg md:mx-10 text-center md:text-left h-full pt-[40px] ">
        <h3 className="text-base md:text-lg font-medium text-gray-700">
          Beats Solo Air    
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold text-black ">
          Summer Sale <br />
          <span className="text-white text-[90px] md:text-[140px]">FINE</span>
        </h1>
        <button className="bg-red-500 text-white px-5 md:px-6 py-2 md:py-3 rounded-2xl font-medium w-fit mx-auto md:mx-0 hover:bg-red-600 mt-4 md:mt-5">
          Shop Now
        </button>
        <img
          src="https://cdn.sanity.io/images/ks2i9q1g/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp"
          alt="Headphones"
          className="w-[250px] md:w-[450px] drop-shadow-xl absolute right-[20%] h-[450px] top-18"
        />
      </div>

      {/* Right side image */}
      <div className="flex flex-col  items-center w-full justify-end md:items-end mt-6 md:mt-0 pt-10 pr-20">
        
        <p className="mt-4 [#324d67] font-semibold text-center md:text-left">
          Best headphones in the market
        </p>
        <p className="text-gray-500 text-sm text-center md:text-left">
          DESCRIPTION
        </p>
      </div>
    </section>
  );
}
