import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Populer_Product from "./components/Products/Populer_Product";
import Cover from "./components/home/Cover";
import NewProduct from "./components/Products/NewProduct";
import Testimonial from "./components/home/Testimonial";
import ReviewCover from "./components/home/ReviewCover";
import CoverBanner from "./components/home/CoverBanner";


const App = () => {
  return <>
    <div className="site-wrap">
      <Navbar />
      <Cover />
      <CoverBanner />
      <Populer_Product />
      <NewProduct />
      <Testimonial />
      <ReviewCover />
      <Footer />
    </div>
  </>
};

export default App;
