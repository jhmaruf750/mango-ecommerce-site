import React, { useState } from "react";

const BlogDetails = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      const newComment = { id: Date.now(), name, email, message };
      setComments([newComment, ...comments]);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
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
  style={{  marginTop: "2rem"}}
>
  🥭 আমের স্বাস্থ্য উপকারিতা
</h1>


        <img
          src="/mango-health.jpg"
          alt="আমের উপকারিতা"
          className="img-fluid rounded-4 shadow mb-4"
          style={{ maxHeight: "450px", objectFit: "cover", width: "100%" }}
        />

        <p className="fs-5 text-light">
          আম শুধু একটি ফল নয়—এটি একটি স্বাস্থ্যকর সুপারফুড। আমে রয়েছে প্রচুর পরিমাণে ভিটামিন A, C, E ও B6, যা আমাদের দেহের
          রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে। এতে থাকা ফাইবার হজমে সহায়তা করে এবং ক্যান্সার প্রতিরোধে সহায়ক উপাদান হিসেবে কাজ করে।
          চলুন জেনে নিই আমের বিস্ময়কর স্বাস্থ্য উপকারিতা—
        </p>

        <ul className="fs-5 text-light">
          <li><strong>✅ রোগ প্রতিরোধ ক্ষমতা:</strong> ভিটামিন C ও অ্যান্টিঅক্সিডেন্ট সংক্রমণ প্রতিরোধ করে।</li>
          <li><strong>👀 চোখের যত্ন:</strong> বিটা ক্যারোটিন ও ভিটামিন A দৃষ্টিশক্তি উন্নত করে।</li>
          <li><strong>✨ উজ্জ্বল ত্বক:</strong> ভিটামিন E ত্বকের উজ্জ্বলতা বাড়ায়।</li>
          <li><strong>🍃 হজমে সহায়ক:</strong> অ্যামিলেজ এনজাইম খাবার হজমে সহায়তা করে।</li>
          <li><strong>❤️ হৃদরোগ প্রতিরোধ:</strong> পটাসিয়াম ও ফাইবার হৃদয়কে সুস্থ রাখে।</li>
          <li><strong>🧠 মস্তিষ্কের পুষ্টি:</strong> B6 নিউরোট্রান্সমিটার উন্নত করে মন ভালো রাখে।</li>
          <li><strong>🔥 ক্যান্সার প্রতিরোধ:</strong> ম্যাঙ্গিফেরিন নামক উপাদান ক্যান্সার কোষ রোধে কাজ করে।</li>
          <li><strong>🩸 ডায়াবেটিস নিয়ন্ত্রণ:</strong> অল্প পরিমাণে খেলে রক্তে শর্করা নিয়ন্ত্রণে রাখতে সহায়তা করে।</li>
        </ul>

        <blockquote className="fs-5 fst-italic text-center text-warning my-5 bg-dark p-4 rounded shadow-sm">
          “একটি আম প্রতিদিন – সুস্থ জীবন নিশ্চিত করে! তবে মনে রাখবেন, পরিমিত খাওয়াই উত্তম।”
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
              <button type="submit" className="btn btn-warning px-5 py-2 rounded-pill shadow">
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
              <div key={comment.id} className="bg-secondary text-light rounded-3 p-3 mb-3 shadow-sm">
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
                {comment.email && <small className="text-warning">📧 {comment.email}</small>}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
