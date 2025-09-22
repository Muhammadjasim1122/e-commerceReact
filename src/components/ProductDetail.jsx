import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import RelatedProducts from './RelatedProducts';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Prefer product passed via navigation state; fallback to demo data
  const { state } = useLocation();
  const product = state?.product ?? {
    id: Number(id) || 1,
    name: "Cool ear-in headphones",
    price: 50,
    rating: 4,
    reviews: 20,
    details: "Use these while working-out",
    images: [
      "https://cdn.sanity.io/images/ks2i9q1g/production/2dcd6804ac04c28574e5bf088348e9459121166e-800x800.webp",
      "https://cdn.sanity.io/images/ks2i9q1g/production/18cffd876ecb5abec2d26637bea5dd549928029c-800x800.webp",
      "https://cdn.sanity.io/images/ks2i9q1g/production/e080e19ff807ee022d04d04db072d9376d94da36-600x600.webp",
      "https://cdn.sanity.io/images/ks2i9q1g/production/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp",
    ],
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Added to cart:', { product, quantity });
  };

  const handleBuyNow = () => {
    // Buy now logic
    console.log('Buy now:', { product, quantity });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white">
        <h1 className="text-gray-500 text-lg">Jasim's Headphones</h1>
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            0
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Section - Product Images */}
          <div className="space-y-4 max-w-md mx-auto lg:mx-0">
            {/* Main Product Image */}
            <div className="bg-gray-100 rounded-2xl p-6 flex justify-center items-center min-h-[300px] hover:bg-red-600 transition-colors duration-300">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="max-w-full max-h-[250px] object-contain"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`bg-gray-100 rounded-lg p-2 cursor-pointer transition-all duration-300 hover:scale-105 group ${
                    selectedImage === index ? 'ring-2 ring-red-500' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                  onMouseEnter={(e) => e.currentTarget.classList.add('bg-red-600')}
                  onMouseLeave={(e) => e.currentTarget.classList.remove('bg-red-600')}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Product Information */}
          <div className="space-y-6 ">
            {/* Product Title */}
            <h1 className="text-3xl font-bold text-[#324d67]">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.rating ? 'text-red-500' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">({product.reviews})</span>
            </div>

            {/* Details */}
            <div>
              <span className="font-[700] text-gray-900">Details: </span>
              <span className="text-gray-700 ">{product.details}</span>
            </div>

            {/* Price */}
            <div className="text-2xl font-bold text-red-600">
              ${product.price}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-xl font-[700] text-[#324d67]">Quantity:</span>
              <div className="flex items-center border border-gray-300 ">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-3 text-red-600 hover:text-gray-900 hover:bg-red-100 rounded-l-lg "
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-2 text-green-600 hover:text-gray-900 hover:bg-gray-100 rounded-r-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-x-4">
              <button
                onClick={handleAddToCart}
                className=" w-[200px] py-3 px-6 border-2 border-red-600 text-red-600 font-semibold  hover:bg-red-50 transition-colors duration-300 "
              >
                Add To Cart
              </button>
              <button
                onClick={handleBuyNow}
                className=" w-[200px] py-3 px-6 bg-red-600 text-white font-semibold  hover:bg-red-700 transition-colors duration-300 "
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <RelatedProducts currentProductId={product.id} />
    </div>
  );
};

export default ProductDetail;
