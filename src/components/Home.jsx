import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import BestSellingProducts from "./BestSellingProducts";
import HeadphoneAdSection from "./HeadphoneAdSection";
import Footer from "./Footer";


function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <HeroSection />
            <BestSellingProducts />
            <HeadphoneAdSection/>
            <Footer/>

    </div>
  );
}

export default Home;
