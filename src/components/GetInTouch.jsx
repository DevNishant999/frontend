import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    const utmParams = {
      utm_source: "website",
      utm_medium: "contact_form",
      utm_campaign: "contact_page",
      utm_content: "general_inquiry",
      campaign_id: "987654321",
      GCLid: "GCLID_STATIC_CONTACT",
    };

    const payload = {
      ...formData,
      utmParams,
    };

    try {
      const res = await fetch(`${API_URL}/leads/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit lead.");

      setStatusMessage("✅ Submitted successfully! We will contact you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        city: "",
      });
    } catch (err) {
      console.error(err);
      setStatusMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Get in Touch */}
      <div className="sec-bg sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="p-head">
                Get in touch with us <br /> or you can visit us.
              </h2>
              <h5 className="sec-c fw-light w-75 my-3">
                Reach out anytime or visit us directly for personalized
                assistance, expert guidance, and seamless support experience.
              </h5>
              <ul className="list-unstyled fw-500 mt-2 lh-lg">
                <li>+91-9897020696</li>
                <li>regrowclinic@gmail.com</li>
              </ul>
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      className="form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4"
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4"
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4"
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      className="form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4"
                      type="tel"
                      placeholder="Mobile"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <select
                      className="form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4"
                      name="interestedIn"
                      value=""
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Interested In ?
                      </option>
                      <option value="PRP">PRP</option>
                      <option value="Hair Transplant">Hair Transplant</option>
                      <option value="Beard Transplant">Beard Transplant</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="primary-btn w-25 ms-3 ms-md-0 d-flex align-items-center justify-content-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
              {statusMessage && (
                <div className="mt-3">
                  <p
                    className={
                      statusMessage.includes("✅")
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {statusMessage}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 p-3">
              <div className="bg-white rounded-4 p-4 h-100">
                <FaMapMarkerAlt className="fs-3 primary-c" />
                <h4 className="my-3">Haridwar</h4>
                <p className="sec-c">
                  QHT Clinic, 521, Model Colony, Ranipur More, Haridwar,
                  Uttarakhand
                </p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="bg-white rounded-4 p-4 h-100">
                <FaMapMarkerAlt className="fs-3 primary-c" />
                <h4 className="my-3">Delhi</h4>
                <p className="sec-c">
                  D-15, Outer Ring Rd, above Federal Bank, Prashant Vihar,
                  Sector 14, Rohini, New Delhi, Delhi, 110085
                </p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="bg-white rounded-4 p-4 h-100">
                <FaMapMarkerAlt className="fs-3 primary-c" />
                <h4 className="my-3">Hyderabad</h4>
                <p className="sec-c">
                  QHT Clinic Opposite Hotel Park Hyatt Road No. 2 Banjara Hills,
                  Hyderabad, Telangana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
