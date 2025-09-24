import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import Footer from './Footer';

const RelatedProducts = ({ currentProductId }) => {
  const navigate = useNavigate();
  const { addToCart, getTotalItems, setIsCartOpen } = useCart();
  // Related products data - in real app this would come from API
  const relatedProducts = [
    {
      id: 1,
      name: "Cool ear-in headphones",
      price: "$50",
      img: "https://cdn.sanity.io/images/ks2i9q1g/production/2dcd6804ac04c28574e5bf088348e9459121166e-800x800.webp",
      rating: 4,
      reviews: 20,
      details: "Use these while working-out",
      images: [
        "https://cdn.sanity.io/images/ks2i9q1g/production/2dcd6804ac04c28574e5bf088348e9459121166e-800x800.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/18cffd876ecb5abec2d26637bea5dd549928029c-800x800.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/e080e19ff807ee022d04d04db072d9376d94da36-600x600.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp",
      ],
    },
    {
      id: 2,
      name: "Headphones",
      price: "$55",
      img: "https://cdn.sanity.io/images/ks2i9q1g/production/a099db30fab841ce69c573f7409251824748e490-600x600.webp",
      rating: 5,
      reviews: 18,
      details: "A second pair of headphones",
      images: [
        "https://cdn.sanity.io/images/ks2i9q1g/production/a099db30fab841ce69c573f7409251824748e490-600x600.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/797f8df56017feb72288e218fd6957ef068d7b44-700x700.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/04f8a489a3f3b726d8cf0709fbe561ff0ed82fad-900x900.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp",
      ],
    },
    {
      id: 3,
      name: "Speakers",
      price: "$99",
      img: "https://cdn.sanity.io/images/ks2i9q1g/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp",
      rating: 4,
      reviews: 32,
      details: "High-quality sound experience",
      images: [
        "https://cdn.sanity.io/images/ks2i9q1g/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/7d8e11aa468c951095577c0ecada75ad7d66313e-800x800.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/157be1e12db1dab55141ee5935f7fe8b8887ced3-800x800.webp",
      ],
    },
    {
      id: 4,
      name: "Headphones",
      price: "$99",
      img: "https://cdn.sanity.io/images/ks2i9q1g/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp",
      rating: 3,
      reviews: 11,
      details: "Premium wireless headphones",
      images: [
        "https://cdn.sanity.io/images/ks2i9q1g/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp",
      ],
    },
  ];

  // Show all products (don't filter out current product)
  const filteredProducts = relatedProducts;

  const handleProductClick = (product) => {
    // Scroll to top first
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Then navigate after a short delay to ensure smooth transition
    setTimeout(() => {
      navigate(`/product/${product.id}`, { state: { product } });
    }, 300);
  };

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };


  return (
    <div>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#324d67]">
              You may also like
            </h2>
          </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Products Container with Marquee Animation */}
          <div 
            className="flex"
            style={{
              width: '100%',
              animation: 'marquee 5s linear infinite',
              position: 'relative',
              whiteSpace: 'nowrap',
              willChange: 'transform'
            }}
          >
            {/* Products */}
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 px-0"
                style={{ width: `${100 / filteredProducts.length}%` }}
              >
                <div
                  onClick={() => handleProductClick(product)}
                  className="flex flex-col items-center transition-all duration-300 hover:scale-105 cursor-pointer group relative"
                >
                  {/* Product Card */}
                  <div className="bg-gray-100 rounded-2xl flex justify-center items-center min-h-[250px] w-[250px] shadow-sm group-hover:bg-red-50 transition-colors duration-300">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-[200px] h-[200px] object-contain drop-shadow-xl"
                    />
                  </div>

                  {/* Product Info */}
                  <h3 className={`text-lg font-[600] text-[#324d67] mt-3 ${
                    product.name === 'Speakers' ? 'pr-40' : 'pr-35'
                  }`}>
                    {product.name}
                  </h3>

                  {/* Price */}
                  <p className="text-lg pr-50 text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          {/* <div className="flex justify-center mt-6 space-x-2">
            {filteredProducts.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-red-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>

    {/* Footer */}
    <div className="mb-8 ">
      <Footer />
    </div>
    </div>
  );
};

export default RelatedProducts;
