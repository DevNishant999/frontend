import React, { useState, useEffect } from "react";
import "./Results.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Modal } from "react-bootstrap";
import Testimonials from "../../components/Testimonials.jsx";
import ResultBan from "../../assets/results.png";
import bald from "../../assets/bald.png";
import clock from "../../assets/icon/clock.png";
import lr from "../../assets/icon/lr.png";
import katori from "../../assets/icon/katori.png";
import wow from "../../assets/icon/wow.png";
import after from "../../assets/after.png";
import jhat from "../../assets/jhat.png";
import promo from "../../assets/promo.png";
import scrollDown from "../../assets/scroll-down.png";

const features = [
  "Real Results",
  "Confidence Restored",
  "100% Natural Look",
  "Graft By Graft Procedure",
  "No Visible Scarring",
  "Personalized",
];

const transformations = [
  {
    name: "Vicky",
    grafts: 3000,
    age: 54,
    area: "Crown + Hairline",
    grade: "2",
    resultTime: "06 Months",
    beforeImage: after,
    afterImage: after,
    doctorNotes: [
      "Personalized treatment tailored to the patient's hair loss pattern & age.",
      "Grafts strategically placed to ensure natural density and hairline design.",
      "Continued progress expected up to 12 months with proper care and follow-up.",
    ],
    surgeryCount: "first",
  },
  {
    name: "Ankit",
    grafts: 2500,
    age: 30,
    area: "Front",
    grade: "1",
    resultTime: "06 Months",
    beforeImage: after,
    afterImage: after,
    doctorNotes: [
      "Custom hairline reconstruction based on facial symmetry.",
      "Improved appearance within 6 months of consistent follow-up.",
    ],
    surgeryCount: "second",
  },
  {
    name: "Aman",
    grafts: 3200,
    age: 30,
    area: "Full",
    grade: "2",
    resultTime: "06 Months",
    beforeImage: after,
    afterImage: after,
    doctorNotes: [
      "Full scalp restoration using high-density graft implantation.",
      "6-month visible growth with expectations for more improvement.",
    ],
    surgeryCount: "first",
  },
  {
    name: "Rohit",
    grafts: 2800,
    age: 30,
    area: "Front",
    grade: "3",
    resultTime: "06 Months",
    beforeImage: after,
    afterImage: after,
    doctorNotes: [
      "Frontal hairline reshaped for youthful appearance.",
      "Hair growth observed within 6 months post procedure.",
    ],
    surgeryCount: "second",
  },
  {
    name: "Ravi",
    grafts: 3600,
    age: 30,
    area: "Full",
    grade: "4",
    resultTime: "06 Months",
    beforeImage: after,
    afterImage: after,
    doctorNotes: [
      "Extensive graft coverage for full baldness correction.",
      "Natural design with denser look achieved by 6 months.",
    ],
    surgeryCount: "first",
  },
  {
    promo: true,
    type: "consultation",
    title: "Want Similar Results?",
    description: "Tailored strategies for success, book free consultation.",
    phone: "+91-9084726916",
    img: jhat,
  },
  {
    video: true,
    type: "video",
    videoUrl: "https://example.com/video.mp4", 
    img: promo, 
    cta: "Book Free Consultation",
  },
  {
    name: "Kunal",
    grafts: 3100,
    age: 30,
    area: "Crown",
    grade: "5",
    resultTime: "06 Months",
    beforeImage: after,
    afterImage: after,
    doctorNotes: [
      "Crown area rejuvenated with carefully angled grafts.",
      "Great improvement in volume and scalp coverage.",
    ],
    surgeryCount: "first",
  },
  {
    name: "Alok",
    grafts: 2900,
    age: 30,
    area: "Full",
    grade: "6",
    resultTime: "06 Months",
    beforeImage: after,
    afterImage: after,
    doctorNotes: [
      "Combination of crown and front grafts for full coverage.",
      "Noticeable change in hair texture and volume by 6 months.",
    ],
    surgeryCount: "first",
  },
  {
    name: "Rakesh",
    grafts: 3400,
    age: 30,
    area: "Front",
    grade: "7",
    resultTime: "06 Months",
    beforeImage: after,
    afterImage: after,
    doctorNotes: [
      "Improved forehead framing through hairline reconstruction.",
      "Denser and more youthful appearance after 6 months.",
    ],
    surgeryCount: "second",
  },
];

const Results = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [filters, setFilters] = useState({
    grade: "",
    area: "",
    grafts: "",
    surgeryCount: "",
    ageGroup: "",
  });
  const [transformations, setTransformations] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/results`)
      .then((res) => res.json())
      .then(setTransformations);
  }, []);

  const openModal = (patient) => {
    setSelectedPatient(patient);
  };

  const closeModal = () => {
    setSelectedPatient(null);
  };

  // const filteredTransformations = transformations.filter((t) => {
  //   return (
  //     (filters.grade === "" || t.grade === filters.grade) &&
  //     (filters.area === "" || t.area === filters.area) &&
  //     (filters.grafts === "" || t.grafts === filters.grafts) &&
  //     (filters.surgeryCount === "" ||
  //       t.surgeryCount === filters.surgeryCount) &&
  //     (filters.ageGroup === "" || t.age === filters.ageGroup)
  //   );
  // });

  const filteredTransformations = transformations.filter((t) => {
    // Skip promos and videos
    if (t.promo || t.video) return true;

    const matchesGrade = filters.grade === "" || t.grade === filters.grade;
    const matchesArea = filters.area === "" || t.area === filters.area;
    const matchesSurgery =
      filters.surgeryCount === "" || t.surgeryCount === filters.surgeryCount;

    // Graft Range Filter
    let matchesGrafts = true;
    if (filters.grafts !== "") {
      const [minGrafts, maxGrafts] = filters.grafts.split(" - ").map(Number);
      matchesGrafts = t.grafts >= minGrafts && t.grafts <= maxGrafts;
    }

    // Age Group Filter
    let matchesAge = true;
    if (filters.ageGroup !== "" && t.age !== null) {
      const [minAge, maxAge] = filters.ageGroup.split(" - ").map(Number);
      matchesAge = t.age >= minAge && t.age <= maxAge;
    }

    return (
      matchesGrade &&
      matchesArea &&
      matchesSurgery &&
      matchesGrafts &&
      matchesAge
    );
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Lightbox Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-0 position-relative">
          <button
            onClick={handleClose}
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Close"
          ></button>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/nWsXUkADDow"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>

      {/* Banner */}
      <div className="sec-pad sec-bg pt-0">
        <div className="container">
          <div className="row h-500 h-sm-fit-content">
            <div className="col-md-4 p-3 just-align-center align-items-end">
              <div
                className="card py-3 bg-black rounded-4 position-relative overflow-hidden promo"
                style={{ height: "400px", width: "250px" }}
              >
                <button
                  className="btn btn-light primary-c rounded-circle position-absolute top-50 start-50 translate-middle"
                  style={{ width: "60px", height: "60px", fontSize: "24px" }}
                  onClick={handleShow}
                >
                  ▶
                </button>
              </div>
            </div>

            <div className="col-md-4 just-align-center flex-column">
              <h1 className="fw-500 text-center" style={{ fontSize: "45px" }}>
                Real Results <br />
                <span className="primary-c">Real confidence.</span>
              </h1>
              <h4 className="sec-c fw-normal mt-2 text-center">
                From thinning crowns to full heads — see what’s possible with
                QHT.
              </h4>
              <img
                src={scrollDown}
                height="150"
                className="mt-5 d-none d-md-block"
                alt=""
              />
            </div>

            <div className="col-md-4 d-none d-md-flex just-align-center align-items-start">
              <ReactCompareSlider
                style={{
                  borderRadius: "20px",
                  height: "400px",
                  width: "400px",
                }}
                itemOne={<ReactCompareSliderImage src={after} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={after} alt="After" />}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      {/* <div className="sec-pad sec-bg pt-0">
        <div className="container">
          <img src={ResultBan} className="w-100" alt="" />
        </div>
      </div> */}

      {/* marquee */}
      <div className="marquee-wrapper">
        <div className="marquee">
          <div className="marquee-content">
            {features.map((item, index) => (
              <span key={index} className="marquee-item">
                {item}
                {index !== features.length - 1 && (
                  <span className="separator"> ◆ </span>
                )}
              </span>
            ))}
            {/* Duplicate content for seamless scrolling */}
            {features.map((item, index) => (
              <span key={`dup-${index}`} className="marquee-item">
                {item}
                {index !== features.length - 1 && (
                  <span className="separator"> ◆ </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="sec-pad" id="result">
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center border-bottom pb-4">
            <h2 className="p-head">Browse Transformation Like Yours</h2>
            <h6 className="border py-1 px-2 rounded text-secondary">1</h6>
          </div>

          {/* Filters */}
          <div className="row border-bottom py-2 sec-c">
            <div className="col-md-2 border-end">
              <button className="btn">
                <i className="fa-solid fa-sliders"></i> &nbsp; Filters
              </button>
            </div>

            <div className="col-md-2 border-end">
              <select
                className="form-select border-white"
                value={filters.grade}
                onChange={(e) =>
                  setFilters({ ...filters, grade: e.target.value })
                }
              >
                <option value="">Baldness Grade</option>
                <option value="1">Grade 1</option>
                <option value="2">Grade 2</option>
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
              </select>
            </div>

            <div className="col-md-2 border-end">
              <select
                className="form-select border-white"
                value={filters.area}
                onChange={(e) =>
                  setFilters({ ...filters, area: e.target.value })
                }
              >
                <option value="">Area Treated</option>
                <option>Full</option>
                <option>Front</option>
                <option>Crown</option>
                <option>Hairline</option>
              </select>
            </div>

            <div className="col-md-2 border-end">
              <select
                className="form-select border-white"
                value={filters.grafts}
                onChange={(e) =>
                  setFilters({ ...filters, grafts: e.target.value })
                }
              >
                <option value="">Grafts Range</option>
                <option>0 - 1000</option>
                <option>1000 - 2000</option>
                <option>2000 - 3000</option>
                <option>3000 - 4000</option>
                <option>4000 - 5000</option>
              </select>
            </div>

            <div className="col-md-2 border-end">
              <select
                className="form-select border-white"
                value={filters.surgeryCount}
                onChange={(e) =>
                  setFilters({ ...filters, surgeryCount: e.target.value })
                }
              >
                <option>Surgery Count</option>
                <option value="first">First-Time Surgery</option>
                <option value="second">Second-Time Surgery</option>
              </select>
            </div>

            <div className="col-md-2 border-end">
              <select
                className="form-select border-white"
                value={filters.ageGroup}
                onChange={(e) =>
                  setFilters({ ...filters, ageGroup: e.target.value })
                }
              >
                <option value="">Age Group</option>
                <option>23 - 30</option>
                <option>30 - 40</option>
                <option>40 - 50</option>
                <option>50 - 70</option>
                <option>60 - 70</option>
              </select>
            </div>
          </div>

          {/* Cards */}
          <div className="row g-3 py-5">
            {filteredTransformations.slice(0, visibleCount).map((t, index) => {
              // {transformations.slice(0, visibleCount).map((t, index) => {
              // {transformations.map((t, index) => {
              // 6th card - Promo
              if (t.promo && index === 5) {
                return (
                  <div className="col-md-4 p-3" key={index}>
                    <div
                      className="card h-100 rounded-4 text-white text-start primary-bg"
                      style={{ backgroundColor: "#586548", padding: "40px" }}
                    >
                      <img
                        src={t.img}
                        alt="Promo Art"
                        className="mx-auto mb-4 w-100 h-100 object-fit-contain"
                        style={{ filter: "invert(1)" }}
                      />
                      <h3 className="fw-500">Want Similar Results?</h3>
                      <h5 className="fw-light">
                        Tailored strategies for success, book free consultation.
                      </h5>
                      <a
                        href={`tel:${t.phone}`}
                        className="btn bg-light primary-c rounded-pill mt-3"
                        style={{ filter: "grayscale(1)" }}
                      >
                        📞 {t.phone}
                      </a>
                    </div>
                  </div>
                );
              }

              // 7th card - Video
              if (t.video && index === 6) {
                return (
                  <div className="col-md-4 p-3" key={index}>
                    <div className="card h-100 py-3 bg-black rounded-4 position-relative overflow-hidden promo">
                      <button
                        className="btn btn-light primary-c rounded-circle position-absolute top-50 start-50 translate-middle"
                        style={{
                          width: "60px",
                          height: "60px",
                          fontSize: "24px",
                        }}
                        onClick={handleShow}
                      >
                        ▶
                      </button>
                      <div className="card-body text-center d-flex justify-content-center align-items-end">
                        <a
                          href="/book-consultation"
                          className="btn btn-light px-4 py-2 primary-c fs-5 fw-500 rounded-pill mt-3"
                        >
                          Book Free Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              // Normal transformation cards
              if (t.name) {
                return (
                  <div className="col-md-4 p-3" key={index}>
                    <div className="card h-100 rounded-4">
                      {/* Before-After Slider */}
                      <div className="card-img-top">
                        <ReactCompareSlider
                          style={{ borderRadius: "20px" }}
                          className="h-300"
                          itemOne={
                            <ReactCompareSliderImage
                              src={t.beforeImage}
                              alt="Before"
                            />
                          }
                          itemTwo={
                            <ReactCompareSliderImage
                              src={t.afterImage}
                              alt="After"
                            />
                          }
                        />
                      </div>
                      <div className="card-body p-4">
                        <div className="row">
                          <div className="col-md-6 border-bottom py-3 sec-c">
                            <p className="card-text">
                              Grafts : &nbsp;
                              <span className="text-black">{t.grafts}</span>
                            </p>
                          </div>
                          <div className="col-md-6 border-bottom py-3 sec-c">
                            <p className="card-text">
                              Grade : &nbsp;
                              <span className="text-black">{t.grade}</span>
                            </p>
                          </div>
                          <div>
                            <p className="card-text border-bottom py-3 sec-c">
                              Area : &nbsp;
                              <span className="text-black">{t.area}</span>
                            </p>
                          </div>
                          <div>
                            <p className="card-text py-3 sec-c">
                              Result : &nbsp;
                              <span className="text-black">{t.resultTime}</span>
                            </p>
                          </div>
                        </div>
                        <button
                          className="btn btn-outline-dark rounded-pill w-100 mt-2 fs-6"
                          onClick={() => openModal(t)}
                        >
                          → &nbsp;&nbsp;&nbsp;Click to see full growth timeline
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* Modal */}
          {selectedPatient && (
            <div className="modal-backdrop show" onClick={closeModal}>
              <div
                className="modal-content p-5"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="row mb-4">
                  <div className="col-md-3 border-end">
                    <h3>{selectedPatient.name}</h3>
                    <p>Age: {selectedPatient.age} Years</p>
                  </div>
                  <div className="col-md-3 border-end justify-content-center d-flex flex-column align-content-center">
                    <p className="sec-c mb-2 fw-light">Number of Grafts </p>
                    <p className="fw-500">{selectedPatient.grafts}</p>
                  </div>
                  <div className="col-md-2 border-end justify-content-center d-flex flex-column align-content-center">
                    <p className="sec-c mb-2 fw-light">Grade</p>
                    <p className="fw-500"> {selectedPatient.grade}</p>
                  </div>
                  <div className="col-md-2 border-end justify-content-center d-flex flex-column align-content-center">
                    <p className="sec-c mb-2 fw-light">Treated areas</p>
                    <p className="fw-500">{selectedPatient.area}</p>
                  </div>
                  <div className="col-md-2 border-end justify-content-center d-flex flex-column align-content-center">
                    <p className="sec-c mb-2 fw-light">Results</p>
                    <p className="fw-500">{selectedPatient.resultTime}</p>
                  </div>
                </div>

                <div className="d-flex flex-column flex-md-row gap-4">
                  <div>
                    <img
                      src={selectedPatient.beforeImage}
                      alt="Before"
                      className="img-fluid rounded-3"
                    />
                  </div>
                  <div>
                    <img
                      src={selectedPatient.afterImage}
                      alt="After"
                      className="img-fluid rounded-3"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-8">
                    <h5 className="mt-4">Doctor Notes</h5>
                    <ul className="ps-3 fs-6 sec-c lh-lg">
                      {selectedPatient.doctorNotes.map((note, i) => (
                        <li key={i}>{note}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-4 just-align-center flex-column align-items-start">
                    <p className="mb-4">Want similar results?</p>
                    <button className="btn primary-btn px-4">
                      Book Free Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Load More */}
          {visibleCount < transformations.length && (
            <div className="d-flex justify-content-center gap-4 align-items-center mt-5">
              <div className="line d-none d-md-block"></div>
              <div>
                <button
                  className="primary-btn px-5"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                >
                  Load More
                </button>
              </div>
              <div className="line d-none d-md-block"></div>
            </div>
          )}
        </div>
      </div>

      {/* Best */}
      <div className="sec-pad">
        <div className="container sec-c">
          <h2 className="p-head text-black mb-3">
            Best Hair Transplant Clinic in India
          </h2>
          <p>
            When it comes to choosing the best hair transplant clinic in India,
            QHT Clinic consistently ranks at the top. Renowned for its advanced
            techniques, highly experienced surgeons, and exceptional patient
            outcomes, QHT Clinic has become a trusted name in the field of hair
            restoration.
          </p>
          <p>
            At QHT Clinic, patients benefit from the latest innovations such as
            FUE (Follicular Unit Extraction) and DHI (Direct Hair Implantation),
            combined with personalized care and state-of-the-art facilities.
            Whether you're dealing with male pattern baldness, thinning hair, or
            seeking beard and eyebrow transplants, QHT Clinic offers customized
            solutions designed to deliver natural, permanent results.
          </p>
          <h6 className="mb-3 mt-4">Why QHT Clinic is the Best</h6>
          <ul>
            <li>Board-certified hair transplant specialists</li>
            <li>High graft survival rate and natural hairline design</li>
            <li>Thousands of satisfied clients from India and abroad</li>
            <li>Hygienic, fully equipped operating suites</li>
            <li>Transparent pricing with no hidden charges</li>
          </ul>
        </div>
      </div>

      {/* Grade */}
      <div className="sec-pad primary-bg">
        <div className="container text-white">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
              <h2 className="p-head text-white fw-normal">
                What’s Your Baldness Grade
              </h2>
              <h6 className="border py-1 px-2 rounded text-secondary fw-light text-white">
                2
              </h6>
            </div>
          </div>

          <div className="row mt-md-5 ">
            <div className="col-md-6">
              <img
                src={bald}
                className="w-md-75 w-100 mb-4 mb-md-0 rounded-3"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <h3 className="fs-2 fw-normal">
                Finally, get the right treatment for your hair loss.
              </h3>
              <h6 className="fw-normal my-3">
                <span>
                  <img src={clock} width="20" alt="" />
                </span>
                &nbsp;&nbsp;Takes approximately 1 min
              </h6>
              <h5 className="fw-normal">
                Answer a few questions to see if Keeps is right for you and
                we'll recommend a plan based on your results.
              </h5>
              <ul className="list-unstyled my-4">
                <li className="my-4">
                  <span>
                    <img src={katori} width="40" alt="" />
                  </span>
                  &nbsp;&nbsp;&nbsp;Clinically proven formula
                </li>
                <li className="my-4">
                  <span>
                    <img src={lr} width="40" alt="" />
                  </span>
                  &nbsp;&nbsp;&nbsp;Guidance from hair loss experts
                </li>
                <li className="my-4">
                  <span>
                    <img src={wow} width="40" alt="" />
                  </span>
                  &nbsp;&nbsp;&nbsp;Affordable treatment options
                </li>
              </ul>
              <button className="btn bg-white rounded-pill px-5 mt-3 py-2 primary-c">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />
    </>
  );
};

export default Results;
