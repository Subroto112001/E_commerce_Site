import React from 'react'
import Header from "./ComponentForApplication/Header/Index.jsx";
import { Outlet } from 'react-router-dom'
import { Footer } from './ComponentForApplication/Footer/Index.jsx'
import {Navbar} from "./ComponentForApplication/Navbar/Index.jsx"

const PageHolder = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default PageHolder