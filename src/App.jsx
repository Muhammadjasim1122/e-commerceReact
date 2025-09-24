import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "./contexts/CartContext";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import CartSidebar from "./components/CartSidebar";
import Notification from "./components/Notification";

function AppContent() {
  const { notification, setNotification } = useCart();

  return (
    <>
      <div className="overflow-y-clip">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <CartSidebar />
      </div>
      <Notification 
        notification={notification} 
        onClose={() => setNotification(null)} 
      />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
