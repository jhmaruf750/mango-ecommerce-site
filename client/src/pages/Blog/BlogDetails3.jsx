import React, { useState } from "react";

const Blog3 = () => {
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
          style={{marginTop: "2rem"}}
        >
          🥭 সেরা আমের জাত কোনটি?
        </h1>

        <p className="fs-5 text-light mb-4" style={{ lineHeight: "1.8" }}>
          বিশ্বজুড়ে প্রচলিত সেরা আমের জাতগুলোর মধ্যে হিমসাগর, গোপালভোগ, এবং ল্যাংড়া অন্যতম। প্রতিটি জাতের রয়েছে নিজস্ব বৈশিষ্ট্য, স্বাদ, গন্ধ এবং জনপ্রিয়তা। চলুন, জেনে নিই এই তিনটি আমের জাত সম্পর্কে বিস্তারিত।
        </p>

        <h3 className="text-warning mb-3">১. হিমসাগর আম</h3>
        <p className="fs-5 text-light" style={{ lineHeight: "1.8" }}>
          হিমসাগর আমকে বলা হয় ‘রাজা আমের’ স্বীকৃতি দিয়ে। এই আমের গুণাগুণের কারণেই এটি অত্যন্ত জনপ্রিয়।  
          <ul>
            <li><strong>স্বাদ:</strong> মিষ্টি ও রসালো, স্বাদে খুবই মনমুগ্ধকর।</li>
            <li><strong>রঙ:</strong> সূর্যকিরণের মতো উজ্জ্বল হলুদ থেকে গভীর সোনালী।</li>
            <li><strong>গন্ধ:</strong> সুগন্ধি ফুলের মতো মনোমুগ্ধকর।</li>
            <li><strong>গঠন:</strong> আঁশহীন, ফলে খেতে খুবই সহজ।</li>
            <li><strong>বিশেষত্ব:</strong> দীর্ঘস্থায়ী এবং তুলনামূলক কম আঁশযুক্ত হওয়ায় খাদ্যে ভালো লাগে।</li>
          </ul>
        </p>

        <h3 className="text-warning mb-3">২. গোপালভোগ আম</h3>
        <p className="fs-5 text-light" style={{ lineHeight: "1.8" }}>
          গোপালভোগ আম বাংলার এক জনপ্রিয় জাত, যা তার অনন্য স্বাদ এবং গন্ধের জন্য বিশ্বজুড়ে পরিচিত।  
          <ul>
            <li><strong>স্বাদ:</strong> অতিশয় মিষ্টি ও সুগন্ধযুক্ত, খেতেই আনন্দ দেয়।</li>
            <li><strong>রঙ:</strong> গাঢ় হলুদ থেকে সোনালী।</li>
            <li><strong>গন্ধ:</strong> খুবই মিষ্টি, যা একবার খেলে ভুলা যায় না।</li>
            <li><strong>গঠন:</strong> আঁশ কম, ফলে মুখে গলে যায়।</li>
            <li><strong>বিশেষত্ব:</strong> সাধারণত ছোট আকৃতির হয়, তবে স্বাদে বড় আমের মতো গুণসম্পন্ন।</li>
          </ul>
        </p>

        <h3 className="text-warning mb-3">৩. ল্যাংড়া আম</h3>
        <p className="fs-5 text-light" style={{ lineHeight: "1.8" }}>
          ল্যাংড়া আম ভারতের বিখ্যাত জাতগুলোর মধ্যে অন্যতম, যা আমাদের দেশের বাজারেও বেশ জনপ্রিয়।  
          <ul>
            <li><strong>স্বাদ:</strong> মিষ্টি ও হালকা টকাটে স্বাদ, যা অনেকেই পছন্দ করেন।</li>
            <li><strong>রঙ:</strong> বেগুনি থেকে হলুদাভ।</li>
            <li><strong>গন্ধ:</strong> হালকা সুগন্ধযুক্ত।</li>
            <li><strong>গঠন:</strong> আঁশ একটু বেশি, কিন্তু খেতে মজাদার।</li>
            <li><strong>বিশেষত্ব:</strong> দীর্ঘস্থায়ী এবং সারা দেশে ভালোভাবে চাষ হয়।</li>
          </ul>
        </p>

        <blockquote className="fs-5 fst-italic text-center text-warning my-5 bg-dark p-4 rounded shadow-sm">
          “হিমসাগর, গোপালভোগ ও ল্যাংড়া – প্রত্যেকেরই নিজস্ব গুণ ও স্বাদ আছে, যা আম প্রেমীদের ভিন্ন ভিন্ন স্বাদ দেয়। সুস্বাদু আমের রাজ্যে প্রতিটি আমই আমাদের গর্ব।”  
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

export default Blog3;
