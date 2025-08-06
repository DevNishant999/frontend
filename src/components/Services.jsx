import React from "react";
import jhat from "../assets/jhat.png";

const Services = () => {
  return (
    <>
      {/* Services */}
      <div className="container sec-pad">
        <div className="row w-100 px-3 px-md-0">
          {/* Section Title */}
          <div
            className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4"
            data-aos="fade-up"
          >
            <h2 className="p-head">Our Services</h2>
            <h6 className="border py-1 px-2 rounded text-secondary">2</h6>
          </div>

          {/* Left Column */}
          <div
            className="col-md-6 pb-md-5 my-md-5 d-flex justify-content-between align-items center flex-column"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div>
              <h6>Introduction</h6>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={jhat} className="w-50 my-5" alt="" />
            </div>
            <div className="text-start" data-aos="zoom-in" data-aos-delay="200">
              <button
                className="btn text-white rounded-pill px-4 mb-5 mb-md-0 py-2"
                style={{ backgroundColor: "#627251" }}
              >
                Book Free Consultation
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="col-md-6 pb-md-5my-md-5"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h3>
              Hair loss affects more than just your scalp — it touches your
              identity.
            </h3>
            <h5 className="text-secondary mb-4 mt-3">
              Our range of services is designed to restore both your hair and
              your confidence.
            </h5>

            {/* Accordion */}
            <div className="accordion" id="hairTransplantAccordion">
              {[
                {
                  id: 1,
                  title: "Hair Transplant For Men",
                  content: "Content for Hair Transplant For Men.",
                },
                {
                  id: 2,
                  title: "Hairline Reconstruction",
                  content: "Content for Hairline Reconstruction.",
                },
                {
                  id: 3,
                  title: "Failed Hair Transplant Repair",
                  content: "Content for Failed Hair Transplant Repair.",
                },
                {
                  id: 4,
                  title: "Body Hair Transplant",
                  content: "Content for Body Hair Transplant.",
                },
                {
                  id: 5,
                  title: "Beard Transplant",
                  content: "Content for Beard Transplant.",
                },
                {
                  id: 6,
                  title: "PRP Treatment",
                  content: "Content for PRP Treatment.",
                },
              ].map((item, index) => (
                <div
                  className="accordion-item border-0 border-bottom"
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 100}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${item.id}`}
                    >
                      <span className="step-circle">{item.id}</span>{" "}
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse${item.id}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#hairTransplantAccordion"
                  >
                    <div className="accordion-body">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
