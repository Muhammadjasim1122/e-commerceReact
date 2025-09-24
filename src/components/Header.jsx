import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";

export default function Header() {
  const { getTotalItems, setIsCartOpen } = useCart();

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white ">
      <h1 className="text-gray-500 text-lg ">Jasim's Headphones</h1>
      <button 
        onClick={() => setIsCartOpen(true)}
        className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <ShoppingCart className="w-6 h-6 text-gray-700" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {getTotalItems()}
        </span>
      </button>
    </header>
  );
}
