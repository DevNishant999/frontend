import React, { useState, useEffect } from "react";
import "../contactus/ContactUs.css";
import callmsg from "../../assets/icon/callmsg.png";
import hosp from "../../assets/icon/hosp.png";
import msgppl from "../../assets/icon/msgppl.png";
import haridwar from "../../assets/icon/haridwar.png";
import delhi from "../../assets/icon/delhi.png";
import hydrabad from "../../assets/icon/hydrabad.png";
import loc from "../../assets/icon/loc.png";
import noida from "../../assets/icon/noida.png";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import ExploreMore from "../../components/ExploreMore";

const ContactUs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/contact`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setData(result.contactData);
        console.log(result.contactData);
      })
      .catch((err) => console.error(err));
  }, []);

  // if (loading) return <div>Loading...</div>;
  if (!data) return <div>Error loading data</div>;

  return (
    <>
      {/* Banner */}
      <div
        className="sec-pad cbanner"
        style={{
          backgroundImage: ` 180deg,
      rgba(0, 0, 0, 0) 18.21%,
      rgba(0, 0, 0, 0.718652) 85.42%,
      rgba(0, 0, 0, 0.9) 114.93%
    ),url(${data.banner.bgImage})`,
        }}
      >
        <div className="container just-align-center h-100">
          <div className="row">
            <h1 className="text-white text-center display-3 fw-normal">
              {data.banner.title}
            </h1>
            <h4 className="text-white text-center fw-light">
              {data.banner.subtitle}
            </h4>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="sec-pad patti">
        <div className="container">
          <div className="row text-center text-md-start text-white">
            {data.badges.map((badge, index) => (
              <div
                key={badge._id}
                className={`col-md-4 border-x mb-3 mb-md-0 border-grey ${
                  index !== data.badges.length - 1 ? "border-end" : ""
                }`}
              >
                <div className="row justify-content-center">
                  <div className="col-md-4 just-align-center">
                    <img src={badge.icon} className="mb-3 mb-md-0" alt="" />
                  </div>
                  <div className="col-md-7 just-align-center">
                    <h5 className="fw-normal">{badge.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="sec-pad sec-bg" id="form">
        <div className="container py-5">
          <div className="row align-items-start">
            <div className="col-md-6 mb-4">
              <h2 className="p-head text-black">{data.contactInfo.heading}</h2>
              <p className="sec-c mt-3">{data.contactInfo.description}</p>

              <div className="d-flex align-items-center mt-5">
                <div className="icon-circle primary-bg text-white px-2 py-1 rounded-circle me-3">
                  <FaEnvelope />
                </div>
                <span>{data.contactInfo.email}</span>
              </div>

              <div className="d-flex align-items-center mt-3">
                <div className="icon-circle primary-bg text-white px-2 py-1 rounded-circle me-3">
                  <FaPhoneAlt />
                </div>
                <span>{data.contactInfo.phoneNumbers.join(", ")}</span>
              </div>

              <div className="mt-4">
                {data.contactInfo.socialMedia.map((social) => (
                  <a
                    key={social._id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white px-2 py-1 me-3 rounded-circle primary-c d-inline-block"
                  >
                    {social.platform === "instagram" && <FaInstagram />}
                    {social.platform === "facebook" && <FaFacebookF />}
                    {social.platform === "linkedin" && <FaLinkedinIn />}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="col-md-6">
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-grey"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-grey"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-grey"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-grey"
                    placeholder="Mobile"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-grey"
                    rows="3"
                    placeholder="Type your message"
                  ></textarea>
                </div>
                <button type="submit" className="primary-btn px-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* City */}
      <div className="sec-pad">
        <div className="container py-5 text-center">
          <h2 className="p-head mb-3">{data.clinicSection.heading}</h2>
          <p className="sec-c mb-5">{data.clinicSection.description}</p>

          <div className="row gap-0">
            {data.clinics.map((clinic, idx) => (
              <div className="col-md-3 p-0" key={clinic._id}>
                <div className="border-x border-lgrey py-4 px-5 h-100 text-start position-relative">
                  <img
                    src={clinic.icon}
                    className="mb-3 object-fit-contain"
                    width="60"
                    height="60"
                    alt=""
                  />
                  <div className="d-flex align-items-center mb-2">
                    <img src={loc} width="30" className="me-2" alt="" />
                    <h5 className="mb-0 fw-normal text-black">{clinic.city}</h5>
                  </div>
                  <p className="sec-c fs-small mb-1 mt-3 h-100px">
                    {clinic.address}
                  </p>
                  <p className="mb-0 text-secondary">
                    <span className="text-black">Contact :</span>{" "}
                    {clinic.contact}
                  </p>
                  <a
                    href={clinic.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex text-black justify-content-start align-items-center mt-4 fs-3 text-decoration-none"
                  >
                    🡽
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ExploreMore />
    </>
  );
};

export default ContactUs;
