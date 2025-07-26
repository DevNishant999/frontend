import React, { useEffect, useState } from "react";
import ExploreMore from "../components/ExploreMore";

const PrivacyPolicyPublic = () => {
  const [data, setData] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/privacy-policy`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      {/* Banner */}
      <div className="sec-pad sec-gradient pt-5">
        <div className="container">
          <div className="row text-center justify-content-center gap-3">
            <h1 className="display-4 fw-medium">{data.title}</h1>
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
              {sec.paragraph && <p className="mb-3 sec-c">{sec.paragraph}</p>}
              {sec.points.length > 0 && (
                <ul className="sec-c ps-4 mt-3">
                  {sec.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <h2 className="p-head mt-4">Contact Us</h2>
          <p className="sec-c mb-0">{data.contact}</p>
        </div>
      </div>

      <ExploreMore />
    </>
  );
};

export default PrivacyPolicyPublic;
