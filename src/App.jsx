import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Service from "./pages/service/Service.jsx"; // Create this component
import Results from "./pages/results/Results.jsx";
import Cost from "./pages/cost/Cost.jsx";
import Booknow from "./components/Booknow.jsx";
import AboutUs from "./pages/about/AboutUs.jsx";
import ContactUs from "./pages/contactus/ContactUs.jsx";
import Blogs from "./pages/blogs/Blogs.jsx";
import BlogDetails from "./pages/blog-details/BlogDetails.jsx";
import OurClinic from "./pages/our-clinic/OurClinic.jsx";
import Thankyou from "./pages/Thankyou.jsx";
import FourOFour from "./pages/FourOFour.jsx";
import PaymentTC from "./pages/PaymentTC.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Faqs from "./pages/Faqs.jsx";
import MedicalTourism from "./pages/medical-tourism/MedicalTourism.jsx";
import Country from "./pages/country/Country.jsx";
import City from "./pages/city/City.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Booknow />
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
        <Route path="*" element={<FourOFour />} />
        <Route path="/payment-tc" element={<PaymentTC />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/medical-tourism" element={<MedicalTourism />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
