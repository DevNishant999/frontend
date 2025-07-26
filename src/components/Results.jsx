import React, { useEffect, useState } from "react";
import Glogo from "../assets/glogo.png";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Results = () => {
  const [transformations, setTransformations] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/results`)
      .then((res) => res.json())
      .then(setTransformations);
  }, []);

  // Latest 6 transformations (assuming newest last)
  const latestTransformations = transformations.slice(-6).reverse();

  return (
    <>
      {/* Results */}
      <div className="g-gradient sec-pad">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-5">
            <div className="col-md-9">
              <h2 className="p-head text-white">Results of Hair Transplant.</h2>
              <p className="mt-3 text-white fw-light">
                At QHT Hair Transplant Clinic in India, we understand the
                emotional and psychological impact of hair loss. Our team of
                dedicated hair transplant professionals offers
                comprehensive hair treatment for men, using advanced techniques
                to ensure natural-looking results.
              </p>
            </div>
            <div className="col-md-3 text-md-end">
              <img src={Glogo} alt="Google Rating" className="img-fluid w-50" />
            </div>
          </div>

          <div className="row">
            {latestTransformations.map((item, index) => (
              <div className="col-md-4 mb-4" key={item._id || index}>
                <ReactCompareSlider
                  s
                  style={{
                    borderRadius: "20px",
                    height: "300px",
                  }}
                  itemOne={
                    <ReactCompareSliderImage
                      src={item.beforeImage}
                      alt="Before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={item.afterImage}
                      alt="After"
                    />
                  }
                />
              </div>
            ))}

            {latestTransformations.length === 0 && (
              <p className="text-white">No results found.</p>
            )}
          </div>

          <div className="row">
            <div className="d-flex justify-content-center align-items-center mt-5">
              <div className="line d-none d-md-block"></div>
              <div>
                <button className="btn bg-white text-black rounded-pill px-4 py-2">
                  Explore More Results +
                </button>
              </div>
              <div className="line d-none d-md-block"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
