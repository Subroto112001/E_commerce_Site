import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PageHolder from './Component/PageHolder';
import Contact from './Pages/Contact';
import About from './Pages/About';
import SignUp from "./Pages/SignUp"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHolder />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App