import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    // Pass the full product (including images array) to the detail page
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="flex flex-col">
      {/* Product Card (image only) */}
      <div 
        onClick={handleProductClick}
        className="bg-gray-100 rounded-xl p-6 flex justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        <img
          src={product.img}
          alt={product.name}
          className="w-[250px] h-[250px] object-contain"
        />
      </div>

      {/* Name & Price outside */}
      <h3 className="text-lg font-semibold text-[#324d67] mt-3">
        {product.name}
      </h3>
      {/* Rating stars */}
      {typeof product?.rating === 'number' && (
        <div className="flex items-center gap-2 mt-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < product.rating ? 'text-red-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          {typeof product?.reviews === 'number' && (
            <span className="text-xs text-gray-500">({product.reviews})</span>
          )}
        </div>
      )}
      {/* Details */}
      {product?.details && (
        <p className="text-sm text-gray-600 mt-1 line-clamp-1">{product.details}</p>
      )}
      <p className="text-gray-600 mt-1">{product.price}</p>
    </div>
  );
};

export default ProductCard;
