import React, { useEffect, useState } from "react";
import ExploreMore from "../components/ExploreMore";
const API_URL = import.meta.env.VITE_API_URL;

const PaymentTC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/payment-tc`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      {/* Banner */}
      <div className="sec-pad sec-gradient pt-5">
        <div className="container">
          <div className="row text-center justify-content-center gap-3">
            <h1 className="display-4 fw-medium">
              {data.title.split("Terms")[0]}
              <span className="primary-c">
                Terms and <br /> Conditions</span>&nbsp;
              of QHT Clinic
            </h1>
            <p className="sec-c w-md-75">{data.banner}</p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="container sec-pad">
        <div className="row w-100 px-3 px-md-0">
          {data.sections.map((sec, i) => (
            <div key={i}>
              <h2 className="p-head mt-4">{sec.heading}</h2>
              <ul className="sec-c ps-4 mt-3">
                {sec.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

          <h2 className="p-head mt-4">Note</h2>
          <ul className="sec-c ps-4 mt-3">
            {data.note.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      </div>

      <ExploreMore />
    </>
  );
};

export default PaymentTC;
