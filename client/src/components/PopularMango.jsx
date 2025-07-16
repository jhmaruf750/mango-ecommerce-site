import React from 'react';

// আজকের সেরা বিক্রিত আমের তথ্য (ভবিষ্যতে backend থেকে আসতে পারে)
const todayTopMango = {
  name: 'হিমসাগর আম',
  price: '৳80 প্রতি কেজি',
  soldKg: 320,
  description: 'মিষ্টি স্বাদের হিমসাগর, আঁশবিহীন, সিজনে অত্যন্ত জনপ্রিয়।',
  reason: 'আজ বাজারে সবচেয়ে বেশি বিক্রি হয়েছে 🎉',
  image: '/himsagor.jpg',
};

const PopularMango = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#fffef6' }}>
      <div className="text-center mb-4">
        <h2 style={{ color: '#2f4f4f' }}>🍋 আজকের জনপ্রিয় আম</h2>
        <p className="text-muted">আজকের জন্য বাছাই করা সেরা আমটি দেখুন</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
            <img
              src={todayTopMango.image}
              alt={todayTopMango.name}
              className="card-img-top rounded-top-4"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
              <h4 className="card-title fw-bold">{todayTopMango.name}</h4>
              <p className="text-warning fs-5 fw-semibold">{todayTopMango.price}</p>
              <p className="card-text text-secondary">{todayTopMango.description}</p>

              <div className="d-flex justify-content-center gap-2 flex-wrap mt-3">
                <span className="badge bg-success fs-6 px-3 py-2">
                  ✅ {todayTopMango.reason}
                </span>
                <span className="badge bg-info text-dark fs-6 px-3 py-2">
                  📦 আজ বিক্রি হয়েছে: <strong>{todayTopMango.soldKg}</strong> কেজি
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMango;
