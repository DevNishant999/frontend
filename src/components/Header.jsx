import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/qht-logo-final.png";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setScrolled(true);
        if (currentScrollY < lastScrollY) {
          setShowHeader(true); // scrolling up
        } else {
          setShowHeader(false); // scrolling down
        }
      } else {
        setShowHeader(true); // show when at top
        setScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleCollapseClose = () => {
      const collapseEl = document.getElementById("navbarSupportedContent");
      collapseEl?.addEventListener("hidden.bs.collapse", () => {
        setIsMenuOpen(false);
      });
    };
    handleCollapseClose();
  }, []);

  return (
    <>
      <div
        className={`header-wrapper fixed-top transition-all ${
          showHeader ? "slide-down" : "slide-up"
        } ${scrolled ? "scrolled" : ""}`}
        style={{ zIndex: 999, backgroundColor: isMenuOpen ? "#627251" : "" }}
      >
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid py-4 px-4 justify-content-between">
              <Link className="navbar-brand d-flex align-items-center" to="/">
                <img
                  src={logo}
                  width="130"
                  className="logo"
                  style={{ filter: isMenuOpen ? "none" : "invert(1)" }}
                  alt="Logo"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)} // toggle state
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav bg-white p-2 rounded align-items-md-center gap-2 ps-3">
                  <li className="nav-item">
                    <Link className="nav-link fw-500 text-dark" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-500 text-dark" to="/aboutus">
                      About us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-500 text-dark" to="/results">
                      Hair Transplant Result
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link fw-500 text-dark"
                      to="/service/hair-transplant-for-men"
                    >
                      Hair Restoration
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link fw-500 text-dark"
                      to="/cost/hair-transplant-cost-in-russia"
                    >
                      Cost
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <button className="primary-btn rounded px-3 py-3 border-n">
                        Contact Us
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div style={{ height: "135px" }} className="sec-bg"></div>
    </>
  );
};

export default Header;
