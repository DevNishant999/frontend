import React, { useEffect, useState } from "react";
import logo from "../assets/qht-logo-final.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Loader from "./Loader";

const Footer = () => {
  const [data, setData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/footer`)
      .then((res) => res.json())
      .then((footer) => setData(footer));

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data) return <Loader />;

  return (
    <div
      className="container-fluid px-3 px-md-5 pb-5 pb-md-0 pt-5"
      style={{ backgroundColor: "#3d4536" }}
      id="footer"
    >
      <div className="row justify-content-between">
        {/* LEFT SIDE */}
        <div className="col-md-4 mb-4 mb-md-0">
          <div>
            <a className="navbar-brand" href="/">
              <img src={logo} width="200" alt="QHT" />
            </a>
          </div>

          {!isMobile &&
            data.branches.map((branch, i) => (
              <div key={i}>
                <h6 className="foot-branch text-white">{branch.title}</h6>
                {branch.addresses.map((addr, idx) => (
                  <h6 key={idx} className="f-link">
                    <a
                      href={addr.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      {addr.address}
                    </a>
                  </h6>
                ))}
              </div>
            ))}

          {!isMobile ? (
            <div className="py-2">
              <h6 className="f-a text-white">{data.contact.phone}</h6>
              <h6 className="f-a text-white">{data.contact.email}</h6>
              <div style={{ display: "flex", gap: "20px", fontSize: "20px" }}>
                <a
                  href={data.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram color="#fff" />
                </a>
                <a
                  href={data.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF color="#fff" />
                </a>
                <a
                  href={data.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn color="#fff" />
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-7">
          {isMobile ? (
            // MOBILE VIEW (Accordion)
            <div className="accordion" id="footerAccordion">
              {/* Address Section */}
              <div
                className="accordion-item"
                style={{
                  backgroundColor: "#3d4536",
                  color: "#fff",
                  border: "none",
                }}
              >
                <h2 className="accordion-header" id="heading-address">
                  <button
                    className="accordion-button collapsed px-0 fw-normal border-top rounded-0 border-white fs-5"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-address"
                    aria-expanded="false"
                    aria-controls="collapse-address"
                    style={{
                      backgroundColor: "#3d4536",
                      color: "#fff",
                      boxShadow: "none",
                    }}
                  >
                    Address
                  </button>
                </h2>
                <div
                  id="collapse-address"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-address"
                  data-bs-parent="#footerAccordion"
                >
                  <div className="accordion-body p-0 pb-3">
                    {data.branches.map((branch, i) => (
                      <div key={i} className="mb-3 border-bottom">
                        <h6 className="foot-branch text-white">{branch.title}</h6>
                        {branch.addresses.map((addr, idx) => (
                          <h6 key={idx} className="mb-1">
                            <a
                              href={addr.mapLink}
                              target="_blank"
                              rel="noreferrer"
                              className="text-white text-decoration-none"
                            >
                              {addr.address}
                            </a>
                          </h6>
                        ))}
                      </div>
                    ))}

                    <div className="py-2">
                      <h6 className="f-a text-white">{data.contact.phone}</h6>
                      <h6 className="f-a text-white">{data.contact.email}</h6>
                      <div
                        style={{
                          display: "flex",
                          gap: "20px",
                          fontSize: "20px",
                        }}
                      >
                        <a
                          href={data.socialLinks.instagram}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaInstagram color="#fff" />
                        </a>
                        <a
                          href={data.socialLinks.facebook}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaFacebookF color="#fff" />
                        </a>
                        <a
                          href={data.socialLinks.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLinkedinIn color="#fff" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Accordion Items */}
              <AccordionItem
                id="services"
                title="Our Services"
                items={data.services}
              />
              <AccordionItem
                id="company"
                title="Company Links"
                items={data.companyLinks}
              />
              <AccordionItem
                id="cities"
                title="In Your City"
                items={data.cities}
              />
              <AccordionItem
                id="countries"
                title="In Your Country"
                items={data.countries}
              />
            </div>
          ) : (
            // DESKTOP VIEW
            <>
              <div className="row border-bottom">
                <div className="col-md-6">
                  <h4 className="text-white my-3">Our Services</h4>
                  <ul className="list-unstyled">
                    {data.services.map((s, i) => (
                      <li key={i}>
                        <a
                          href={s.url}
                          className="text-white text-decoration-none"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4 className="text-white my-3">Company Links</h4>
                  <ul className="list-unstyled">
                    {data.companyLinks.map((s, i) => (
                      <li key={i}>
                        <a
                          href={s.url}
                          className="text-white text-decoration-none"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="row border-bottom">
                <h4 className="text-white my-3">In Your City</h4>
                <ul className="list-unstyled column-md-3">
                  {data.cities.map((c, i) => (
                    <li key={i}>
                      <a
                        href={c.url}
                        className="text-white text-decoration-none"
                      >
                        {c.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="row">
                <h4 className="text-white my-3">In Your Country</h4>
                <ul className="list-unstyled column-md-3">
                  {data.countries.map((c, i) => (
                    <li key={i}>
                      <a
                        href={c.url}
                        className="text-white text-decoration-none"
                      >
                        {c.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        {/* COPYRIGHT */}
        <div className="border-top mt-3 pb-2 pt-4">
          <p className="text-center text-md-start text-white mb-0">
            {data?.copyright}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// Reusable AccordionItem Component
const AccordionItem = ({ id, title, items }) => {
  return (
    <div
      className="accordion-item"
      style={{ backgroundColor: "#3d4536", color: "#fff", border: "none" }}
    >
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className="accordion-button collapsed px-0 fw-normal border-top rounded-0 border-white fs-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded="false"
          aria-controls={`collapse-${id}`}
          style={{
            backgroundColor: "#3d4536",
            color: "#fff",
            boxShadow: "none",
          }}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse-${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${id}`}
        data-bs-parent="#footerAccordion"
      >
        <div className="accordion-body p-0 pb-3">
          <ul className="list-unstyled mb-0">
            {items.map((item, i) => (
              <li key={i}>
                <a href={item.url} className="text-white text-decoration-none">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
