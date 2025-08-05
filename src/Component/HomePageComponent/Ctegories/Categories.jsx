import React, { useEffect, useState } from "react";
import SoundBox from "../../../assets/Categories/Categories.png";

const Categories = () => {
const targetTime = new Date("2025-08-10T12:00:00").getTime();
  // State to store time values
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTime({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        // If time is up
        setTime({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div className="container pt-[140px]">
      <div className="p-[44px] bg-black flex flex-row items-center justify-between">
        <div className="left w-1/2">
          <div className="flex flex-col justify-center gap-8">
            <h3 className="text-Button1_color text-[16px] font-semibold font-poppins">
              Categories
            </h3>
            <p className="font-semibold text-[48px] font-inter text-white max-w-[443px] leading-[60px]">
              Enhance Your Music Experience
            </p>
            <div className="flex gap-[24px] flex-row">
              <div className="bg-white w-[62px] h-[62px] rounded-full flex flex-col justify-center items-center">
                <h3 className="text-[16px] text-text2-color font-poppins font-semibold">
                  {time.days}
                </h3>
                <h3 className="text-[11px] text-text2-color font-poppins font-normal">
                  Days
                </h3>
              </div>
              <div className="bg-white w-[62px] h-[62px] rounded-full flex flex-col justify-center items-center">
                <h3 className="text-[16px] text-text2-color font-poppins font-semibold">
                  {time.hours}
                </h3>
                <h3 className="text-[11px] text-text2-color font-poppins font-normal">
                  Hours
                </h3>
              </div>

              <div className="bg-white w-[62px] h-[62px] rounded-full flex flex-col justify-center items-center">
                <h3 className="text-[16px] text-text2-color font-poppins font-semibold">
                  {time.minutes}
                </h3>
                <h3 className="text-[11px] text-text2-color font-poppins font-normal">
                  Minutes
                </h3>
              </div>
              <div className="bg-white w-[62px] h-[62px] rounded-full flex flex-col justify-center items-center">
                <h3 className="text-[16px] text-text2-color font-poppins font-semibold">
                  {time.seconds}
                </h3>
                <h3 className="text-[11px] text-text2-color font-poppins font-normal">
                  Seconds
                </h3>
              </div>
            </div>
            <button className="w-[171px] cursor-pointer h-[56px] rounded bg-Button1_color text-white font-medium font-poppins text-[16px]">
              Buuy Now!
            </button>
          </div>
        </div>
        <div className="right w-1/2 ">
          <picture>
            <img src={SoundBox} alt={SoundBox} className="w-full h-full" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Categories;
