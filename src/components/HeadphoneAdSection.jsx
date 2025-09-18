// HeadphoneAdSection.jsx
import React from "react";

const HeadphoneAdSection = () => {
  return (
    <section className="bg-[#f02d34] text-white rounded-2xl flex justify-between items-center px-[80px] pt-35 pb-10 mx-2   :">
      {/* Left Text */}
      <div className="flex flex-col  ">
        <p className="text-sm">20% OFF</p>
        <h1 className="text-[80px] font-[900] leading-[1.1]  ">
          Fine <br /> Smile
        </h1>
        <p className="text-sm mt-3">15 Nov to 7 Dec</p>
      </div>

      {/* Center Image (using custom link) */}
      <div className="flex justify-center items-center absolute pt-2 left-[20%]  ">
        <img
          src="https://cdn.sanity.io/images/ks2i9q1g/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp" 
          alt="Headphones"
          className="w-[600px] drop-shadow-2xl h-[400px]: relative top-[-70px] "
        />
      </div>

      {/* Right Text */}
      <div className="flex flex-col items-start ">
        <p className="text-sm">Beats Solo Air</p>
        <h2 className="text-[60px] font-[800]">Summer Sale</h2>
        <p className="text-sm">Best headphones in the market</p>
        <button className="bg-white text-red-600 font-semibold px-6 py-2 rounded-[15px] shadow-md hover:bg-gray-100 mt-10">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeadphoneAdSection;
