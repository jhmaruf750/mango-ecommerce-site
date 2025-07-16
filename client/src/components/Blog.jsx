import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const blogPosts = [
  {
    title: "আমের স্বাস্থ্য উপকারিতা",
    image: "/mango-health.jpg",
    description:
      "আমের মধ্যে রয়েছে প্রচুর পরিমাণে ভিটামিন এবং পুষ্টি উপাদান যা স্বাস্থ্যের জন্য উপকারী। বিস্তারিত জানুন!",
    link: "/blog/health-benefits",
  },
  {
    title: "কিভাবে আম চাষ করা যায়?",
    image: "/mango-farming.jpg",
    description:
      "আম চাষ করার জন্য প্রয়োজন সঠিক ভূমি, পানি এবং পরিচর্যা। এখানে জানুন আম চাষের সম্পূর্ণ প্রক্রিয়া।",
       link: "/blog/technique",
  },
  {
    title: "সেরা আমের জাত কোনটি?",
    image: "/best-mango-varieties.jpg",
    description:
      "বিশ্বে প্রচলিত সেরা আমের জাতগুলোর মধ্যে হিমসাগর, গোপালভোগ, এবং ল্যাংড়া অন্যতম। পড়ুন তাদের বৈশিষ্ট্যগুলো।",
    link: "/blog/best-variety",
  },
];

const Blog = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="blog" className="bg-light py-5" ref={ref}>
      <div className={`container ${inView ? "fade-in" : "opacity-0"}`}>
        <h2 className="display-5 fw-bold text-center text-success mb-4 animate-title">
          🌿 আমাদের ব্লগ
        </h2>
        <p className="text-center text-muted mb-5 fs-6">
          <b>আম নিয়ে নতুন কিছু জানতে ও বুঝতে পড়ুন আমাদের নির্বাচিত ব্লগগুলো!</b>
        </p>

        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow blog-card border-0 rounded-4 overflow-hidden transition">
                <div className="card-img-wrapper">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="card-img-top"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold text-success">
                    {post.title}
                  </h5>
                  <p className="card-text text-muted small flex-grow-1">
                    {post.description}
                  </p>
                  <Link
                    to={post.link}
                    className="btn btn-success btn-sm rounded-pill align-self-start px-3 py-1 mt-2"
                  >
                    আরও পড়ুন →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .opacity-0 {
          opacity: 0;
          transform: translateY(30px);
        }

        .card-img-wrapper {
          max-height: 220px;
          overflow: hidden;
        }

        .card-img-top {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .card-img-top {
          transform: scale(1.05);
        }

        .blog-card {
          transition: all 0.4s ease-in-out;
        }

        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 1rem 1.5rem rgba(0, 128, 0, 0.15);
        }

        .animate-title {
          animation: popIn 0.6s ease forwards;
        }

        @keyframes popIn {
          0% {
            transform: scale(0.95);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;
