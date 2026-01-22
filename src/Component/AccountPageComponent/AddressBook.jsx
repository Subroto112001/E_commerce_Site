import React, { useState } from "react";

const AddressBook = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      isDefault: true,
      name: "Subroto Kumar Barman",
      phone: "+1 (555) 123-4567",
      address: "123 Main Street, Apt 4B",
      city: "Kingston",
      state: "New York",
      zipCode: "12401",
      country: "United States",
    },
    {
      id: 2,
      type: "Work",
      isDefault: false,
      name: "Subroto Kumar Barman",
      phone: "+1 (555) 987-6543",
      address: "456 Business Park, Suite 200",
      city: "Albany",
      state: "New York",
      zipCode: "12207",
      country: "United States",
    },
    {
      id: 3,
      type: "Other",
      isDefault: false,
      name: "Subroto Kumar Barman",
      phone: "+1 (555) 456-7890",
      address: "789 Oak Avenue",
      city: "New York City",
      state: "New York",
      zipCode: "10001",
      country: "United States",
    },
  ]);

  const getTypeIcon = (type) => {
    switch (type) {
      case "Home":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        );
      case "Work":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        );
    }
  };

  const handleSetDefault = (id) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      })),
    );
  };

  return (
    <div className="mt-[40px]">
      <div className="flex flex-row justify-between items-center mb-6">
        <h1 className="text-[20px] font-poppins font-medium text-Secondary2_color">
          Address Book
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
          Add New Address
        </button>
      </div>

      {addresses.length === 0 ? (
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-gray-500 text-[16px] font-poppins">
            No addresses saved yet.
          </p>
          <p className="text-gray-400 text-[14px] font-poppins mt-1">
            Add an address for faster checkout.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className={`border  p-4 shadow-sm hover:shadow-md transition-shadow relative ${
                address.isDefault
                  ? "border-Secondary2_color bg-red-50"
                  : "border-gray-200"
              }`}
            >
              {/* Default Badge */}
              {address.isDefault && (
                <span className="absolute top-3 right-3 bg-Secondary2_color text-white text-[11px] px-2 py-1 rounded font-poppins">
                  Default
                </span>
              )}

              {/* Address Type Header */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`p-2 rounded-full ${
                    address.isDefault
                      ? "bg-Secondary2_color text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {getTypeIcon(address.type)}
                </span>
                <h3 className="text-[16px] font-poppins font-medium text-text2-color">
                  {address.type}
                </h3>
              </div>

              {/* Address Details */}
              <div className="space-y-1 text-[14px] font-poppins text-gray-600">
                <p className="font-medium text-text2-color">{address.name}</p>
                <p className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {address.phone}
                </p>
                <p>{address.address}</p>
                <p>
                  {address.city}, {address.state} {address.zipCode}
                </p>
                <p>{address.country}</p>
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
                    Delete
                  </button>
                </div>
                {!address.isDefault && (
                  <button
                    onClick={() => handleSetDefault(address.id)}
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
    </div>
  );
};

export default AddressBook;
