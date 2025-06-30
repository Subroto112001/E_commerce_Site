import React from "react";

const CheckOut = () => {
  return (
    <div className="container">
      {/* header */}
      <div className="mt-[80px]">
        <h3 className="text-[14px] font-poppins font-normal text-text1_color">
          Account / My Account / Product / View Cart /{" "}
          <span className="text-black">Checkout</span>
        </h3>
      </div>
      {/* billing part */}
      <div className="mt-[80px]">
        <h3 className="text-[36px] font-medium font-inter text-black">
          Billing Details
        </h3>
        <div className="flex flex-col mt-12 w-[470px] gap-8">
          {/* first name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fristname"
              className="font-normal font-poppins text-[16px] text-text1_color"
            >
              First Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className="rounded bg-secondary_color px-2 py-5 text-[14px] font-poppins"
            />
          </div>
          {/* company name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="companyname"
              className="font-normal font-poppins text-[16px] text-text1_color"
            >
              Company Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className="rounded bg-secondary_color px-2 py-5 text-[14px] font-poppins"
            />
          </div>
          {/* company name */}
          {/* street address */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="companyname"
              className="font-normal font-poppins text-[16px] text-text1_color"
            >
              Street Address <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className="rounded bg-secondary_color px-2 py-5 text-[14px] font-poppins"
            />
          </div>
          {/* street address */}
          {/* Apartment address */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="companyname"
              className="font-normal font-poppins text-[16px] text-text1_color"
            >
              Apartment, floor, etc.{" "}
            </label>
            <input
              type="text"
              className="rounded bg-secondary_color px-2 py-5 text-[14px] font-poppins"
            />
          </div>
          {/* Apartment address */}
          {/* Town/City address */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="companyname"
              className="font-normal font-poppins text-[16px] text-text1_color"
            >
              Town/City<span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className="rounded bg-secondary_color px-2 py-5 text-[14px] font-poppins"
            />
          </div>
          {/* Town/City address */}
          {/*Phone Number  */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="companyname"
              className="font-normal font-poppins text-[16px] text-text1_color"
            >
              Phone Number<span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className="rounded bg-secondary_color px-2 py-5 text-[14px] font-poppins"
            />
          </div>
          {/* Phone Number */}
          {/*Email Address  */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="companyname"
              className="font-normal font-poppins text-[16px] text-text1_color"
            >
              Email Address<span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              className="rounded bg-secondary_color px-2 py-5 text-[14px] font-poppins"
            />
          </div>
          {/* Email Address */}

          <div className="flex flex-row items-center gap-4">
            <input type="checkbox" className="w-[24px] h-[24px] text-Secondary2_color "/>
            <h3 className="font-poppins font-normal text-[16px] text-black">Save this information for faster check-out next time</h3>{" "}
          </div>
        </div>
      </div>
      {/* billing part */}
      {/* header */}
    </div>
  );
};

export default CheckOut;
