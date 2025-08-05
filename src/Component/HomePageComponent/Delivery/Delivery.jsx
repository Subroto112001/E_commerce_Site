import React from 'react'
import { BiSupport } from 'react-icons/bi';
import { CiDeliveryTruck } from 'react-icons/ci';
import { MdOutlineSecurity } from 'react-icons/md';

const Delivery = () => {
  return (
    <div className="container">
      <div className="flex flex-row gap-[88px] items-center justify-center pt-[140px] pb-[140px]">
        <div className=" flex justify-center flex-col items-center">
          <div className="bg-black text-white text-[30px] w-[80px] h-[80px] rounded-full flex justify-center items-center border-[11px] border-[#C1C0C1] ">
            <CiDeliveryTruck />
          </div>
          <div className="flex flex-col justify-center items-center mt-[24px] gap-2">
            <h3 className="text-[20px] font-semibold font-poppins text-black ">
              FREE ABD FAST DELIVERY
            </h3>
            <h3 className="text-[14px] font-normal font-poppins text-black ">
              Free delivery for all orders over $140
            </h3>
          </div>
        </div>
        <div className=" flex justify-center flex-col items-center">
          <div className="bg-black text-white text-[30px] w-[80px] h-[80px] rounded-full flex justify-center items-center border-[11px] border-[#C1C0C1] ">
            <BiSupport />
          </div>
          <div className="flex flex-col justify-center items-center mt-[24px] gap-2">
            <h3 className="text-[20px] font-semibold font-poppins text-black ">
              24/7 CUSTOMER SERVICE
            </h3>
            <h3 className="text-[14px] font-normal font-poppins text-black ">
              Friendly 24/7 customer support
            </h3>
          </div>
        </div>
        <div className=" flex justify-center flex-col items-center">
          <div className="bg-black text-white text-[30px] w-[80px] h-[80px] rounded-full flex justify-center items-center border-[11px] border-[#C1C0C1] ">
            <MdOutlineSecurity />
          </div>
          <div className="flex flex-col justify-center items-center mt-[24px] gap-2">
            <h3 className="text-[20px] font-semibold font-poppins text-black ">
              MONEY BACK GUARANTEE
            </h3>
            <h3 className="text-[14px] font-normal font-poppins text-black ">
              We reurn money within 30 days
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;