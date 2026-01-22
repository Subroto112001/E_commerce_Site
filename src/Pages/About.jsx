import React from "react";
import BreadCrumb from "../Component/CommonComponent/BreadCrumb";
import OurStory from "../assets/About/ourStory.png";
import { aboutitem, deliveryItem } from "../Helpers/ItemProvider";
import Picture1 from "../assets/About/tom.png";
import Picture2 from "../assets/About/ella.png";
import Picture3 from "../assets/About/will.png";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import "../Style/About.css"
const About = () => {
  const aboutPerson = [
    { id: 1, image: Picture1, name: "Tom Cruise", desc: "Founder & Chairman" },
    { id: 2, image: Picture2, name: "Emma Watson", desc: "Managing Director" },
    { id: 3, image: Picture3, name: "Will Smith", desc: "Product Designer" },
  ];

  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="flex flex-col py-10 md:py-[80px]">
        <div className="pb-[30px] md:pb-[42px]">
          <BreadCrumb />
        </div>

        {/* Description Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 animate-fadeInUp">
          <div className="flex flex-col gap-6 md:gap-[40px] w-full lg:w-1/2">
            <h3 className="text-4xl md:text-[54px] font-semibold font-inter">
              Our Story
            </h3>
            <div className="flex flex-col gap-6">
              <p className="font-poppins text-sm md:text-[16px] font-normal max-w-[525px]">
                Launched in 2015, Exclusive is South Asia’s premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions.
              </p>
              <p className="font-poppins text-sm md:text-[16px] font-normal max-w-[525px]">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assortment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[605px] h-auto md:h-[509px]">
            <img
              src={OurStory}
              alt="Our Story"
              className="w-full h-full object-cover rounded-sm shadow-sm transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between items-center gap-6 mt-20 md:mt-[80px]">
          {aboutitem.map((item, index) => (
            <div
              key={item.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fadeInUp w-full lg:w-[270px] h-[230px] flex flex-col items-center gap-[24px] justify-center rounded border border-gray-500 hover:bg-Secondary2_color transition-all duration-300 group cursor-pointer"
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

        {/* Chairman Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 md:mt-[140px]">
          {aboutPerson.map((item, index) => (
            <div
              className="flex flex-col gap-6 animate-fadeInUp"
              key={item.id}
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="w-full h-[430px] bg-[#F5F5F5] rounded flex items-end justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full object-contain transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium font-inter text-[32px]">
                  {item.name}
                </h3>
                <p className="font-normal font-poppins text-[16px] text-black italic">
                  {item.desc}
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <CiTwitter className="text-xl hover:text-Secondary2_color cursor-pointer transition-colors" />
                <CiInstagram className="text-xl hover:text-Secondary2_color cursor-pointer transition-colors" />
                <CiLinkedin className="text-xl hover:text-Secondary2_color cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-[88px] items-center justify-center pt-24 md:pt-[140px] pb-[100px] md:pb-[140px]">
          {deliveryItem.map((item, index) => (
            <div
              key={item.id}
              className="flex justify-center flex-col items-center animate-fadeInUp"
              style={{ animationDelay: `${(index + 7) * 100}ms` }}
            >
              <div className="bg-black text-white text-[30px] w-[80px] h-[80px] rounded-full flex justify-center items-center border-[11px] border-[#C1C0C1] transition-transform duration-300 hover:rotate-12">
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
    </div>
  );
};

export default About;
