import React from "react";
import Cover from "../components/home/Cover";
import CoverBanner from "../components/home/CoverBanner";
import Populer_Product from "../components/Products/Populer_Product";
import NewProduct from "../components/Products/NewProduct";
import Testimonial from "../components/home/Testimonial";
import ReviewCover from "../components/home/ReviewCover";

const Home = () => {
  return (
    <>
        <Cover />
        <CoverBanner />
        <Populer_Product />
        <NewProduct />
        <Testimonial />
        <ReviewCover />
    </>
  );
};

export default Home;
