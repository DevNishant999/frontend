import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Booknow from "./components/Booknow.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Lazy loaded pages
const Home = lazy(() => import("./pages/home/Home.jsx"));
const Service = lazy(() => import("./pages/service/Service.jsx"));
const Results = lazy(() => import("./pages/results/Results.jsx"));
const Cost = lazy(() => import("./pages/cost/Cost.jsx"));
const AboutUs = lazy(() => import("./pages/about/AboutUs.jsx"));
const ContactUs = lazy(() => import("./pages/contactus/ContactUs.jsx"));
const Blogs = lazy(() => import("./pages/blogs/Blogs.jsx"));
const BlogDetails = lazy(() => import("./pages/blog-details/BlogDetails.jsx"));
const OurClinic = lazy(() => import("./pages/our-clinic/OurClinic.jsx"));
const Thankyou = lazy(() => import("./pages/Thankyou.jsx"));
const FourOFour = lazy(() => import("./pages/FourOFour.jsx"));
const PaymentTC = lazy(() => import("./pages/PaymentTC.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const Faqs = lazy(() => import("./pages/Faqs.jsx"));
const MedicalTourism = lazy(() =>
  import("./pages/medical-tourism/MedicalTourism.jsx")
);
const Country = lazy(() => import("./pages/country/Country.jsx"));
const City = lazy(() => import("./pages/city/City.jsx"));

const App = () => {
  useEffect(() => {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.hasAttribute("loading")) {
        img.setAttribute("loading", "lazy");
      }
      if (!img.hasAttribute("decoding")) {
        img.setAttribute("decoding", "async");
      }
    });
  }, []);

  return (
    <Router>
      <Header />
      <Booknow />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:slug" element={<Service />} />
          <Route path="/country/:slug" element={<Country />} />
          <Route path="/city/:slug" element={<City />} />
          <Route path="/results" element={<Results />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cost/:slug" element={<Cost />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/guide/:slug" element={<BlogDetails />} />
          <Route path="/our-clinic" element={<OurClinic />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/payment-tc" element={<PaymentTC />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/medical-tourism" element={<MedicalTourism />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
