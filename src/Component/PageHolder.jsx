import React from 'react'
import Header from './CommonComponent/Header/Index.jsx'
import { Outlet } from 'react-router-dom'
import { Footer } from './CommonComponent/Footer/Index.jsx'
import { Navbar } from './CommonComponent/Navbar/Index.js'

const PageHolder = () => {
  return (
      <>
          <Header />
          <Navbar/>
          <Outlet />
          <Footer/>
      
      </>
  )
}

export default PageHolder