import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import {
  MdOutlineCancel,
  MdOutlineFavoriteBorder,
  MdOutlineLocalMall,
  MdOutlineShoppingCart,
  MdOutlineStarBorder,
} from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../../../Features/AllSlice/cartSlice";
import { selectWishlistCount } from "../../../Features/AllSlice/wishlistSlice";
import { useSearchProductsQuery } from "../../../Features/AllSlice/Api/ProductApi";

export const Navbar = () => {
  const [userAccount, setUserAccount] = useState(false);
  const [navicon, setnavicon] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Redux selectors for cart and wishlist counts
  const cartCount = useSelector(selectCartItemsCount);
  const wishlistCount = useSelector(selectWishlistCount);

  // Search products query (skip if empty)
  const { data: searchResults, isLoading: isSearching } =
    useSearchProductsQuery(searchQuery, {
      skip: searchQuery.length < 2,
    });

  const navItem = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Contact", path: "/contact" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Sign Up", path: "/signup" },
  ];

  // Close search results on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper to close all overlays
  const handleLinkClick = () => {
    setnavicon(false);
    setUserAccount(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSearchResults(true);
  };

  const handleProductClick = (product) => {
    navigate(`/product-details/${product.id}`, { state: { product } });
    setSearchQuery("");
    setShowSearchResults(false);
    setSearchOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/product?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearchResults(false);
      setSearchOpen(false);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-300 sticky top-0 z-50 font-noto-serif">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center py-4 md:pt-[47px] md:pb-[23px]">
          {/* Logo */}
          <div onClick={() => navigate("/")} className="z-[60]">
            <h3 className="font-inter font-bold text-[20px] md:text-[24px] text-black cursor-pointer select-none">
              Exclusive
            </h3>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:block">
            <ul className="flex flex-row items-center gap-[48px]">
              {navItem.map((item) => (
                <li
                  key={item.id}
                  className="font-normal text-[16px] font-poppins capitalize"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-Secondary2_color border-b-2 border-Secondary2_color pb-1 transition-all"
                        : "text-black hover:text-gray-600 transition-all"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:block relative" ref={searchRef}>
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSearchResults(true)}
                  className="w-[250px] xl:w-[300px] bg-gray-100 py-2 px-4 pr-10 rounded text-sm outline-none focus:ring-1 focus:ring-Secondary2_color"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <CiSearch className="text-xl text-gray-500" />
                </button>
              </div>

              {/* Desktop Search Results Dropdown */}
              {showSearchResults && searchQuery.length >= 2 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-[400px] overflow-y-auto z-50">
                  {isSearching ? (
                    <div className="p-4 text-center text-gray-500">
                      Searching...
                    </div>
                  ) : searchResults?.products?.length > 0 ? (
                    <>
                      {searchResults.products.slice(0, 6).map((product) => (
                        <div
                          key={product.id}
                          onClick={() => handleProductClick(product)}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                        >
                          <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-12 h-12 object-contain rounded bg-gray-100"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">
                              {product.title}
                            </p>
                            <p className="text-xs text-Secondary2_color">
                              ${product.price}
                            </p>
                          </div>
                        </div>
                      ))}
                      {searchResults.products.length > 6 && (
                        <button
                          type="submit"
                          className="w-full p-3 text-sm text-Secondary2_color hover:bg-gray-50 font-medium"
                        >
                          View all {searchResults.products.length} results
                        </button>
                      )}
                    </>
                  ) : (
                    <div className="p-4 text-center text-gray-500">
                      No products found
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 md:gap-4">
              {/* Mobile Search Toggle */}
              <button
                className="lg:hidden text-2xl p-1 active:scale-90 transition-transform"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <CiSearch />
              </button>

              {/* Wishlist Icon */}
              <span
                className={`relative text-2xl cursor-pointer p-1 transition-colors ${
                  location.pathname === "/wishlist"
                    ? "text-Secondary2_color"
                    : "text-black"
                }`}
                onClick={() => navigate("/wishlist")}
              >
                <MdOutlineFavoriteBorder />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-Secondary2_color text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {wishlistCount > 9 ? "9+" : wishlistCount}
                  </span>
                )}
              </span>

              {/* Cart Icon */}
              <span
                className={`relative text-2xl cursor-pointer p-1 transition-colors ${
                  location.pathname === "/cart"
                    ? "text-Secondary2_color"
                    : "text-black"
                }`}
                onClick={() => navigate("/cart")}
              >
                <MdOutlineShoppingCart />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-Secondary2_color text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </span>

              {/* USER ACCOUNT DROPDOWN */}
              <div className="relative">
                <button
                  className={`text-xl md:text-2xl p-1.5 rounded-full transition-all duration-300 ${
                    userAccount || location.pathname.includes("/account")
                      ? "bg-Secondary2_color text-white shadow-md"
                      : "text-black hover:bg-gray-100"
                  }`}
                  onClick={() => setUserAccount(!userAccount)}
                >
                  <FaUserAlt />
                </button>

                {userAccount && (
                  <>
                    {/* Backdrop to close dropdown on outside click */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setUserAccount(false)}
                    ></div>

                    <div className="absolute right-0 mt-4 w-[250px] bg-black/85 backdrop-blur-md text-white rounded-md py-4 px-2 z-20 flex flex-col gap-1 shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-200">
                      {/* Active Button Logic for Dropdown */}
                      {[
                        {
                          name: "Manage My Account",
                          path: "/account/profile",
                          icon: <FiUser />,
                        },
                        {
                          name: "My Order",
                          path: "/account/profile/product/viewcart/checkout",
                          icon: <MdOutlineLocalMall />,
                        },
                        {
                          name: "My Cancellations",
                          path: "/account/cancellations",
                          icon: <MdOutlineCancel />,
                        },
                        {
                          name: "My Reviews",
                          path: "/account/reviews",
                          icon: <MdOutlineStarBorder />,
                        },
                      ].map((link) => (
                        <NavLink
                          key={link.path}
                          to={link.path}
                          onClick={handleLinkClick}
                          className={({ isActive }) =>
                            `flex items-center gap-4 p-3 rounded transition-all duration-200 ${
                              isActive
                                ? "bg-Secondary2_color text-white"
                                : "hover:bg-white/10 text-gray-200"
                            }`
                          }
                        >
                          <span className="text-[22px]">{link.icon}</span>
                          <span className="text-[14px] font-poppins font-medium">
                            {link.name}
                          </span>
                        </NavLink>
                      ))}

                      {/* Logout Button */}
                      <button
                        className="flex items-center gap-4 p-3 mt-1 rounded text-gray-200 hover:bg-red-500/20 hover:text-red-400 transition-all duration-200 w-full text-left"
                        onClick={() => {
                          console.log("Logged Out");
                          handleLinkClick();
                        }}
                      >
                        <span className="text-[22px]">
                          <BiLogOut />
                        </span>
                        <span className="text-[14px] font-poppins font-medium">
                          Logout
                        </span>
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Mobile Hamburger Toggle */}
              <button
                className="md:hidden text-3xl z-[70] relative ml-1 active:scale-90 transition-transform"
                onClick={() => setnavicon(!navicon)}
              >
                {navicon ? <RxCross2 /> : <RiMenu3Line />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE SEARCH BAR (Expandable) --- */}
      <div
        className={`${searchOpen ? "h-auto opacity-100 py-3" : "h-0 opacity-0"} lg:hidden overflow-hidden transition-all duration-300 bg-gray-50 px-4`}
        ref={searchRef}
      >
        <form onSubmit={handleSearchSubmit} className="relative">
          <div className="flex items-center h-full relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-white border border-gray-200 py-2 px-4 rounded-md text-sm outline-none shadow-sm"
            />
            <button type="submit" className="absolute right-3">
              <CiSearch className="text-xl text-gray-500" />
            </button>
          </div>

          {/* Mobile Search Results Dropdown */}
          {showSearchResults && searchQuery.length >= 2 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-[300px] overflow-y-auto z-50">
              {isSearching ? (
                <div className="p-4 text-center text-gray-500">
                  Searching...
                </div>
              ) : searchResults?.products?.length > 0 ? (
                searchResults.products.slice(0, 5).map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-10 h-10 object-contain rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {product.title}
                      </p>
                      <p className="text-xs text-Secondary2_color">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">
                  No products found
                </div>
              )}
            </div>
          )}
        </form>
      </div>

      {/* --- MOBILE SIDEBAR MENU (50% with Blur) --- */}

      {/* 1. Backdrop Blur Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[55] transition-opacity duration-300 md:hidden ${
          navicon ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setnavicon(false)}
      ></div>

      {/* 2. Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] sm:w-[50%] bg-white z-[60] shadow-2xl transition-transform duration-500 ease-out md:hidden ${
          navicon ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-32 px-8 gap-6 h-full">
          <h4 className="text-gray-400 text-xs uppercase tracking-[3px] font-bold border-b border-gray-100 pb-3">
            Menu
          </h4>

          <ul className="flex flex-col gap-6">
            {navItem.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `text-xl font-poppins font-semibold block transition-all ${
                      isActive
                        ? "text-Secondary2_color translate-x-2"
                        : "text-black"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-auto pb-12">
            <hr className="border-gray-100 mb-6" />
            <div className="flex flex-col gap-4 text-gray-500 text-sm font-poppins">
              <p
                onClick={() => {
                  navigate("/account");
                  handleLinkClick();
                }}
                className="hover:text-black transition-colors cursor-pointer"
              >
                Account Settings
              </p>
              <p className="hover:text-black transition-colors cursor-pointer">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
