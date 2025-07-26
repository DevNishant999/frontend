import React, { useState, useEffect } from "react";
import bc from "../assets/icon/bc.png";
import baal from "../assets/icon/baal.png";
import ghadi from "../assets/icon/ghadi.png";

const sections = [
  {
    title: "Hair Transplant Recovery Timeline",
    icon: ghadi,
    slug: "recovery-timeline",
  },
  {
    title: "Pre & Post Surgery Care",
    icon: baal,
    slug: "pre-post-care",
  },
  {
    title: "Side Effects & Risks Explained",
    icon: bc,
    slug: "side-effects",
  },
];

const Faqs = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [faqs, setFaqs] = useState([]);

  // const pageSlug = sections[activeSection].slug; // 👈 Identify which FAQ section to show

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/faqs`)
      .then((res) => res.json())
      .then((data) => {
        console.log("All FAQs:", data);
        // const filtered = data.filter((faq) => faq.page === pageSlug);
        setFaqs(data);
        // console.log("Filtered FAQs for:", pageSlug, filtered);
      });
  }, []);

  return (
    <>
      {/* Banner */}
      <div className="sec-pad sec-gradient pt-5">
        <div className="container">
          <div className="row text-center justify-content-center gap-3">
            <h1 className="display-4 fw-medium">Frequently asked questions.</h1>
            <p className="sec-c w-md-75">
              Find answers to common queries about our services, pricing,
              booking process, and more — helping you make informed decisions.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="container sec-pad">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-4 mb-4 px-5">
            <div className="list-group rounded-3 sec-bg p-2">
              {sections.map((section, index) => (
                <button
                  key={index}
                  className={`list-group-item border-none rounded-3 text-black d-flex justify-content-start gap-3 align-items-center  p-4 list-group-item-action ${
                    activeSection === index
                      ? "primary-bg text-white shadow"
                      : "sec-bg"
                  }`}
                  onClick={() => setActiveSection(index)}
                >
                  <img
                    src={section.icon}
                    alt=""
                    width="40"
                  />
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="col-md-8 px-5">
            <h2 className="p-head mb-5">
              Looking for an answer <br /> on hair transplant?
            </h2>
            <h4 className="mb-4">{sections[activeSection].title}</h4>

            {faqs.length === 0 ? (
              <p>No FAQs available for this section yet.</p>
            ) : (
              <div className="accordion" id={`accordion-${activeSection}`}>
                {faqs.map((faq, idx) => (
                  <div
                    className="accordion-item border-bottom py-3 sec-c border-none"
                    key={idx}
                  >
                    <h2
                      className="accordion-header sec-c"
                      id={`heading-${activeSection}-${idx}`}
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${activeSection}-${idx}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${activeSection}-${idx}`}
                      >
                        {String(idx + 1).padStart(2, "0")} &nbsp; {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse-${activeSection}-${idx}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading-${activeSection}-${idx}`}
                      data-bs-parent={`#accordion-${activeSection}`}
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
