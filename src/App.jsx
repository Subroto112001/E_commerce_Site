import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PageHolder from "./Component/PageHolder";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/AuthenticationPage/SignUp";
import Login from "./Pages/AuthenticationPage/Login";
import Account from "./Pages/Account";
import MyProfile from "./Component/AccountPageComponent/MyProfile";
import CheckOut from "./Pages/CheckOut";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHolder />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account/profile" element={<Account />}>
            <Route path="/account/profile" element={<MyProfile />} />
          </Route>
          <Route
            path="/account/profile/product/viewcart/checkout"
            element={<CheckOut />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
