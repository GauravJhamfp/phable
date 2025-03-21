import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Populer_Product from "./components/Products/Populer_Product";
import Cover from "./components/home/Cover";
import new_product from "./components/Products/new_product";
import testimonial from "./components/home/testimonial";

const App = () => {
  return <>
    <div className="site-wrap">
      <Navbar />
      <Cover />
      <Populer_Product />
      <new_product />
      <testimonial />
      <Footer />
    </div>
  </>
};

export default App;
