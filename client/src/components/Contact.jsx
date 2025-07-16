import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus("sending");
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      if (response.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-5" style={{ background: "linear-gradient(135deg, #f1fff1, #ffffff)" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold border-bottom border-success d-inline-block pb-2 text-success">
            📞 যোগাযোগ করুন
          </h2>
          <p className="text-muted mt-3 fs-5">
            আপনার অর্ডার বা যেকোনো প্রশ্নের জন্য নিচের তথ্যগুলো ব্যবহার করুন:
          </p>
        </div>

        <div className="mb-5 text-center fw-medium fs-5 text-dark">
          <p><strong>📱ফোন:</strong> <a href="tel:+8801777075724" className="text-success">01777075724</a></p>
          <p><strong>📩ইমেইল:</strong> <a href="mailto:jhmaruf750@gmail.com" className="text-success">jhmaruf750@gmail.com</a></p>
          <p><strong>🏢অফিস ঠিকানা:</strong> চাঁপাইনবাবগঞ্জ, রাজশাহী</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto bg-white rounded-4 shadow p-4" style={{ maxWidth: "600px" }}>
          <div className="mb-3 text-start">
            <label htmlFor="name" className="form-label text-success">আপনার নাম</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label text-success">ইমেইল</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 text-start">
            <label htmlFor="message" className="form-label text-success">বার্তা</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success w-100 fw-bold fs-5 py-2">
            ✉️ বার্তা পাঠান
          </button>

          {status === "success" && <p className="text-success mt-3 text-center fw-bold">✅ বার্তাটি সফলভাবে পাঠানো হয়েছে!</p>}
          {status === "error" && <p className="text-danger mt-3 text-center fw-bold">❌ বার্তা পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।</p>}
          {status === "sending" && <p className="text-warning mt-3 text-center fw-bold">⏳ পাঠানো হচ্ছে...</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
