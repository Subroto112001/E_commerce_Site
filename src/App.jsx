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
import MyCancellations from "./Component/AccountPageComponent/MyCancellations";
import MyReviews from "./Component/AccountPageComponent/MyReviews";
import MyReturns from "./Component/AccountPageComponent/MyReturns";
import AddressBook from "./Component/AccountPageComponent/AddressBook";
import MyPaymentOptions from "./Component/AccountPageComponent/MyPaymentOptions";
import CheckOut from "./Pages/CheckOut";
import BreadCrumb from "./Component/CommonComponent/BreadCrumb";
import ProductPage from "./Pages/ProductPage";
import ProductDetails from "./Pages/ProductDetails";
import { ProductProvider } from "./ContextApi/Contextapi";
import NotFound from "./Pages/404Page";

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PageHolder />}>
            <Route index element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/breadcrumb/me" element={<BreadCrumb />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />

            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />}>
              <Route path="profile" element={<MyProfile />} />
              <Route path="cancellations" element={<MyCancellations />} />
              <Route path="reviews" element={<MyReviews />} />
              <Route path="returns" element={<MyReturns />} />
              <Route path="address-book" element={<AddressBook />} />
              <Route path="payment-options" element={<MyPaymentOptions />} />
            </Route>
            <Route
              path="/account/profile/product/viewcart/checkout"
              element={<CheckOut />}
            />
            {/* Catch-all 404 route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
