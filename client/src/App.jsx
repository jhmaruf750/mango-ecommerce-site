import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Banner from "./components/Banner";
import PhotoVideo from "./components/PhotoVideo";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import PopularMango from "./components/PopularMango";

import BlogDetails from "./pages/Blog/BlogDetails";
import BlogDetails2 from "./pages/Blog/BlogDetails2";
import BlogDetails3 from "./pages/Blog/BlogDetails3";

import OrderPage from "./pages/OrderPage";

// 🟩 এই লাইনটা নতুন
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Products />
              <PopularMango />
              <Banner />
              <PhotoVideo />
              <Blog />
              <Testimonial />
              <FAQ />
              <Contact />
            </>
          }
        />

        {/* Blog Pages */}
        <Route path="/blog/health-benefits" element={<BlogDetails />} />
        <Route path="/blog/technique" element={<BlogDetails2 />} />
        <Route path="/blog/best-variety" element={<BlogDetails3 />} />

        {/* Order Page */}
        <Route path="/order" element={<OrderPage />} />

        {/* 🟩 Admin Dashboard Route */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
