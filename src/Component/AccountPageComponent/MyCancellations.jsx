import React from "react";

const MyCancellations = () => {
  // Dummy data for cancelled orders
  const cancelledOrders = [
    {
      id: "CAN001",
      orderDate: "2026-01-15",
      cancelledDate: "2026-01-16",
      productName: "HAVIT HV-G92 Gamepad",
      productImage: "https://i.imgur.com/QkIa5tT.jpeg",
      quantity: 1,
      price: 120,
      reason: "Changed my mind",
      status: "Refunded",
    },
    {
      id: "CAN002",
      orderDate: "2026-01-10",
      cancelledDate: "2026-01-11",
      productName: "AK-900 Wired Keyboard",
      productImage: "https://i.imgur.com/3bXmNsN.jpeg",
      quantity: 2,
      price: 960,
      reason: "Found a better price elsewhere",
      status: "Refunded",
    },
    {
      id: "CAN003",
      orderDate: "2026-01-05",
      cancelledDate: "2026-01-06",
      productName: "IPS LCD Gaming Monitor",
      productImage: "https://i.imgur.com/ZANVnHE.jpeg",
      quantity: 1,
      price: 370,
      reason: "Ordered by mistake",
      status: "Refund Processing",
    },
    {
      id: "CAN004",
      orderDate: "2025-12-28",
      cancelledDate: "2025-12-29",
      productName: "RGB Liquid CPU Cooler",
      productImage: "https://i.imgur.com/Fy7Xk7t.jpeg",
      quantity: 1,
      price: 160,
      reason: "Delivery taking too long",
      status: "Refunded",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Refunded":
        return "bg-green-100 text-green-700";
      case "Refund Processing":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="mt-[40px]">
      <h1 className="text-[20px] font-poppins font-medium text-Secondary2_color mb-6">
        My Cancellations
      </h1>

      {cancelledOrders.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-[16px] font-poppins">
            You have no cancelled orders.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {cancelledOrders.map((order) => (
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
                        Order ID: {order.id}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-[12px] font-poppins font-medium ${getStatusColor(
                        order.status,
                      )}`}
                    >
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
                  </div>

                  <div className="flex flex-row justify-between items-end mt-3">
                    <div className="text-[13px] font-poppins text-gray-500">
                      <p>
                        <span className="text-gray-400">Ordered:</span>{" "}
                        {order.orderDate}
                      </p>
                      <p>
                        <span className="text-gray-400">Cancelled:</span>{" "}
                        {order.cancelledDate}
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
          Cancellation Summary
        </h3>
        <div className="flex flex-row gap-8 text-[14px] font-poppins">
          <p>
            <span className="text-gray-500">Total Cancellations:</span>{" "}
            <span className="font-medium">{cancelledOrders.length}</span>
          </p>
          <p>
            <span className="text-gray-500">Total Refunded:</span>{" "}
            <span className="font-medium text-green-600">
              $
              {cancelledOrders
                .filter((o) => o.status === "Refunded")
                .reduce((acc, o) => acc + o.price, 0)}
            </span>
          </p>
          <p>
            <span className="text-gray-500">Processing:</span>{" "}
            <span className="font-medium text-yellow-600">
              $
              {cancelledOrders
                .filter((o) => o.status === "Refund Processing")
                .reduce((acc, o) => acc + o.price, 0)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCancellations;
