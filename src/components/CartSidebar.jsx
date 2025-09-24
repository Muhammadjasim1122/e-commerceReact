import React from 'react';
import { useCart } from '../contexts/CartContext';
import { X, Minus, Plus } from 'lucide-react';

const CartSidebar = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  const handleQuantityChange = (productId, change) => {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + change);
    }
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[500px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <button
              onClick={() => setIsCartOpen(false)}
              className="mr-3 p-1 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-xl font-semibold text-gray-900">
              Your Cart
              <span className="text-red-600 ml-2">({getTotalItems()} items)</span>
            </h2>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-10">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start space-x-4">
                  {/* Product Image */}
                  <div className="w-[40%] h-40 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-[70%] h-50 object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    {/* Product Name and Price on SAME LINE */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
                      <p className="font-semibold text-gray-900 text-lg">{item.price}</p>
                    </div>
                    
                    {/* Quantity Controls - Connected rectangular buttons */}
                    <div className="flex items-center mt-[100px]">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="w-8 h-8 bg-red-600 text-white rounded-none flex items-center justify-center hover:bg-red-700 border border-gray-300 border-r-0"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 h-8 text-center bg-white border-t border-b border-gray-300 flex items-center justify-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="w-8 h-8 bg-gray-600 text-white rounded-none flex items-center justify-center hover:bg-green-700 border border-gray-300 border-l-0"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button - Aligned with quantity controls */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className=" w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 flex-shrink-0 mt-[130px]"
                  >
                    <X className="w-3 h-3 " />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6">
            {/* Subtotal */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-900 ">Subtotal:</span>
              <span className="text-lg font-bold text-gray-900">${getTotalPrice().toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <button className="ml-[70px] bg-[#f02d34] text-white  py-3 pt-[10px] pr-[120px] pl-[120px] rounded-[15px] font-semibold hover:bg-red-700 transition-colors">
              PAY WITH STRIPE
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
