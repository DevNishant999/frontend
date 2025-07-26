import React, { useEffect, useState } from "react";
import logo from "../assets/qht-logo-final.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [data, setData] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/footer`)
      .then((res) => res.json())
      .then((footer) => setData(footer));
  }, []);
  // console.log(data);

  if (!data) return <p>Loading...</p>;

  return (
    <div
      className="container-fluid px-3 px-md-5 pb-5 pb-md-0 pt-5"
      style={{ backgroundColor: "#3d4536" }}
      id="footer"
    >
      <div className="row justify-content-between">
        <div className="col-md-4">
          <div>
            <a className="navbar-brand" href="/">
              <img src={logo} width="200" alt="QHT" />
            </a>
          </div>

          {data.branches.map((branch, i) => (
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

          <div className="py-2">
            <h6 className="f-a">{data.contact.phone}</h6>
            <h6 className="f-a">{data.contact.email}</h6>
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
        </div>

        <div className="col-md-7">
          <div className="row border-bottom">
            <div className="col-md-6">
              <h4 className="text-white my-3">Our Services</h4>
              <ul className="list-unstyled">
                {data.services.map((s, i) => (
                  <li key={i}>
                    <a href={s.url} className="text-white text-decoration-none">
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
                    <a href={s.url} className="text-white text-decoration-none">
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
                  <a href={c.url} className="text-white text-decoration-none">
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
                  <a href={c.url} className="text-white text-decoration-none">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-top mt-3 pb-2 pt-4">
          <p className="text-center text-md-start">{data.copyright}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
