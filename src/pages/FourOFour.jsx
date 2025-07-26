import React from "react";

const FourOFour = () => {
  return (
    <>
      <div className="sec-pad pt-5 sec-gradient">
        <div className="container">
          <div className="row text-center gap-3 justify-content-center align-items-center">
            <h1 className="fw-bold primary-c" style={{fontSize:"200px"}}>404</h1>
            <h2 className="p-head">Page Not Found!</h2>
            <p className="sec-c">
              The page you are looking for might have been removed had its name <br />
              changed or is temporarily unavailable.
            </p>
            <div>
              <button className="primary-btn px-3 w-fit-content">
                Back to home page
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourOFour;
