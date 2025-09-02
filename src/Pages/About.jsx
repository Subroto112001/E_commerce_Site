import React from "react";
import BreadCrumb from "../Component/CommonComponent/BreadCrumb";
import OurStory from "../assets/About/ourStory.png";

import { aboutitem, deliveryItem } from "../Helpers/ItemProvider";
import Picture1 from "../assets/About/tom.png"
import Picture2 from "../assets/About/ella.png"
import Picture3 from "../assets/About/will.png"
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
const About = () => {
  deliveryItem;
  const aboutPerson = [
    {
      id: 1,
      image: Picture1,
      name: "Tom Cruies",
      desc: "Founder & Chairman",
    },
    {
      id: 1,
      image: Picture2,
      name: "Emma Watson",
      desc: "Founder & Chairman",
    },
    {
      id: 1,
      image: Picture3,
      name: "Will Smith",
      desc: "Founder & Chairman",
    },
  ];
  return (
    <div className="container">
      <div className="flex flex-col py-[80px]">
        <div className="pb-[42px]">
          <BreadCrumb />
        </div>
        {/* description */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[40px] ">
            <h3 className="text-[54px] font-semibold font-inter">Our Story</h3>
            <div className="flex flex-col gap-6">
              <p className="font-poppins text-[16px] font-normal max-w-[525px]">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p className="font-poppins text-[16px] font-normal max-w-[525px]">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
          <div className="w-[605px] h-[509px]">
            <img src={OurStory} alt={OurStory} />
          </div>
        </div>

        {/* description */}

        {/* card */}
        <div className="flex justify-between items-center mt-[80px]">
          {aboutitem.map((item) => (
            <div
              className="w-[270px] h-[230px] flex flex-col items-center gap-[24px] justify-center rounded border border-gray-500 hover:bg-Secondary2_color transition-all duration-300 group cursor-pointer"
              key={item.id}
            >
              <span className="text-2xl text-white w-[70px] h-[70px] flex items-center justify-center rounded-full bg-black border-6 border-gray-400 transition-all duration-300 group-hover:text-black group-hover:bg-white">
                {item.icon}
              </span>
              <div className="flex items-center justify-center flex-col gap-[12px]">
                <h3 className="font-bold text-[32px] font-inter text-black transition-all duration-300 group-hover:text-white">
                  {item.name}
                </h3>
                <p className="font-poppins font-normal text-[16px] text-black_color transition-all duration-300 group-hover:text-white">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* card */}
        {/* chairman card */}
        <div className=" flex mt-[140px] items-center justify-between">
          {aboutPerson.map((item) => (
            <div className="flex flex-col gap-8" key={item.id}>
              <div className="w-[370px] h-[430px]">
                <img
                  src={item.image}
                  alt={Picture1}
                  className="w-full h-full"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <h3 className=" font-medium font-inter text-[32px]">
                  {item.name}
                </h3>
                <p className="font-normal font-poppins text-[16px] text-black italic">
                  {item.desc}
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <span>
                  <CiTwitter />
                </span>
                <span>
                  <CiInstagram />
                </span>
                <span>
                  <CiLinkedin />
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* chairman card */}
        {/* dellivery card */}
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
        {/* dellivery card */}
      </div>
    </div>
  );
};

export default About;
