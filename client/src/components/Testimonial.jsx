import React from "react";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    text: "This is hands down the best mangoes I’ve ever had! 🥭 I ordered them for a party, and everyone loved them. Highly recommend! 🎉",
    name: "মায়েশা মালিহা",
    location: "গ্রাহক, ঢাকা",
  },
  {
    text: "আমি এই কোম্পানি থেকে সবচেয়ে সুস্বাদু আম পেয়েছি 🍯। অর্ডার করার পর দ্রুত ডেলিভারি পেয়ে আমি অবাক! সেবার মানও চমৎকার 💯",
    name: "Luksanara Mukta",
    location: "গ্রাহক, রাজশাহী",
  },
  {
    text: "Wonderful service and excellent quality mangoes! 😍 I’ve never tasted anything better. The delivery was also on time ⏰",
    name: "Asaduzzaman Khan",
    location: "গ্রাহক, চট্টগ্রাম",
  },
  {
    text: "অসাধারণ সেবার জন্য ধন্যবাদ! 🙏 পণ্যটি ঠিক সময়ে পৌঁছেছে এবং দামও অনেক মানানসই ছিল 💵",
    name: "মরিয়ম বেগম",
    location: "গ্রাহক, চট্টগ্রাম",
  },
  {
    text: "The best mangoes I have ever tasted! 🧡 The quality is unmatched, and the delivery was super fast 🚚💨",
    name: "Ayesha Tasnin",
    location: "গ্রাহক, সিলেট",
  },
  {
    text: "এটা ছিল আমার জীবনের সবচেয়ে ভালো আম! 😋 সঠিক সময়ের মধ্যে পণ্য পেয়েছি এবং এটা সত্যিই ভালো মানের ছিল 🌟",
    name: "আলিমুল্লাহ সরকার",
    location: "গ্রাহক, বরিশাল",
  },
  {
    text: "The mangoes were perfectly ripe and absolutely delicious🥰. Delivered to my door in perfect condition 🥭📦",
    name: "Jubayer Rahman",
    location: "গ্রাহক, বগুড়া",
  },
  {
    text: "অসাধারণ পণ্য! দাম এবং গুণমানের তুলনায় খুব ভালো সেবা 🤝। আমি আবারও অর্ডার করবো 🔁",
    name: "ফারহানা ইয়াসমিন",
    location: "গ্রাহক, ঢাকা",
  },
  {
    text: "সত্যিই অবিশ্বাস্য অভিজ্ঞতা! 😮 এত রসালো, মিষ্টি আর তাজা আম আমি আগে কখনও খাইনি 🍃। মনে হচ্ছিল গ্রামের আমগাছ থেকে সদ্য পাড়া 🌳",
    name: "সাদিয়া সুলতানা রিয়া",
    location: "খুলনা, বাংলাদেশ",
  },
];


const Testimonial = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="testimonial" className="py-5 aesthetic-bg" ref={ref}>
      <div className={`container text-center ${inView ? "fade-in" : "opacity-0"}`}>
        <h2 className="display-6 fw-bold text-success border-bottom border-warning pb-2 mb-3">
          🌟 আমাদের গ্রাহকদের অভিজ্ঞতা
        </h2>
        <p className="lead text-dark-emphasis mb-5">
          প্রতিটি রিভিউই আমাদের গর্বের প্রতিচ্ছবি — দেখুন আপনার মতামত কেমন হতে পারে।
        </p>

        <div className="row g-4">
          {reviews.map((review, index) => (
            <div key={index} className="col-sm-6 col-lg-4">
              <div className="card h-100 border-0 shadow-lg glass-card rounded-4">
                <div className="card-body d-flex flex-column justify-content-between">
                  <FaQuoteLeft className="text-warning fs-3 mb-3" />
                  <p className="fst-italic text-dark flex-grow-1">“{review.text}”</p>
                  <hr />
                  <h5 className="text-success fw-bold mb-0">{review.name}</h5>
                  <p className="text-muted small">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <a
            href="https://www.facebook.com/TheCityofMango24/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success px-4 py-2 rounded-pill shadow"
          >
            আরও রিভিউ পড়ুন
          </a>
        </div>
      </div>

      <style jsx>{`
        .aesthetic-bg {
          background: linear-gradient(135deg, #fff7e6, #e5ffe5);
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(6px);
          border-left: 4px solid #ffc107;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 2rem rgba(0, 128, 0, 0.1);
        }
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s ease;
        }
        .opacity-0 {
          opacity: 0;
          transform: translateY(40px);
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
