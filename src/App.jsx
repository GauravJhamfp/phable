import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/Footer";
import ReviewCover from "./components/home/ReviewCover";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUs";
import Store from "./components/Products/Store";
import ProductDetails from "./components/Products/ProductDetails";
import Home from "./pages/Home";
import ShopSingle from "./pages/ShopSingle";


const App = () => {
  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/about" element={<><AboutUs /></>} />
        <Route path="/contact" element={<><ContactUs /></>} />
        <Route path="/store" element={<><Store /> <ReviewCover /></>} />
        <Route path="/product-details" element={<><ProductDetails /> <ReviewCover /></>} />
        <Route path="/shop-single/:id" element={<><ShopSingle /></>} />
      </Routes>
      <Footer />

    </Router>
  </>
};

export default App;