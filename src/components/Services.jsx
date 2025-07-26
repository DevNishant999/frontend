import React from "react";
import jhat from "../assets/jhat.png";

const Services = () => {
  return (
    <>
      {/* Services */}
      <div className="container sec-pad">
        <div className="row w-100 px-3 px-md-0">
          <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
            <h2 className="p-head">Our Services</h2>
            <h6 className="border py-1 px-2 rounded text-secondary">2</h6>
          </div>
          <div className="col-md-6 pb-md-5 my-md-5 d-flex justify-content-between align-items center flex-column">
            <div>
              <h6>Introduction</h6>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={jhat} className="w-50 my-5" alt="" />
            </div>
            <div className="text-start">
              {" "}
              <button
                className="btn text-white rounded-pill px-4 mb-5 mb-md-0 py-2"
                style={{ backgroundColor: "#627251" }}
              >
                Book Free Consultation
              </button>
            </div>
          </div>
          <div className="col-md-6 pb-md-5my-md-5">
            <h3>
              Hair loss affects more than just your scalp — it touches your
              identity.
            </h3>
            <h5 className="text-secondary mb-4 mt-3">
              Our range of services is designed to restore both your hair and
              your confidence.
            </h5>
            <div className="accordion" id="hairTransplantAccordion">
              <div className="accordion-item border-0 border-bottom">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                  >
                    <span className="step-circle">1</span> Hair Transplant For
                    Men
                  </button>
                </h2>
                <div
                  id="collapse1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#hairTransplantAccordion"
                >
                  <div className="accordion-body">
                    Content for Hair Transplant For Men.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 border-bottom">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                  >
                    <span className="step-circle">2</span> Hairline
                    Reconstruction
                  </button>
                </h2>
                <div
                  id="collapse2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#hairTransplantAccordion"
                >
                  <div className="accordion-body">
                    Content for Hairline Reconstruction.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 border-bottom">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                  >
                    <span className="step-circle">3</span> Failed Hair
                    Transplant Repair
                  </button>
                </h2>
                <div
                  id="collapse3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#hairTransplantAccordion"
                >
                  <div className="accordion-body">
                    Content for Failed Hair Transplant Repair.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 border-bottom">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                  >
                    <span className="step-circle">4</span> Body Hair Transplant
                  </button>
                </h2>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#hairTransplantAccordion"
                >
                  <div className="accordion-body">
                    Content for Body Hair Transplant.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 border-bottom">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                  >
                    <span className="step-circle">5</span> Beard Transplant
                  </button>
                </h2>
                <div
                  id="collapse5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#hairTransplantAccordion"
                >
                  <div className="accordion-body">
                    Content for Beard Transplant.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 border-bottom">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse6"
                  >
                    <span className="step-circle">6</span> PRP Treatment
                  </button>
                </h2>
                <div
                  id="collapse6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#hairTransplantAccordion"
                >
                  <div className="accordion-body">
                    Content for PRP Treatment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
