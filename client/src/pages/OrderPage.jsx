import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
Modal.setAppElement("#root");

const mangoTypes = [
  { name: "হিমসাগর আম", price: 80, image: "./himsagor.jpg" },
  { name: "গোপালভোগ আম", price: 85, image: "./gopalvog.jpg" },
  { name: "ল্যাংড়া আম", price: 70, image: "./langra.jpg" },
  { name: "ফজলি আম", price: 75, image: "./fazli.jpg" },
];

const paymentOptions = ["Bkash", "Nagad", "Rocket"];

const OrderPage = () => {
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState(
    mangoTypes.map((item) => ({ ...item, quantity: 0 }))
  );
  const [paymentMethod, setPaymentMethod] = useState("Bkash");
  const [deliveryType, setDeliveryType] = useState("point");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pointAddress, setPointAddress] = useState("");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [transactionNumber, setTransactionNumber] = useState("");
  const [paymentFromNumber, setPaymentFromNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("orderItems"));
    if (savedOrder) {
      setOrderItems(savedOrder);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("orderItems", JSON.stringify(orderItems));
  }, [orderItems]);

  const handleQuantityChange = (index, value) => {
    const updated = [...orderItems];
    updated[index].quantity = parseInt(value) || 0;
    setOrderItems(updated);
  };

  const handleCoupon = () => {
    if (coupon === "DISCOUNT99") {
      setDiscount(0.1);
      alert("কুপন প্রয়োগ হয়েছে!");
    } else {
      alert("অবৈধ কুপন কোড!");
    }
  };

  const calculateTotal = () => {
    let total = 0;
    orderItems.forEach((item) => {
      total += item.quantity * item.price;
    });
    const deliveryRate = deliveryType === "home" ? 22 : 15;
    total += orderItems.reduce((acc, item) => acc + item.quantity * deliveryRate, 0);
    return Math.round(total - total * discount);
  };

  const handleOrder = () => {
    const selected = orderItems.filter((item) => item.quantity > 0);
    if (selected.length === 0) {
      alert("কমপক্ষে একটি আমের পরিমাণ দিন।");
      return;
    }
    if (!name.trim()) {
      alert("আপনার নাম দিন।");
      return;
    }
    if (!mobileNumber.trim()) {
      alert("মোবাইল নম্বর দিন।");
      return;
    }
    if (!transactionNumber.trim()) {
      alert("ট্রানজেকশন নম্বর দিন।");
      return;
    }
    if (!paymentFromNumber.trim()) {
      alert("যে নাম্বার থেকে টাকা পাঠানো হয়েছে তা দিন।");
      return;
    }
    if (deliveryType === "home" && !address.trim()) {
      alert("বাসার ঠিকানা দিন।");
      return;
    }
    if (deliveryType === "point" && !pointAddress.trim()) {
      alert("পয়েন্ট ঠিকানা দিন।");
      return;
    }

    const orderData = {
      name,
      mobileNumber,
      orderItems: selected,
      paymentMethod,
      transactionNumber,
      paymentFromNumber,
      deliveryType,
      address: deliveryType === "home" ? address : pointAddress,
      coupon,
      discount,
    };

    setIsSubmitting(true);

    fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsSubmitting(false);
        setIsModalOpen(true);
        console.log("Backend response:", data);
      })
      .catch((err) => {
        setIsSubmitting(false);
        alert("কোনো সমস্যা হয়েছে, আবার চেষ্টা করুন।");
        console.error(err);
      });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsSubmitting(false);
    navigate("/");
  };

  const estimatedDelivery = deliveryType === "home" ? "২-৩ দিন" : "১-২ দিন";

  return (
    <div className="container py-5" style={{ marginTop: "60px" }}>
      <h2 className="text-center mb-4 text-success">আপনার অর্ডার করুন</h2>

      <div className="mb-4">
        <label htmlFor="name" className="form-label">
          নাম
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="আপনার নাম"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="mobile" className="form-label">
          মোবাইল নাম্বার
        </label>
        <input
          type="text"
          className="form-control"
          id="mobile"
          placeholder="আপনার মোবাইল নাম্বার"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>

<p
  style={{
    fontStyle: "italic",
color: "#d81b60",                
     maxWidth: "fit-content",
    fontWeight: "600",
    fontSize: "1.1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
  }}
>
  আপনি যেকোনো একটি ধরনের আম সর্বনিম্ন ১০ কেজি নিতে পারবেন।
</p>


      <div className="row g-4">
        {orderItems.map((item, idx) => (
          <div key={idx} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-success">{item.name}</h5>
                <p
                  className="card-text"
                  style={{
                    color: "#1b5e20",
                    fontWeight: "700",
                    fontSize: "1.15rem",
                    backgroundColor: "#c8e6c9",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    display: "inline-block",
                    marginTop: "6px",
                    boxShadow: "0 2px 6px rgba(27, 94, 32, 0.2)",
                  }}
                >
                  মূল্য: ৳{item.price} / কেজি
                </p>
                <input
                  type="number"
                  className="form-control"
                  min="0"
                  placeholder={item.quantity === 0 ? "কত কেজি নিবেন?" : ""}
                  value={item.quantity || ""}
                  onChange={(e) => handleQuantityChange(idx, e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="কুপন কোড দিন"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <button className="btn btn-secondary mt-2" onClick={handleCoupon}>
          কুপন প্রয়োগ করুন
        </button>
      </div>

      <div className="mt-5">
        <h5 className="fw-bold mb-2">পেমেন্ট মাধ্যম নির্বাচন করুন:</h5>
        <select
          className="form-select w-50 mb-3"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          {paymentOptions.map((method, i) => (
            <option key={i} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>

      {paymentMethod && (
        <div className="mt-3 p-3 rounded bg-light border">
          <h5 className="text-success fw-bold mb-2">পেমেন্ট নির্দেশনা (Send Money):</h5>
          {paymentMethod === "Bkash" && (
            <p>
              📱 <strong>Bkash Personal Number:</strong>{" "}
              <span className="text-danger">01777075724</span>
            </p>
          )}
          {paymentMethod === "Nagad" && (
            <p>
              📱 <strong>Nagad Personal Number:</strong>{" "}
              <span className="text-danger">01777075724</span>
            </p>
          )}
          {paymentMethod === "Rocket" && (
            <p>
              📱 <strong>Rocket Number:</strong>{" "}
              <span className="text-danger">017770757242</span>
            </p>
          )}
          <p className="mt-3">
            💬 পেমেন্ট করার পরে নিচে{" "}
            <strong>ট্রানজেকশন নম্বর</strong> এবং{" "}
            <strong>যে নাম্বার থেকে টাকা পাঠানো হয়েছে</strong> দিয়ে জমা দিন।
          </p>
        </div>
      )}

      <div className="mt-3">
        <label htmlFor="transactionNumber" className="form-label">
          ট্রানজেকশন নম্বর দিন:
        </label>
        <input
          type="text"
          className="form-control"
          id="transactionNumber"
          value={transactionNumber}
          onChange={(e) => setTransactionNumber(e.target.value)}
          placeholder="ট্রানজেকশন নম্বর"
        />
      </div>

      <div className="mt-3">
        <label htmlFor="paymentFromNumber" className="form-label">
          যে নাম্বার থেকে টাকা পাঠানো হয়েছে:
        </label>
        <input
          type="text"
          className="form-control"
          id="paymentFromNumber"
          placeholder="Ex: 017XXXXXXXX"
          value={paymentFromNumber}
          onChange={(e) => setPaymentFromNumber(e.target.value)}
        />
      </div>

      <div className="mt-5">
        <h5 className="fw-bold mb-2">ডেলিভারি মাধ্যম নির্বাচন করুন:</h5>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="point"
            name="delivery"
            value="point"
            checked={deliveryType === "point"}
            onChange={() => setDeliveryType("point")}
          />
          <label className="form-check-label" htmlFor="point">
            পয়েন্ট ডেলিভারি (৳15 প্রতি কেজি)
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="home"
            name="delivery"
            value="home"
            checked={deliveryType === "home"}
            onChange={() => setDeliveryType("home")}
          />
          <label className="form-check-label" htmlFor="home">
            হোম ডেলিভারি (৳22 প্রতি কেজি)
          </label>
        </div>

        {deliveryType === "home" && (
          <div className="mt-3">
            <label htmlFor="address" className="form-label">
              বাসার ঠিকানা দিন
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="আপনার বাসার ঠিকানা"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        )}

        {deliveryType === "point" && (
          <div className="mt-3">
            <label htmlFor="pointAddress" className="form-label">
              পয়েন্ট ঠিকানা দিন
            </label>
            <input
              type="text"
              className="form-control"
              id="pointAddress"
              placeholder="পয়েন্ট ঠিকানা"
              value={pointAddress}
              onChange={(e) => setPointAddress(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="mt-3">
        <p>অফার ডেলিভারি সময়: {estimatedDelivery}</p>
      </div>

      <div className="mt-5 text-center">
        <h4>মোট প্রাইস: ৳{calculateTotal()}</h4>
        <button
          className="btn btn-success px-5 py-2"
          onClick={handleOrder}
          disabled={isSubmitting}
          style={{ fontSize: "1.25rem", fontWeight: "700", borderRadius: "10px" }}
        >
          {isSubmitting ? "অর্ডার প্রক্রিয়াধীন..." : "অর্ডার কনফার্ম করুন"}
        </button>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={handleModalClose}>
        <h2 style={{ marginTop: "2rem" }}>অর্ডার নিশ্চিত!</h2>
        <p>আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে। ধন্যবাদ!</p>
        <button className="btn btn-success" onClick={handleModalClose}>
          বন্ধ করুন
        </button>
      </Modal>
    </div>
  );
};

export default OrderPage;
