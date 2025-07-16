import React, { useEffect } from "react";
import "../styles/photoVideo.css";

const images = [
  "/photos/photo1.jpg",
  "/photos/photo2.jpg",
  "/photos/photo3.jpg",
  "/photos/photo4.jpg",
  "/photos/photo5.jpg",
  "/photos/photo6.jpg",
  "/photos/photo7.jpg",
  "/photos/photo8.jpg",
  "/photos/photo9.jpg",
  "/photos/photo10.jpg",
  "/photos/photo11.jpg",
  "/photos/photo12.jpg",
];

const PhotoVideo = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".wow");
    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <section className="photo-video-section py-5">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5 wow fadeInUp">
          <h2 className="fw-bold display-6 text-success">আমাদের মুহূর্তের ঝলক</h2>
          <p className="lead text-secondary">
            প্রতিটি ফ্রেমে ধরা পড়েছে প্রকৃতি, পরিশ্রম আর আমাদের গল্প কথাগুলি 🍃
          </p>
        </div>

        {/* Image Gallery */}
        <div className="row g-3 mb-5 wow fadeInUp">
          {images.map((src, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="gallery-img rounded shadow-sm overflow-hidden">
                <img
                  src={src}
                  alt={`আম ${index + 1}`}
                  className="img-fluid zoom-hover w-100 h-100 object-fit-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Two Videos Side-by-Side */}
        <div className="row justify-content-center mb-5 wow fadeInUp">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="video-wrapper shadow-lg rounded overflow-hidden">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/2j9wHFYG3ps?si=EH_wPcdbMuz3aPvj"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="video-wrapper shadow-lg rounded overflow-hidden">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjahidhasan.maruf.142%2Fvideos%2F1137645140789767%2F&show_text=false&width=560&t=0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="আমের ভিডিও"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PhotoVideo;
