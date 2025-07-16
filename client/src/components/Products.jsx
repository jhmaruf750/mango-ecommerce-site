import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    name: "হিমসাগর আম",
    image: "./himsagor.jpg",
    price: "৳80/কেজি",
    desc: "মিষ্টি ও সুগন্ধযুক্ত হিমসাগর আম, চাঁপাইনবাবগঞ্জের সবচেয়ে জনপ্রিয় জাত।",
  },
  {
    name: "গোপালভোগ আম",
    image: "./gopalvog.jpg",
    price: "৳85/কেজি",
    desc: "প্রাকৃতিক মিষ্টতা আর নরম টেক্সচারের জন্য বিখ্যাত গোপালভোগ।",
  },
  {
    name: "ল্যাংড়া আম",
    image: "./langra.jpg",
    price: "৳70/কেজি",
    desc: "আলাদা স্বাদের জন্য পরিচিত ল্যাংড়া আম, বাজারে চাহিদা বেশি।",
  },
  {
    name: "ফজলি আম",
    image: "./fazli.jpg",
    price: "৳75/কেজি",
    desc: "বড় আকৃতির ফজলি আম, শুকনো আমসত্ত্ব তৈরিতে বেশি ব্যবহৃত হয়।",
  },
];

const Products = () => {
  const navigate = useNavigate();

  const handleOrderClick = (product) => {
    navigate('/order', { state: { product } });
  };

  return (
    <section
      id="products"
      className="py-5"
      style={{ background: 'linear-gradient(to right, #f9fbe7, #f1f8e9)' }}
    >
      <div className="container">
        <h2 className="text-center text-success fw-bold display-6 mb-5">
          আমাদের আমসমূহ
        </h2>
        <div className="row g-4">
          {products.map((product, index) => (
            <div key={index} className="col-sm-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm product-card">
                <img
                  src={product.image}
                  className="card-img-top rounded-top"
                  alt={product.name}
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <h5 className="card-title text-success fw-bold">{product.name}</h5>
                  <p className="card-text small text-muted">{product.desc}</p>
                  <p className="fw-semibold text-success fs-6">{product.price}</p>
                  <button
                    className="btn btn-outline-success btn-sm rounded-pill mt-2"
                    onClick={() => handleOrderClick(product)}
                  >
                    <FaShoppingCart className="me-2" />
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
