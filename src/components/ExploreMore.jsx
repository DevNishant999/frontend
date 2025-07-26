import React from "react";

const ExploreMore = () => {
  return (
    <>
      {/* Explore more */}
      <div className="sec-pad lbanner">
        <div className="container d-flex flex-column justify-content-center h-100 text-white">
          <h2 className="p-head">
            Explore More About QHT <br /> Hair Transplant Clinic.
          </h2>
          <h6 className="fw-light my-4">
            Step inside our clinic gallery to discover a clean, modern <br />{" "}
            space designed for your comfort.
          </h6>
          <div>
            <button className="primary-btn px-4 me-3">About Us</button>
            <button className="btn text-white btn-transparent border rounded-pill px-4 py-2">
              Our Clinic
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreMore;
