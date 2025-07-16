import React from "react";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg-gradient-to-br from-amber-50 to-white py-16 px-4 md:px-10 mt-24"
    >
      <div className="max-w-4xl mx-auto shadow-xl rounded-3xl p-8 bg-white border border-yellow-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-600 border-b-4 border-yellow-400 inline-block pb-2 mb-2">
            সাধারণ প্রশ্নাবলী (FAQ)
          </h2>
     
          <p className="text-gray-500 text-base italic">
            💬 আপনার যেকোনো সাধারণ প্রশ্নের উত্তর এখানে পেয়ে যাবেন
          </p>
        </div>

        <div className="accordion" id="faqAccordion">
          {/* ১ */}
          <div className="accordion-item border border-yellow-100 rounded-xl mb-4 shadow-md bg-white">
            <h2 className="accordion-header" id="heading1">
              <button
                className="accordion-button text-yellow-800 font-semibold bg-yellow-50"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                ১. 🥭 আপনাদের আমগুলো কেমন হবে?
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse show"
              aria-labelledby="heading1"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-gray-700">
                আমাদের নিজস্ব বাগানের আম! তাই কোয়ালিটি নিয়ে কোন চিন্তা করতে হবে না ইনশাল্লাহ! ❤️
              </div>
            </div>
          </div>

          {/* ২ */}
          <div className="accordion-item border border-yellow-100 rounded-xl mb-4 shadow-md bg-white">
            <h2 className="accordion-header" id="heading2">
              <button
                className="accordion-button collapsed text-yellow-800 font-semibold bg-yellow-50"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                ২. 🛒 আমি কিভাবে অর্ডার করতে পারি?
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              aria-labelledby="heading2"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-gray-700">
                আপনি আমাদের সাইটের "Products" সেকশনে গিয়ে আপনার পছন্দের আম নির্বাচন করে, "অর্ডার করুন" বাটনে ক্লিক করে সহজেই অর্ডার করতে পারেন। এছাড়া আপনি আমাদের ফোন নম্বরে যোগাযোগ করেও অর্ডার করতে পারেন।
              </div>
            </div>
          </div>

          {/* ৩ */}
          <div className="accordion-item border border-yellow-100 rounded-xl mb-4 shadow-md bg-white">
            <h2 className="accordion-header" id="heading3">
              <button
                className="accordion-button collapsed text-yellow-800 font-semibold bg-yellow-50"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                ৩. 💳 কি ধরণের পেমেন্ট অপশন রয়েছে?
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse"
              aria-labelledby="heading3"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-gray-700">
                আমাদের পেমেন্ট অপশনে রয়েছে বিকাশ, রকেট, নগদ, ক্রেডিট/ডেবিট কার্ড বা কুরিয়ার ডেলিভারি পদ্ধতি। আপনি আপনার সুবিধামতো পেমেন্ট মেথড নির্বাচন করতে পারবেন।
              </div>
            </div>
          </div>

          {/* ৪ */}
          <div className="accordion-item border border-yellow-100 rounded-xl mb-4 shadow-md bg-white">
            <h2 className="accordion-header" id="heading4">
              <button
                className="accordion-button collapsed text-yellow-800 font-semibold bg-yellow-50"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
              >
                ৪. 💰 প্রোডাক্টের দাম কি ঠিক থাকবে?
              </button>
            </h2>
            <div
              id="collapse4"
              className="accordion-collapse collapse"
              aria-labelledby="heading4"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-gray-700">
                আমাদের প্রোডাক্টের দাম সিজন অনুযায়ী পরিবর্তিত হতে পারে, তবে আমরা সর্বদা সঠিক দাম এবং গুণগত মান নিশ্চিত করার চেষ্টা করি। কোনো পরিবর্তন হলে সাইটে তা আপডেট করা হবে।
              </div>
            </div>
          </div>

          {/* ৫ */}
          <div className="accordion-item border border-yellow-100 rounded-xl mb-4 shadow-md bg-white">
            <h2 className="accordion-header" id="heading5">
              <button
                className="accordion-button collapsed text-yellow-800 font-semibold bg-yellow-50"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse5"
                aria-expanded="false"
                aria-controls="collapse5"
              >
                ৫. 🚚 অর্ডার দেওয়ার পর কি আমি শিপিং সম্পর্কে জানাতে পারব?
              </button>
            </h2>
            <div
              id="collapse5"
              className="accordion-collapse collapse"
              aria-labelledby="heading5"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-gray-700">
                হ্যাঁ, আপনার অর্ডার দেওয়ার পর আমরা আপনাকে শিপিংয়ের সময় এবং ট্র্যাকিং তথ্য প্রদান করব। আপনি যে সময় এবং স্থান চেয়েছেন, তার উপর ভিত্তি করে শিপিং ব্যবস্থা করা হবে।
              </div>
            </div>
          </div>

          {/* ৬ */}
          <div className="accordion-item border border-yellow-100 rounded-xl mb-4 shadow-md bg-white">
            <h2 className="accordion-header" id="heading6">
              <button
                className="accordion-button collapsed text-yellow-800 font-semibold bg-yellow-50"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse6"
                aria-expanded="false"
                aria-controls="collapse6"
              >
                ৬. ❌ আমার অর্ডার যদি বাতিল করতে হয়, আমি কি করব?
              </button>
            </h2>
            <div
              id="collapse6"
              className="accordion-collapse collapse"
              aria-labelledby="heading6"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-gray-700">
                আপনি যদি আপনার অর্ডার বাতিল করতে চান, তাহলে আমাদের গ্রাহক সেবা নম্বরে বা ইমেইলে যোগাযোগ করুন। যত তাড়াতাড়ি সম্ভব আমরা বাতিল প্রক্রিয়া সম্পন্ন করব।
              </div>
            </div>
          </div>

          {/* ৭ */}
          <div className="accordion-item border border-yellow-100 rounded-xl mb-4 shadow-md bg-white">
            <h2 className="accordion-header" id="heading7">
              <button
                className="accordion-button collapsed text-yellow-800 font-semibold bg-yellow-50"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse7"
                aria-expanded="false"
                aria-controls="collapse7"
              >
                ৭. 📦 আপনার পণ্য কি সারা দেশে ডেলিভারি করা হয়?
              </button>
            </h2>
            <div
              id="collapse7"
              className="accordion-collapse collapse"
              aria-labelledby="heading7"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-gray-700">
                হ্যাঁ, আমরা সারা বাংলাদেশে ডেলিভারি করি। ডেলিভারি চার্জ এবং সময় অঞ্চলের উপর নির্ভর করবে।
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
