import React from 'react'
import { BiSupport } from 'react-icons/bi';
import { CiDeliveryTruck } from 'react-icons/ci';
import { MdOutlineSecurity } from 'react-icons/md';

const Delivery = () => {
  const deliveryItem = [
    {
      id: 1,
      icon: <CiDeliveryTruck />,
      heading: "FREE ABD FAST DELIVERY",
      subHeading: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: <BiSupport />,
      heading: "24/7 CUSTOMER SERVICE",
      subHeading: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: <MdOutlineSecurity />,
      heading: "MONEY BACK GUARANTEE",
      subHeading: "We reurn money within 30 days",
    },
  ];
  return (
    <div className="container">
      <div className="flex flex-row gap-[88px] items-center justify-center pt-[140px] pb-[140px]">
        {deliveryItem.map((item) => (
          <div className=" flex justify-center flex-col items-center">
            <div className="bg-black text-white text-[30px] w-[80px] h-[80px] rounded-full flex justify-center items-center border-[11px] border-[#C1C0C1] ">
              {item.icon}
            </div>
            <div className="flex flex-col justify-center items-center mt-[24px] gap-2">
              <h3 className="text-[20px] font-semibold font-poppins text-black ">
               {item.heading}
              </h3>
              <h3 className="text-[14px] font-normal font-poppins text-black ">
               {item.subHeading}
              </h3>
            </div>
          </div>
       ))}
      
      </div>
    </div>
  );
};

export default Delivery;