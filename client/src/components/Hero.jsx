import React from "react";
import "../styles/Hero.css";
import mangoImg from "/mango-bg.png"; 

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container h-100">
        <div className="row align-items-center h-100">

          {/* Left Side: Text */}
          <div className="col-lg-6 text-center text-lg-start animate__animated animate__fadeInLeft">
            <div className="hero-text">
              <h1 className="hero-title mb-3">
                <span className="highlight">তাজা এবং রসালো আম</span>
              </h1>
              <p className="hero-subtitle">
                সরাসরি <span className="highlight">চাঁপাইনবাবগঞ্জ</span> এর বাগান থেকে আপনার টেবিলে।
              </p>
              <p className="hero-extra">
                আমাদের নিজস্ব বাগান থেকে আনা <span className="highlight">১০০% কেমিকেলমুক্ত</span> খাঁটি আম।
              </p>
              <p className="hero-extra">
                প্রতিটি আমে থাকে প্রকৃতির আসল স্বাদ ও মিষ্টি সুগন্ধ।
              </p>
              <a href="#products" className="btn btn-light btn-lg mt-4 px-5 py-3 fw-semibold shadow">
                এখনই অর্ডার করুন
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-lg-6 text-center animate__animated animate__fadeInRight animate__delay-1s">
            <img src={mangoImg} alt="Fresh Mangoes" className="hero-img img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
