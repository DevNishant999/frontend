import React from "react";
import dr from "../assets/dr.png";

const Thankyou = () => {
  return (
    <>
      <div className="sec-pad sec-gradient">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-md-5 pb-5 pb-md-5 d-flex flex-column justify-content-center align-items-start gap-4">
              <h1 className="p-head">Thank You for Reaching Out!</h1>
              <p className="sec-c">
                We've received your message and will be in touch shortly. Our
                team at Quick Hair Transplant Clinic is here to guide you toward
                a fuller, more confident you.
              </p>
              <button className="primary-btn px-3">
                Questions? Call us anytime at +91-9084726916
              </button>
            </div>
            <div className="col-md-6">
                <img src={dr} className="w-100 h-100 object-fit-contain" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
