import React from "react";
import { useInView } from 'react-intersection-observer';
import "../styles/About.css";
import jhMarufPic from '/jh_maruf.jpg';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className={`about-container ${inView ? 'animate' : ''}`}>
        <div className="about-image">
          <div className="profile-wrapper">
            <img src={jhMarufPic} alt="Jahid Hasan Maruf" className="profile-image" />
            <div className="social-links">
              <a
                href="https://www.instagram.com/maaaruuufffff_._?igsh=NW84d2RvdmZhMXVw"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/jahidhasan.maruf.142"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/jahid-hasan-maruf-39a925216"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className={`about-text ${inView ? 'slide-in' : ''}`}>
          <h2 className="section-title">আমার সম্পর্কে</h2>
          <p>
            আমি <span className="highlight">জাহিদ হাসান মারুফ</span>, <strong>চাঁপাইনবাবগঞ্জ</strong> জেলার এক তরুণ উদ্যোক্তা ও প্রযুক্তিপ্রেমী।  
            <strong>“The City of Mango”</strong> আমার একটি স্বপ্নের উদ্যোগ, যার মাধ্যমে আমি আমাদের জেলার বিখ্যাত আম 
            সরাসরি বাগান থেকে দেশের যেকোনো প্রান্তে পৌঁছে দিতে কাজ করছি।
          </p>
          <p>
            আমি <strong>রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়ে (RUET)</strong> কম্পিউটার সায়েন্সে অধ্যয়নরত। পাশাপাশি আমি একজন 
            <span className="green-bold"> Web Developer</span>, <span className="green-bold"> Designer</span> এবং <span className="green-bold">Problem Solver</span> হিসেবে কাজ করছি।
          </p>
          <p>
            আমার লক্ষ্য শুধু ব্যবসা নয় — বরং <strong>চাঁপাইনবাবগঞ্জের</strong> ঐতিহ্যবাহী আমকে একটি 
            <strong> আন্তর্জাতিক ব্র্যান্ড</strong> হিসেবে প্রতিষ্ঠা করা। আমি বিশ্বাস করি, <em>প্রযুক্তি, আন্তরিকতা এবং গুণগত মান</em> এর মাধ্যমে 
            বাংলাদেশের ফলবিশ্বকে বিশ্বের সামনে উপস্থাপন করা সম্ভব।
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
