import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Banner.css";

const Banner = () => {
  const contentRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
  }, []);

  return (
    <section
      className="position-relative d-flex align-items-center text-white banner-section"
      style={{
        backgroundImage: `url('/mango-garden.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.2) 100%)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        ref={contentRef}
        className={`container position-relative z-2 banner-content ${
          isVisible ? "reveal" : ""
        }`}
      >
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold text-warning mb-4 animate-heading">
              চাঁপাইনবাবগঞ্জের বাগান থেকে সেরা আমের স্বাদ পেতে আপনি এত দেরি করছেন কেন?
            </h1>
            <p className="lead mb-3 fs-5 text-light text-glow">
              প্রকৃতির মিষ্টতা আর ভালোবাসার ছোঁয়া—এই দু’য়ের মেলবন্ধন আমাদের প্রতিটি হাতে তোলা আমে।
            </p>
            <p className="lead mb-3 fs-5 text-light text-glow">
              সতেজতা, স্বাদ এবং গুণগত মানে কোনো আপোষ নয়।
            </p>
            <p className="lead mb-3 fs-5 text-light text-glow">
              প্রতি কামড়ে মিলবে চাঁপাইনবাবগঞ্জের মাটির ঘ্রাণ ও সৌরভ।
            </p>
            <p className="lead mb-4 fs-5 text-light text-glow">
              আমাদের প্রতিটি আম যেন প্রকৃতির আপন কাব্য। এখনই অর্ডার করুন, প্রকৃতির আসল স্বাদ অনুভব করুন।
            </p>
            <a
              href="#products"
              className="btn btn-success btn-lg rounded-pill px-4 py-2 shadow-lg fw-semibold order-button"
            >
              এখনই অর্ডার করুন 🍃
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
