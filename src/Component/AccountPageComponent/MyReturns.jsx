import React from "react";

const MyReturns = () => {
  // Dummy data for returned orders
  const returnedOrders = [
    {
      id: "RET001",
      orderDate: "2026-01-10",
      returnRequestDate: "2026-01-15",
      productName: "HAVIT HV-G92 Gamepad",
      productImage: "https://i.imgur.com/QkIa5tT.jpeg",
      quantity: 1,
      price: 120,
      reason: "Product defective",
      status: "Return Approved",
      refundAmount: 120,
    },
    {
      id: "RET002",
      orderDate: "2026-01-05",
      returnRequestDate: "2026-01-12",
      productName: "AK-900 Wired Keyboard",
      productImage: "https://i.imgur.com/3bXmNsN.jpeg",
      quantity: 1,
      price: 480,
      reason: "Wrong item received",
      status: "Return in Transit",
      refundAmount: 480,
    },
    {
      id: "RET003",
      orderDate: "2025-12-28",
      returnRequestDate: "2026-01-02",
      productName: "IPS LCD Gaming Monitor",
      productImage: "https://i.imgur.com/ZANVnHE.jpeg",
      quantity: 1,
      price: 370,
      reason: "Item damaged during shipping",
      status: "Refund Completed",
      refundAmount: 370,
    },
    {
      id: "RET004",
      orderDate: "2025-12-20",
      returnRequestDate: "2025-12-25",
      productName: "RGB Liquid CPU Cooler",
      productImage: "https://i.imgur.com/Fy7Xk7t.jpeg",
      quantity: 2,
      price: 320,
      reason: "Not as described",
      status: "Refund Completed",
      refundAmount: 320,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Return Approved":
        return "bg-blue-100 text-blue-700";
      case "Return in Transit":
        return "bg-orange-100 text-orange-700";
      case "Refund Completed":
        return "bg-green-100 text-green-700";
      case "Return Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Return Approved":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "Return in Transit":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
          </svg>
        );
      case "Refund Completed":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-[40px]">
      <h1 className="text-[20px] font-poppins font-medium text-Secondary2_color mb-6">
        My Returns
      </h1>

      {returnedOrders.length === 0 ? (
        <div className="text-center py-10">
          <svg
            className="w-16 h-16 mx-auto text-gray-300 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
            />
          </svg>
          <p className="text-gray-500 text-[16px] font-poppins">
            You have no return requests.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {returnedOrders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-row gap-4">
                {/* Product Image */}
                <div className="w-[100px] h-[100px] bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <img
                    src={order.productImage}
                    alt={order.productName}
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/100x100?text=Product";
                    }}
                  />
                </div>

                {/* Order Details */}
                <div className="flex-1">
                  <div className="flex flex-row justify-between items-start">
                    <div>
                      <h3 className="text-[16px] font-poppins font-medium text-text2-color">
                        {order.productName}
                      </h3>
                      <p className="text-[14px] font-poppins text-gray-500 mt-1">
                        Return ID: {order.id}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-[12px] font-poppins font-medium flex items-center gap-1 ${getStatusColor(
                        order.status,
                      )}`}
                    >
                      {getStatusIcon(order.status)}
                      {order.status}
                    </span>
                  </div>

                  <div className="flex flex-row gap-6 mt-3 text-[14px] font-poppins text-gray-600">
                    <p>
                      <span className="text-gray-400">Qty:</span>{" "}
                      {order.quantity}
                    </p>
                    <p>
                      <span className="text-gray-400">Price:</span> $
                      {order.price}
                    </p>
                    <p>
                      <span className="text-gray-400">Refund:</span>{" "}
                      <span className="text-green-600 font-medium">
                        ${order.refundAmount}
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-row justify-between items-end mt-3">
                    <div className="text-[13px] font-poppins text-gray-500">
                      <p>
                        <span className="text-gray-400">Ordered:</span>{" "}
                        {order.orderDate}
                      </p>
                      <p>
                        <span className="text-gray-400">Return Requested:</span>{" "}
                        {order.returnRequestDate}
                      </p>
                    </div>
                    <p className="text-[13px] font-poppins text-gray-500">
                      <span className="text-gray-400">Reason:</span>{" "}
                      {order.reason}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Summary Section */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-[16px] font-poppins font-medium text-text2-color mb-2">
          Return Summary
        </h3>
        <div className="flex flex-row gap-8 text-[14px] font-poppins">
          <p>
            <span className="text-gray-500">Total Returns:</span>{" "}
            <span className="font-medium">{returnedOrders.length}</span>
          </p>
          <p>
            <span className="text-gray-500">Refund Completed:</span>{" "}
            <span className="font-medium text-green-600">
              $
              {returnedOrders
                .filter((o) => o.status === "Refund Completed")
                .reduce((acc, o) => acc + o.refundAmount, 0)}
            </span>
          </p>
          <p>
            <span className="text-gray-500">Pending Refund:</span>{" "}
            <span className="font-medium text-orange-600">
              $
              {returnedOrders
                .filter((o) => o.status !== "Refund Completed")
                .reduce((acc, o) => acc + o.refundAmount, 0)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyReturns;
