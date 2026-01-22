import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

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
    // API logic here
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-[90px] font-noto-serif">
      <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
        {/* Left Side: Contact Information */}
        <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-md p-8 border border-gray-100">
          {/* Call To Us */}
          <section className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex text-lg items-center justify-center rounded-full bg-Secondary2_color text-white">
                <FaPhoneAlt />
              </div>
              <h3 className="font-medium text-[16px] text-black">Call To Us</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p>We are available 24/7, 7 days a week.</p>
              <p className="font-semibold">Phone: +8801611112222</p>
            </div>
          </section>

          <hr className="border-t border-gray-200 mb-8" />

          {/* Write To Us */}
          <section className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex text-xl items-center justify-center rounded-full bg-Secondary2_color text-white">
                <CiMail />
              </div>
              <h3 className="font-medium text-[16px] text-black">
                Write To Us
              </h3>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p className="font-semibold">Emails: customer@exclusive.com</p>
              <p className="font-semibold">Emails: support@exclusive.com</p>
            </div>
          </section>

          <hr className="border-t border-gray-200 mb-8" />

          {/* New: Visit Us Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex text-xl items-center justify-center rounded-full bg-Secondary2_color text-white">
                <HiOutlineLocationMarker />
              </div>
              <h3 className="font-medium text-[16px] text-black">Visit Us</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Exclusive Headquarters</p>
              <p>123 Commerce Plaza, Dhaka, Bangladesh</p>
            </div>
          </section>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-md p-6 md:p-10 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded bg-[#F5F5F5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-Secondary2_color transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded bg-[#F5F5F5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-Secondary2_color transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded bg-[#F5F5F5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-Secondary2_color transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase">
                Message
              </label>
              <textarea
                name="message"
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
                rows="8"
                className="w-full rounded bg-[#F5F5F5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-Secondary2_color transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center md:justify-end">
              <button
                type="submit"
                className="w-full md:w-auto bg-Secondary2_color text-white px-10 py-4 rounded font-medium hover:bg-red-600 transition-all duration-300 shadow-md active:scale-95"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
