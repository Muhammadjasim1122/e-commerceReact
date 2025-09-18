import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
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
      <p className="text-gray-600">{product.price}</p>
    </div>
  );
};

export default ProductCard;
