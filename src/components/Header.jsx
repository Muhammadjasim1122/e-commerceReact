import React from "react";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white ">
      <h1 className="text-gray-500 text-lg ">Jasim's Headphones</h1>
      <div className="relative">
        <ShoppingCart className="w-6 h-6 text-gray-700" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          0
        </span>
      </div>
    </header>
  );
}
