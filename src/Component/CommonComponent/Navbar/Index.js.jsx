import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdLocalMall, MdOutlineCancel, MdOutlineFavoriteBorder, MdOutlineLocalMall, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegStar, FaUserAlt, } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
export const Navbar = () => {


  const [userAccount, setUserAccount] = useState(false)

  const userRef = useRef(null);

  const navItem = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Contact ",
      path: "/contact",
    },
    {
      id: 3,
      name: "About ",
      path: "/about",
    },
    {
      id: 4,
      name: "Sign Up ",
      path: "/signup",
    },
  ];



  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (userRef.current.contains(e.target)) {
        setUserAccount(!userAccount);
      } else {
        setUserAccount(false);
        console.log("Nope");
      }
    });
  }, [userAccount]);
  // const handleuserAccount = () => {
  //   setUserAccount(!userAccount);
  // }
  return (
    <div className="container bg-white border-b-gray-500 border-b-[1px] ">
      <div className="flex justify-between items-center pt-[47px] pb-[23px]  ">
        <div>
          <h3 className="font-inter font-bold text-[24px] text-black_color cursor-pointer hover:text-text1_color">
            Exclusive
          </h3>
        </div>
        {/* nav item is here */}
        <div>
          <ul className=" flex items-center gap-[48px]">
            {navItem.map((item) => {
              return (
                <li
                  key={item.id}
                  className="font-normal text-[16px] font-poppins capitalize menuUnderLineBar"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "text-black"
                        : isActive
                        ? " text-red-600"
                        : "text-black"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        {/* nav item is here */}
        <div className="flex gap-[24px] justify-center items-center">
          <div className=" relative">
            <input
              type="search"
              placeholder="What are you looking for?"
              className="bg-secondary_color py-[10px] pl-[20px] pr-[70px] w-[300px] rounded  text=[12px] font-normal font-poppins"
            />
            <span className="absolute top-[30%] right-[5%] text-[24px]">
              <CiSearch />
            </span>
          </div>
          <div className="flex gap-[7px] justify-center items-center relative">
            <span className="text-[32px] cursor-pointer">
              <MdOutlineFavoriteBorder />
            </span>
            <span className="text-[32px] cursor-pointer">
              <MdOutlineShoppingCart />
            </span>

            <span
              className="text-[30px] cursor-pointer"
              // onClick={handleuserAccount}
              ref={userRef}
            >
              <FaUserAlt />
            </span>
          </div>
          {userAccount && (
            <div className="absolute right-[132px] top-[150px] font-poppins font-normal text-[14px] py-[18px] pl-[20px] pr-[12px] flex flex-col gap-y-[13px] bg-[rgba(0,0,0,0.26)] text-black">
              <div className="flex gap-[10px] items-center ">
                <span className="text-[22px]">
                  <FiUser />
                </span>
                <h3>Manage My Account</h3>
              </div>
              <div className="flex gap-[10px] items-center ">
                <span className="text-[22px]">
                  <MdOutlineLocalMall />
                </span>
                <h3>My Order</h3>
              </div>
              <div className="flex gap-[10px] items-center ">
                <span className="text-[22px]">
                  <MdOutlineCancel />
                </span>
                <h3>My Collection</h3>
              </div>
              <div className="flex gap-[10px] items-center ">
                <span className="text-[22px]">
                  <BiLogOut />
                </span>
                <h3>Log Out</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
