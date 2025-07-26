import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Faqs = () => {
  const [faqs, setFaqs] = useState([]);
  const location = useLocation();

  // Slug nikaal lo
  const pathParts = location.pathname.split("/").filter(Boolean);
  const pageSlug = pathParts[pathParts.length - 1] || "general";

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/faqs`)
      .then((res) => res.json())
      .then((data) => {
        // Frontend filter by page field
        // console.log("sare page ke",data)
        const filtered = data.filter((faq) => faq.page === pageSlug);
        setFaqs(filtered);
        // console.log("iss page ke", filtered);
        // console.log("Slug", pageSlug);
      });
  }, [pageSlug]);

  return (
    <div id="faq" className="sec-pad">
      <div className="container">
        <div className="row">
          <h2 className="text-center p-head">Frequently Asked Questions</h2>
          <p className="text-center">
            If you don’t find a relevant answer please send us your queries on{" "}
            <br /> support@qhtclinic.com or Call +91-9897020696
          </p>

          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, idx) => (
              <div key={faq._id} className="accordion-item">
                <h2 className="accordion-header" id={`heading${idx}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${idx}`}
                  >
                    <span className="faq-number primary-c">
                      {String(idx + 1).padStart(2, "0")}
                    </span>{" "}
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${idx}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div
                    className="accordion-body"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></div>
                </div>
              </div>
            ))}

            {faqs.length === 0 && (
              <p className="text-center my-5">No FAQs found for this page.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
