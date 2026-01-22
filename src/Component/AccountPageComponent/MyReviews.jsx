import React, { useState } from "react";

const MyReviews = () => {
  // Dummy data for reviews
  const [reviews] = useState([
    {
      id: 1,
      productName: "HAVIT HV-G92 Gamepad",
      productImage: "https://i.imgur.com/QkIa5tT.jpeg",
      rating: 5,
      reviewDate: "2026-01-18",
      reviewTitle: "Excellent Gaming Controller!",
      reviewText:
        "This gamepad exceeded my expectations. The ergonomic design fits perfectly in my hands, and the buttons are very responsive. Highly recommend for serious gamers!",
      helpful: 12,
      verified: true,
    },
    {
      id: 2,
      productName: "AK-900 Wired Keyboard",
      productImage: "https://i.imgur.com/3bXmNsN.jpeg",
      rating: 4,
      reviewDate: "2026-01-12",
      reviewTitle: "Great keyboard for the price",
      reviewText:
        "Really solid mechanical keyboard. The RGB lighting is beautiful and the keys have a satisfying click. Only minor issue is the cable could be a bit longer.",
      helpful: 8,
      verified: true,
    },
    {
      id: 3,
      productName: "IPS LCD Gaming Monitor",
      productImage: "https://i.imgur.com/ZANVnHE.jpeg",
      rating: 5,
      reviewDate: "2026-01-05",
      reviewTitle: "Perfect for gaming and work",
      reviewText:
        "The colors are vibrant and the response time is incredible. No ghosting at all during fast-paced games. Setup was easy and the stand is very sturdy.",
      helpful: 24,
      verified: true,
    },
    {
      id: 4,
      productName: "RGB Liquid CPU Cooler",
      productImage: "https://i.imgur.com/Fy7Xk7t.jpeg",
      rating: 3,
      reviewDate: "2025-12-20",
      reviewTitle: "Good but installation was tricky",
      reviewText:
        "The cooling performance is great and keeps my CPU at low temps. However, the installation instructions were not very clear. RGB effects look amazing though.",
      helpful: 5,
      verified: false,
    },
    {
      id: 5,
      productName: "Small BookShelf",
      productImage: "https://i.imgur.com/1R4pE1j.jpeg",
      rating: 4,
      reviewDate: "2025-12-15",
      reviewTitle: "Compact and stylish",
      reviewText:
        "Perfect for my small apartment. Assembly was straightforward and it looks great in my living room. Could hold more books than I expected.",
      helpful: 3,
      verified: true,
    },
  ]);

  // Render stars based on rating
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const getRatingColor = (rating) => {
    if (rating >= 4) return "text-green-600";
    if (rating >= 3) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="mt-[40px]">
      <h1 className="text-[20px] font-poppins font-medium text-Secondary2_color mb-6">
        My Reviews
      </h1>

      {/* Review Stats */}
      <div className="bg-gray-50  p-4 mb-6">
        <div className="flex flex-row gap-8 items-center">
          <div className="text-center">
            <p className="text-[28px] font-poppins font-bold text-text2-color">
              {reviews.length}
            </p>
            <p className="text-[14px] font-poppins text-gray-500">
              Total Reviews
            </p>
          </div>
          <div className="h-10 w-[1px] bg-gray-300"></div>
          <div className="text-center">
            <p className="text-[28px] font-poppins font-bold text-yellow-500">
              {(
                reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
              ).toFixed(1)}
            </p>
            <p className="text-[14px] font-poppins text-gray-500">
              Average Rating
            </p>
          </div>
          <div className="h-10 w-[1px] bg-gray-300"></div>
          <div className="text-center">
            <p className="text-[28px] font-poppins font-bold text-green-500">
              {reviews.reduce((acc, r) => acc + r.helpful, 0)}
            </p>
            <p className="text-[14px] font-poppins text-gray-500">
              Helpful Votes
            </p>
          </div>
        </div>
      </div>

      {reviews.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-[16px] font-poppins">
            You haven't written any reviews yet.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-gray-200  p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-row gap-4">
                {/* Product Image */}
                <div className="w-[80px] h-[80px] bg-gray-100 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <img
                    src={review.productImage}
                    alt={review.productName}
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/80x80?text=Product";
                    }}
                  />
                </div>

                {/* Review Details */}
                <div className="flex-1">
                  <div className="flex flex-row justify-between items-start">
                    <div>
                      <h3 className="text-[15px] font-poppins font-medium text-text2-color">
                        {review.productName}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {renderStars(review.rating)}
                        <span
                          className={`text-[14px] font-poppins font-medium ${getRatingColor(
                            review.rating,
                          )}`}
                        >
                          {review.rating}/5
                        </span>
                        {review.verified && (
                          <span className="bg-green-100 text-green-700 text-[11px] px-2 py-0.5 rounded font-poppins">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[13px] font-poppins text-gray-400">
                      {review.reviewDate}
                    </span>
                  </div>

                  <h4 className="text-[14px] font-poppins font-medium text-text2-color mt-3">
                    {review.reviewTitle}
                  </h4>
                  <p className="text-[13px] font-poppins text-gray-600 mt-1 leading-relaxed">
                    {review.reviewText}
                  </p>

                  <div className="flex flex-row justify-between items-center mt-4">
                    <div className="flex items-center gap-1 text-[13px] font-poppins text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                      <span>{review.helpful} people found this helpful</span>
                    </div>
                    <div className="flex gap-3">
                      <button className="text-[13px] font-poppins text-Secondary2_color hover:underline">
                        Edit
                      </button>
                      <button className="text-[13px] font-poppins text-red-500 hover:underline">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
