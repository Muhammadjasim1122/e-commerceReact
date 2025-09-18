import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
// import HeroSection from "./components/HeroSection"

function App() {
  return (
    <Router>
      <div className="overflow-y-clip">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        {/* <HeroSection /> */}
      </div>
    </Router>
  );
}

export default App;
