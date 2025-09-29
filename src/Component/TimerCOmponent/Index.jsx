import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  // The date you want to count down to (example: 2025 June 20)
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
    <div className="flex gap-4 text-center">
      <div>
        <div className="text-xl md:text-3xl font-bold">{time.days}</div>
        <div className="text-sm">Days</div>
      </div>
      <div className="text-xl md:text-3xl text-red-400">:</div>
      <div>
        <div className="text-xl md:text-3xl font-bold">{time.hours}</div>
        <div className="text-sm">Hours</div>
      </div>
      <div className="text-xl md:text-3xl text-red-400">:</div>
      <div>
        <div className="text-xl md:text-3xl font-bold">{time.minutes}</div>
        <div className="text-sm">Minutes</div>
      </div>
      <div className="text-xl md:text-3xl text-red-400">:</div>
      <div>
        <div className="text-xl md:text-3xl font-bold">{time.seconds}</div>
        <div className="text-sm">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
