import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ReviewCover from "./components/home/ReviewCover";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUs";
import Store from "./components/Products/Store";
import ProductDetails from "./components/Products/ProductDetails";
import Home from "./pages/Home";
import ShopSingle from "./pages/ShopSingle";
import SingUp from "./pages/SingUp";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";


const App = () => {

  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/about" element={<><AboutUs /></>} />
        <Route path="/contact" element={<><ContactUs /></>} />
        <Route path="/store" element={authUser ? <><Store /> <ReviewCover /></> : <Navigate to="/signup" /> } />
        <Route path="/product-details" element={<><ProductDetails /> <ReviewCover /></>} />
        <Route path="/shop-single/:id" element={<><ShopSingle /></>} />
        <Route path="/signup" element={<><SingUp /></>} />
        <Route path="/login" element={<><Login /></>} />
      </Routes>
      <Footer />

    </Router>
    <Toaster />
  </>
};

export default App;


