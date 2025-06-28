import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import {
  MdLocalMall,
  MdOutlineCancel,
  MdOutlineFavoriteBorder,
  MdOutlineLocalMall,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { FaRegStar, FaUserAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
export const Navbar = () => {
  const [userAccount, setUserAccount] = useState(false);
const [wishlist, setWishlist]= useState(false)
const [cart, setcart]= useState(false)
  const navigate = useNavigate();
  const location = useLocation();

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

  /**
   *
   * todo : this will route wishlist page
   *
   * */

  const HandleWishlist = () => {
    navigate("/wishlist");
    setWishlist(!wishlist);
  };
  const HandleCart = () => {
    navigate("/cart");
    setcart(!cart);
  };

  const handleuserAccount = () => {
    setUserAccount(!userAccount);
  };

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
            <span
              className={`text-[32px] cursor-pointer ${
                location.pathname === "/wishlist" ? "text-red-500" : ""
              }`}
              onClick={HandleWishlist}
            >
              <MdOutlineFavoriteBorder />
            </span>

            <span
              className={`text-[32px] cursor-pointer ${
                location.pathname === "/cart" ? "text-red-500" : ""
              }`}
              onClick={HandleCart}
            >
              <MdOutlineShoppingCart />
            </span>

            {/* user jsx */}

            <span
              className={`text-[30px] cursor-pointer ${
                userAccount ? "text-red-400" : ""
              }`}
              onClick={handleuserAccount}
            >
              <FaUserAlt />
            </span>

            {/* user jsx */}
          </div>
          {userAccount && (
            <div className="absolute z-10 right-[132px] text-white top-[150px] font-poppins font-normal text-[14px] py-[18px] pl-[20px] pr-[12px] flex flex-col gap-y-[13px] bg-red-300 ">
              <div className="flex gap-[10px] p-1 items-center hover:translate-1  hover:bg-white hover:text-black transition-all ">
                <span className="text-[22px]">
                  <FiUser />
                </span>
                <h3>Manage My Account</h3>
              </div>
              <div className="flex gap-[10px] p-1 items-center hover:translate-1 hover:bg-white hover:text-black transition-all ">
                <span className="text-[22px]">
                  <MdOutlineLocalMall />
                </span>
                <h3>My Order</h3>
              </div>
              <div className="flex gap-[10px] p-1 items-center hover:translate-1 hover:bg-white hover:text-black transition-all ">
                <span className="text-[22px]">
                  <MdOutlineCancel />
                </span>
                <h3>My Collection</h3>
              </div>
              <div className="flex gap-[10px] p-1 items-center hover:translate-1  hover:bg-white hover:text-black transition-all">
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
