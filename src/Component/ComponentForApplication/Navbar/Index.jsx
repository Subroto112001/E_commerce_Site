import React, { useState } from "react";
import {
  NavLink,
  ServerRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import {
  MdOutlineCancel,
  MdOutlineFavoriteBorder,
  MdOutlineLocalMall,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { FaRegStar, FaUserAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { RiMenu3Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
export const Navbar = () => {
  const [userAccount, setUserAccount] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [cart, setcart] = useState(false);
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
  const handleMyAccount = () => {
    setuseraccount(!useraccount);
  };

  const [search, setSearch] = useState(false);

  const handleSerachbar = () => {
    setSearch(!search);
  };

  const [navicon, setnavicon] = useState(false);
  const handleNavItem = () => {
    setnavicon(!navicon);
    console.log(navicon);
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
        <div className={`hidden relative md:block `}>
          <ul className={` flex flex-row items-center  p-5 gap-[48px]`}>
            {navItem.map((item) => {
              return (
                <li
                  key={item.id}
                  className="font-normal text-[16px] font-poppins capitalize menuUnderLineBar "
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
        <div className={`flex gap-[24px] justify-end items-end`}>
          <div className={`${search ? "block" : "hidden"} sm:block relative `}>
            <input
              type="search"
              placeholder="What are you looking for?"
              className="bg-secondary_color py-[8px] sm:py-[10px] pl-[20px] pr-[70px] w-[180px] sm:w-[300px] rounded  text-[12px] font-normal font-poppins"
            />
            <span
              className="absolute top-[50%]  -translate-y-1/2 right-3.5  sm:top-[50%] sm:right-[5%] text-[24px] cursor-pointer"
              onClick={handleSerachbar}
            >
              <CiSearch />
            </span>
          </div>
          <div
            className={`${
              search ? "hidden" : "flex"
            } sm:flex  gap-[7px] justify-center items-center relative`}
          >
            <span
              className={` text-[28px] cursor-pointer ${
                location.pathname === "/wishlist" ? "text-red-500" : ""
              }`}
              onClick={HandleWishlist}
            >
              <MdOutlineFavoriteBorder />
            </span>

            <span
              className={`text-[28px] cursor-pointer ${
                location.pathname === "/cart" ? "text-red-500" : ""
              }`}
              onClick={HandleCart}
            >
              <MdOutlineShoppingCart />
            </span>

            {/* user jsx */}

            <span
              className={`text-[28px] p-1 ${
                location.pathname === "/account"
                  ? "bg-red-400 rounded-full text-white"
                  : ""
              } cursor-pointer ${userAccount ? "text-red-400" : ""}`}
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
                <NavLink to={"/account/profile"} onClick={handleMyAccount}>
                  Manage My Account
                </NavLink>
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
        {/* mobile menu toggler */}

        <div className=" flex md:hidden gap-2.5 ">
          <span
            className={`text-2xl sm:hidden p-1 rounded duration-300 transition-all cursor-pointer hover:bg-gray-300 ${
              search ? "hidden" : "block"
            }`}
            onClick={handleSerachbar}
          >
            <IoIosSearch />
          </span>
          <div className="relative w-[30px] h-[30px] flex items-center justify-center">
            <span
              className="text-2xl md:hidden p-1 rounded duration-300 transition-all cursor-pointer hover:bg-gray-300"
              onClick={handleNavItem}
            >
              {navicon ? <RxCrossCircled /> : <RiMenu3Line />}
            </span>
            <div className={`${navicon ? "block" : "hidden"} relative`}>
              <ul
                className={` flex flex-col items-center gap-[10px] p-5 rounded absolute right-[4px] top-5 
  z-10  bg-gray-300`}
              >
                {navItem.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="font-normal text-[16px] font-poppins capitalize menuUnderLineBar "
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
          </div>
        </div>
        {/* mobile menu toggler */}
      </div>
    </div>
  );
};
