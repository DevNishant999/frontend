import React, { useState, useEffect } from "react";
import "../our-clinic/OurClinic.css";
import Services from "../../components/Services";
import india from "../../assets/india.png";
import hospi from "../../assets/icon/hospi.png";
import tarlap from "../../assets/icon/tarlap.png";
import bulbpuzz from "../../assets/icon/bulbpuzz.png";
import bulbppl from "../../assets/icon/bulbppl.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const OurClinic = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/our-clinic`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <div>Loading...</div>;

  const { content } = data;

  return (
    <>
      {/* Banner */}
      <div className="sec-pad clibanner">
        <div className="container just-align-center h-100">
          <div className="row">
            <h1 className="text-white text-center display-3 fw-normal">
              {content.banner.title}
            </h1>
            <h4 className="text-white text-center fw-light">
              {content.banner.subtitle}
            </h4>
          </div>
        </div>
      </div>

      {/* Clinic Gallery */}
      <div className="sec-pad">
        <div className="container">
          <h2 className="p-head">{content.introduction.heading}</h2>
          <p className="sec-c">{content.introduction.description}</p>

          {content.clinics.map((clinic, idx) => (
            <div
              key={idx}
              className="row flex-column-reverse flex-md-row gap-4 gap-md-0 my-5 py-3 justify-content-between"
            >
              <div className="col-md-4">
                <div className="sec-bg px-5 py-4 rounded-4">
                  <div className="row py-4">
                    <div className="col-md-2">
                      <FaMapMarkerAlt className="text-white primary-bg p-2 fs-2 rounded-circle" />
                    </div>
                    <div className="col-md-10 sec-c">{clinic.address}</div>
                  </div>
                  <div className="row py-4 border-y border-lgrey">
                    <div className="col-md-2">
                      <FaPhoneAlt className="text-white primary-bg p-2 fs-2 rounded-circle" />
                    </div>
                    <div className="col-md-10 sec-c">{clinic.phone}</div>
                  </div>
                  <div className="row py-4">
                    <div className="col-md-2">
                      <FaEnvelope className="text-white primary-bg p-2 fs-2 rounded-circle" />
                    </div>
                    <div className="col-md-10 sec-c">{clinic.email}</div>
                  </div>
                </div>
                <div className="bg-parda text-white mt-4 rounded-4 p-5">
                  <h3>Get An Expert Assistance.</h3>
                  <p>
                    Get expert assistance for safe, effective hair restoration.
                  </p>
                  <button className="btn bg-white primary-c rounded-pill px-3 py-2 mt-2">
                    Consult us
                  </button>
                </div>
              </div>
              <div className="col-md-8">
                <h3>Hair transplant clinic - {clinic.name}</h3>
                <p className="sec-c mb-5">{clinic.description}</p>

                <Swiper slidesPerView={1} spaceBetween={30} loop={true}>
                  {clinic.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} className="w-100 h-100 rounded-4" alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="sec-pad primary-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="p-head text-white mb-3">
                {content.features.heading}
              </h2>
              <p className="text-white">{content.features.description}</p>
              <button className="btn bg-white rounded-pill primary-c px-3 py-2 mt-5">
                About Us
              </button>
            </div>
            <div className="col-md-6 px-md-5 mt-5 mt-md-0 text-white">
              {content.features.items.map((item, idx) => (
                <div
                  key={idx}
                  className="row mx-3 border-y border-grey py-4 just-align-center"
                >
                  <div className="col-md-2 just-align-center">
                    <img src={item.icon} width="60" alt="" />
                  </div>
                  <div className="col-md-10">
                    <h4>{item.title}</h4>
                    <p className="m-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Services />

      {/* Reviews & Testimonials */}
      <div className="sec-pad sec-bg">
        <div className="container">
          <div className="row flex-column-reverse flex-md-row">
            <div className="col-md-7 p-md-5 pt-5 pt-md-0 just-align-center align-items-start flex-column">
              <h2 className="p-head">{content.testimonials.heading}</h2>
              <p className="sec-c">{content.testimonials.description}</p>
              <div className="mt-3">
                <button className="primary-btn px-4 me-3">
                  Explore Reviews
                </button>
                <button className="text-secondary px-4 me-3 bg-transparent border rounded-pill primary-btn">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col-md-5">
              <img src={content.testimonials.image} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClinic;
