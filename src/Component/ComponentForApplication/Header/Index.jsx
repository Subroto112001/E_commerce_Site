import React from 'react'

const Header = () => {
  return (
    <div className=" bg-black_color container">
      <div className="flex justify-between py-[15px] items-center">
        <div className="fakadiv"></div>
        <div className="">
          <h3 className="text-white  text-[14px] font-normal font-poppins">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h3>
        </div>
        <div>
          <select
            name=""
            id=""
            className="text-white bg-transparent text-[14px] font-normal font-poppins"
          >
            <option value="#" className="text-black">
              English
            </option>
            <option value="#" className="text-black">
              Bangla
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header