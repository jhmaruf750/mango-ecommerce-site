import React, { useState } from "react";

const MangoFarmingBlog = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      const newComment = { id: Date.now(), name, email, message };
      setComments([newComment, ...comments]);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const deleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div
      className="container-fluid py-5 px-3 px-md-5 text-light"
      style={{
        fontFamily: "Khand, Segoe UI, sans-serif",
        backgroundColor: "#121212",
        minHeight: "100vh",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "900px" }}>
        <h1
          className="display-4 fw-bold text-warning mb-4 text-center"
          style={{ marginTop: "2rem" }}
        >
          🌱 আম চাষ কৌশল ও পরিচর্যা
        </h1>

        <img
          src="/mango-farming.jpg"
          alt="আম চাষ"
          className="img-fluid rounded-4 shadow mb-4"
          style={{ maxHeight: "450px", objectFit: "cover", width: "100%" }}
        />

        <p className="fs-5 text-light">
          আম চাষ একটি লাভজনক কৃষি কার্যক্রম, যা সঠিক কৌশল ও পরিচর্যা ছাড়া সফল হওয়া কঠিন। 
          এখানে আম চাষের প্রধান কৌশল ও পরিচর্যার পদ্ধতিসমূহ তুলে ধরা হলো —
        </p>

        <ul className="fs-5 text-light">
          <li><strong>✅ জমির প্রস্তুতি:</strong> ভালোভাবে মাটি পরিশোধন করে সার মেশাতে হবে।</li>
          <li><strong>🌞 বীজ বপন:</strong> স্বাস্থ্যবান বীজ বেছে বপন করতে হবে উপযুক্ত ঋতুতে।</li>
          <li><strong>💧 সেচ:</strong> পর্যাপ্ত সেচ নিশ্চিত করতে হবে বিশেষ করে ফুল আসার সময়।</li>
          <li><strong>🌿 পরিচর্যা:</strong> আগাছা পরিষ্কার, পোকামাকড় নিয়ন্ত্রণ ও সময়মতো ছাঁটাই করতে হবে।</li>
          <li><strong>🛡️ রোগ নিয়ন্ত্রণ:</strong> ছত্রাক, ব্যাকটেরিয়া ও পোকামাকড়ের বিরুদ্ধে প্রয়োজনীয় ঔষধ প্রয়োগ।</li>
          <li><strong>🍂 ফসল কাটা:</strong> ফল সম্পূর্ণ পেকে গেলে সাবধানে কাটতে হবে যেন ক্ষতি না হয়।</li>
        </ul>

        <blockquote className="fs-5 fst-italic text-center text-warning my-5 bg-dark p-4 rounded shadow-sm">
          “সঠিক যত্ন আর ধৈর্য্য থাকলে আম চাষে ভালো ফলাফল পাওয়া সম্ভব। সফল চাষী হতে হবে পরিবেশ বান্ধব।” 
        </blockquote>

        {/* Comment Form */}
        <div className="bg-dark border border-warning rounded-4 p-4 shadow-sm mt-5">
          <h3 className="text-warning mb-4 text-center">📝 আপনার মতামত জানান</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-light">নাম</label>
              <input
                type="text"
                className="form-control rounded-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="আপনার নাম লিখুন"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light">ইমেইল (ঐচ্ছিক)</label>
              <input
                type="email"
                className="form-control rounded-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার ইমেইল লিখুন"
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light">মন্তব্য</label>
              <textarea
                className="form-control rounded-3"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="এখানে আপনার মতামত লিখুন"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-warning px-5 py-2 rounded-pill shadow"
              >
                মন্তব্য পাঠান ✉️
              </button>
            </div>
          </form>
        </div>

        {/* Show Comments */}
        <div className="mt-5">
          <h4 className="text-warning mb-3">📬 মন্তব্যসমূহ:</h4>
          {comments.length === 0 ? (
            <p className="text-light">এখনো কোনো মন্তব্য নেই।</p>
          ) : (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-secondary text-light rounded-3 p-3 mb-3 shadow-sm"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-1">👤 {comment.name}</h6>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteComment(comment.id)}
                  >
                    মুছুন ❌
                  </button>
                </div>
                <p className="mb-1">{comment.message}</p>
                {comment.email && (
                  <small className="text-warning">📧 {comment.email}</small>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MangoFarmingBlog;
