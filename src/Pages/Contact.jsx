import React, { useState } from 'react'
import { CiMail } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // You can add API call here
  };

  return (
    <div className="container py-[90px]">
      <div className=" flex flex-row justify-between ">
        <div className="bg-white shadow-md rounded-lg w-[340px] flex flex-col gap-8 items-center py-[40px] justify-center">
          {/* Call To Us */}
          <div className="flex items-start gap-4">
            <div className="w-[40px] h-[40px] flex text-[20px] items-center justify-center rounded-full bg-red-500 text-white">
              <FaPhoneAlt />
            </div>
            <div className=" flex flex-col gap-6">
              <h3 className="font-medium font-poppins text-[16px] text-black">
                Call To Us
              </h3>
              <div className="flex flex-col gap-4 ">
                <p className="text-text2-color text-[14px] font-normal font-poppins">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-text2-color text-[14px] font-normal font-poppins">
                  Phone: +8801611112222
                </p>
              </div>
            </div>
          </div>

          <hr className="w-[95%] border-t border-gray-300" />

          {/* Write To Us */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-4">
              <div className="w-[40px] h-[40px] flex text-[20px] items-center justify-center rounded-full bg-red-500 text-white">
                <CiMail />
              </div>{" "}
              <h3 className="font-semibold text-lg text-gray-800">
                Write To Us
              </h3>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="text-gray-600 text-sm max-w-[250px]">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-gray-800 font-medium mt-1">
                Emails: customer@exclusive.com
              </p>
              <p className="text-gray-800 font-medium">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
        </div>
{/* left */}
{/* right */}
        <div className='w-[70%]'>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-3xl bg-white rounded-lg p-6 space-y-6"
          >
            {/* Inputs Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone *"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            {/* Textarea */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact