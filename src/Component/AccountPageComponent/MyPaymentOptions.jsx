import React, { useState } from "react";

const MyPaymentOptions = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "visa",
      cardNumber: "**** **** **** 4532",
      expiryDate: "12/27",
      cardHolder: "SUBROTO KUMAR BARMAN",
      isDefault: true,
    },
    {
      id: 2,
      type: "mastercard",
      cardNumber: "**** **** **** 8765",
      expiryDate: "09/26",
      cardHolder: "SUBROTO KUMAR BARMAN",
      isDefault: false,
    },
    {
      id: 3,
      type: "paypal",
      email: "subroto.kumar.barman@email.com",
      isDefault: false,
    },
  ]);

  const getCardIcon = (type) => {
    switch (type) {
      case "visa":
        return (
          <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white text-[10px] font-bold italic">
              VISA
            </span>
          </div>
        );
      case "mastercard":
        return (
          <div className="w-12 h-8 flex items-center justify-center">
            <div className="relative">
              <div className="w-5 h-5 bg-red-500 rounded-full"></div>
              <div className="w-5 h-5 bg-yellow-500 rounded absolute top-0 left-3 opacity-80"></div>
            </div>
          </div>
        );
      case "paypal":
        return (
          <div className="w-12 h-8 bg-blue-800 rounded flex items-center justify-center">
            <span className="text-white text-[9px] font-bold">PayPal</span>
          </div>
        );
      case "amex":
        return (
          <div className="w-12 h-8 bg-blue-400 rounded flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">AMEX</span>
          </div>
        );
      default:
        return (
          <div className="w-12 h-8 bg-gray-400 rounded flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
        );
    }
  };

  const handleSetDefault = (id) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    );
  };

  return (
    <div className="mt-[40px]">
      <div className="flex flex-row justify-between items-center mb-6">
        <h1 className="text-[20px] font-poppins font-medium text-Secondary2_color">
          My Payment Options
        </h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-Secondary2_color text-white rounded-lg text-[14px] font-poppins font-medium hover:bg-red-600 transition-colors">
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Payment Method
        </button>
      </div>

      {paymentMethods.length === 0 ? (
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
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <p className="text-gray-500 text-[16px] font-poppins">
            No payment methods saved yet.
          </p>
          <p className="text-gray-400 text-[14px] font-poppins mt-1">
            Add a payment method for faster checkout.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`border  p-4 shadow-sm hover:shadow-md transition-shadow ${
                method.isDefault
                  ? "border-Secondary2_color bg-red-50"
                  : "border-gray-200"
              }`}
            >
              <div className="flex flex-row justify-between items-start">
                <div className="flex items-start gap-4">
                  {/* Card Icon */}
                  <div className="mt-1">{getCardIcon(method.type)}</div>

                  {/* Card Details */}
                  <div>
                    {method.type === "paypal" ? (
                      <>
                        <h3 className="text-[16px] font-poppins font-medium text-text2-color">
                          PayPal
                        </h3>
                        <p className="text-[14px] font-poppins text-gray-500 mt-1">
                          {method.email}
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-[16px] font-poppins font-medium text-text2-color capitalize">
                          {method.type} {method.cardNumber}
                        </h3>
                        <div className="flex items-center gap-4 mt-1 text-[14px] font-poppins text-gray-500">
                          <p>Expires: {method.expiryDate}</p>
                          <p>{method.cardHolder}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Default Badge */}
                {method.isDefault && (
                  <span className="bg-Secondary2_color text-white text-[11px] px-2 py-1 rounded font-poppins">
                    Default
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row justify-between items-center mt-4 pt-3 border-t border-gray-200">
                <div className="flex gap-3">
                  <button className="text-[13px] font-poppins text-Secondary2_color hover:underline flex items-center gap-1">
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
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Edit
                  </button>
                  <button className="text-[13px] font-poppins text-red-500 hover:underline flex items-center gap-1">
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
                {!method.isDefault && (
                  <button
                    onClick={() => handleSetDefault(method.id)}
                    className="text-[13px] font-poppins text-blue-600 hover:underline"
                  >
                    Set as Default
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Security Notice */}
      <div className="mt-8 p-4 bg-blue-50  border border-blue-200">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-blue-600 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <div>
            <h4 className="text-[14px] font-poppins font-medium text-blue-800">
              Your payment information is secure
            </h4>
            <p className="text-[13px] font-poppins text-blue-600 mt-1">
              We use industry-standard encryption to protect your payment
              details. Your full card number is never stored on our servers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPaymentOptions;
