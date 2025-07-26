import React, { useState } from "react";

const QuickForm = () => {
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
      utm_source: "facebook",
      utm_medium: "cpc",
      utm_campaign: "hair_transplant_campaign",
      utm_content: "quick_form",
      campaign_id: "123456789",
      GCLid: "GCLID_STATIC_ABC123",
    };

    const payload = {
      ...formData,
      utmParams,
    };

    try {
      const res = await fetch(`${API_URL}/leads/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    <div
      id="Form"
      className="position-relative position-sm-static h-sm-fit-content"
    >
      <div className="primary-bg py-5 rounded-md-4 my-md-4 container d-flex align-items-center justify-content-around">
        {!statusMessage && (
          <>
            <form
              onSubmit={handleSubmit}
              className="row g-2 align-items-center w-100 w-md-auto flex-grow-1"
            >
              <h4 className="col-md-3 just-align-center text-white fw-light">
                Request a callback
              </h4>
              <div className="col-md-2 px-2">
                <input
                  type="text"
                  className="form-control input-underline"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-2 px-2">
                <input
                  type="text"
                  className="form-control input-underline"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-2 px-2">
                <input
                  type="tel"
                  className="form-control input-underline"
                  placeholder="Mobile"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-2 px-2">
                <input
                  type="email"
                  className="form-control input-underline"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-1">
                <button
                  type="submit"
                  className="primary-btn bg-white px-4 fw-500 d-flex align-items-center justify-content-center"
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
                    <span className="primary-c">Submit</span>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
        {statusMessage && (
          <div className="text-center">
            <p className="fs-3">{statusMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickForm;
