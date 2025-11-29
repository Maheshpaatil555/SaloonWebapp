import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookAppointment from "./pages/BookAppointment";
import SuccessPage from "./pages/SuccessPage";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Review from "./pages/Review";
import ScrollToTop from "./components/ScrollToTop"; 
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />  {/* Scroll reset component */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bookapoiment" element={<BookAppointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/success" element={<SuccessPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
