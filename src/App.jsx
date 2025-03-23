import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Populer_Product from "./components/Products/Populer_Product";
import Cover from "./components/home/Cover";
import NewProduct from "./components/Products/NewProduct";
import Testimonial from "./components/home/Testimonial";
import ReviewCover from "./components/home/ReviewCover";
import CoverBanner from "./components/home/CoverBanner";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUs";
import Store from "./components/Products/Store";
import ProductDetails from "./components/Products/ProductDetails";


const App = () => {
  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Cover />
            <CoverBanner />
            <Populer_Product />
            <NewProduct />
            <Testimonial />
            <ReviewCover />
          </>
        } />
        <Route path="/aboutus" element={<><AboutUs /></>} />
        <Route path="/contact" element={<><ContactUs /></>} />
        <Route path="/store" element={<><Store /> <ReviewCover /></>} />
        <Route path="/product-details" element={<><ProductDetails /> <ReviewCover /></>} />
      </Routes>
      <Footer />

    </Router>
  </>
};

export default App;