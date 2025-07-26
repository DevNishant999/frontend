import React, { useState, useEffect } from "react";
// import "./Service.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Testimonials from "../../components/Testimonials.jsx";
import QuickForm from "../../components/QuickForm.jsx";
import Bangalore from "../../assets/city/bangalore.png";
import Ahmedabad from "../../assets/city/ahmedabad.png";
import Chandigarh from "../../assets/city/chandigarh.png";
import Chennai from "../../assets/city/chennai.png";
import Gurgaon from "../../assets/city/gurgaon.png";
import Hairdwar from "../../assets/city/hairdwar.png";
import Hyderabad from "../../assets/city/hyderabad.png";
import Indore from "../../assets/city/indore.png";
import Jaipur from "../../assets/city/jaipur.png";
import Kolkata from "../../assets/city/kolkata.png";
import Lucknow from "../../assets/city/lucknow.png";
import Mumbai from "../../assets/city/mumbai.png";
import Noida from "../../assets/city/noida.png";
import Pune from "../../assets/city/pune.png";
import Rishikesh from "../../assets/city/rishikesh.png";
import S1 from "../../assets/s1.png";
import S2 from "../../assets/s2.png";
import S3 from "../../assets/s3.png";
import Llogo from "../../assets/llogo.png";
import Booked from "../../assets/booked.png";
import Men from "../../assets/men.png";
import Psurgery from "../../assets/psurgery.png";
import Natural from "../../assets/natural.png";
import Care from "../../assets/care.png";
import Expert from "../../assets/expert.png";
import Facility from "../../assets/facility.png";
import Celeb from "../../assets/celeb.png";
import Age from "../../assets/icon/age.png";
import Alopecia from "../../assets/icon/alopecia.png";
import Genetics from "../../assets/icon/genetics.png";
import Hormonal from "../../assets/icon/hormonal.png";
import Scarring from "../../assets/icon/scarring.png";
import GoogleRating from "../../assets/GoogleRating.png";
import TwoFace from "../../assets/twoface.png";
import Banner from "../../assets/banner.png";
import D1 from "../../assets/d1.png";
import D2 from "../../assets/d2.png";
import Question from "../../assets/question.png";
import FUE from "../../assets/fue.jpg";
import Cost from "../../assets/icon/cost.png";
import Graft from "../../assets/icon/graft.png";
import Result from "../../assets/icon/result.png";
import Time from "../../assets/icon/time.png";
import beforeAfterImage from "../../assets/procedure.png";
import Bijli from "../../assets/icon/bijli.png";
import alchol from "../../assets/icon/alchol.png";
import hairwash from "../../assets/icon/hairwash.png";
import glass from "../../assets/icon/glass.png";
import cut from "../../assets/icon/cut.png";
import doctor from "../../assets/icon/doctor.png";
import graftp from "../../assets/icon/graftp.png";
import bald from "../../assets/icon/bald.png";
import location from "../../assets/icon/location.png";
import GetInTouch from "../../components/GetInTouch.jsx";
import Videos from "../../components/Videos.jsx";
import Results from "../../components/Results.jsx";
import Faqs from "../../components/Faqs.jsx";

const City = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/cities/${slug}`;
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        console.log("Service data:", data);
        setData(data);
      })
      .catch((err) => {
        console.error("Error fetching Service:", err);
      });
  }, [slug, location.pathname]);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      {/* SEO HEAD */}
      <Helmet>
        <title>{data?.metaTitle || data?.title}</title>
        <meta
          name="description"
          content={data?.metaDescription || data?.title}
        />
        <meta name="keywords" content={data?.metaKeywords || ""} />
      </Helmet>

      {/* Banner */}
      <div className="sec-pad sec-bg">
        <div className="container">
          <div className="row">
            <div
              id="dottedCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {/* Carousel items */}
              <div className="carousel-inner">
                {data.banner.images.map((slide, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={slide.src}
                      className="d-block w-100"
                      alt={slide.alt}
                    />
                  </div>
                ))}
              </div>

              {/* Indicators (dots) */}
              <div className="carousel-indicators position-static m-0 justify-content-start">
                {data.banner.images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#dottedCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : undefined}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickForm />

      {/* Description */}
      <div className="sec-pad">
        <div className="container mt-md-5 sec-c">
          <div className="row">
            <div className="col-md-6 just-align-center flex-column align-items-start">
              <h2 className="p-head text-black m-0">
                {data.description.title}
              </h2>
              <h3 className="fw-normal text-black my-3">
                {data.description.subtitle}
              </h3>
              {data.description.paragraphs.map((p, index) => (
                <p>{p}</p>
              ))}
            </div>
            <div className="col-md-6 just-align-center">
              <img
                src={data.description.image}
                className="w-md-75 w-100 rounded-4"
                alt=""
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 just-align-center">
              <img src={D2} className="w-md-75 w-100 rounded-4" alt="" />
            </div>
            <div className="col-md-6 just-align-center flex-column align-items-start">
              <h2 className="p-head text-black mt-4 mt-md-0">
                {data.hairTransplantInIndia.title}
              </h2>
              {data.hairTransplantInIndia.paragraphs.map((p, index) => (
                <p>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Results />

      {/* Who is ideal */}
      <div className="sec-pad">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2 className="p-head">{data.idealCandidate.title}</h2>
            </div>
            <div className="col-md-6">
              <h5 className="fw-light sec-c">{data.idealCandidate.subtitle}</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img src={data.idealCandidate.image} className="w-75" alt="" />
            </div>
            <div className="col-md-8">
              <div className="row">
                {data.idealCandidate.criteria.map((criteria, index) => (
                  <div className="col-md-6 mb-3">
                    <div className="border rounded-3 p-3 h-100">
                      <div className="me-3 text-white primary-bg fw-light rounded-circle just-align-center hw-20 fs-6 mb-3 p-3">
                        ✔
                      </div>
                      <h4 className="fw-500"> {criteria.title}</h4>
                      <p className="text-muted small">{criteria.description}</p>
                    </div>
                  </div>
                ))}
                <div>
                  <div className="row mx-1 p-5 rounded-4 bg-qu">
                    <div className="col-md-8">
                      <h5 className="text-white">Still Confused?</h5>
                      <h3 className="text-white">Talk to our experts</h3>
                    </div>
                    <div className="col-md-4 just-align-center">
                      <button className="primary-btn bg-white text-black px-4">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types */}
      <div className="sec-pad sec-bg">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="p-head text-center">
              {data.typesOfHairTransplant.title}
            </h2>
            <h5 className="sec-c fw-light text-center w-md-75 my-3">
              {data.typesOfHairTransplant.subtitle}
            </h5>
          </div>

          <div className="row mt-5 gap-5 gap-md-0">
            {data.typesOfHairTransplant.types.map((types, index) => (
              <div className="col-md-4">
                <h4>{types.title}</h4>
                <p>{types.description}</p>
                <img
                  src={types.image}
                  className="w-100 rounded-4 mt-3 mb-4"
                  alt=""
                />
                <ul>
                  {types.features.map((f, i) => (
                    <li>{f}</li>
                  ))}
                </ul>
                <button className="btn border border-grey rounded-pill px-4 bg-transparent sec-c">
                  {types.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="g-gradient sec-pad">
        <div className="container">
          <div className="row border-bottom pb-5">
            <div className="col-md-9">
              <h2 className="p-head text-white">{data.benefits.title}</h2>
              <h5 className="mt-3 text-white fw-light lh-base">
                {data.benefits.subtitle}
              </h5>
            </div>
          </div>

          {data.benefits.items.map((item) => (
            <div
              key={item._id}
              className="row align-items-center py-5 border-bottom"
            >
              <div className="col-md-2">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-md-75 mb-4 mb-md-0 w-25"
                />
              </div>
              <div className="col-md-4">
                <h4 className="fw-normal text-white lh-base">{item.title}</h4>
              </div>
              <div className="col-md-6">
                <h5 className="text-white fw-light lh-base">
                  {item.description}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Procedure */}
      <div className="sec-pad">
        <div className="container py-md-5">
          <div className="row mb-4 justify-content-between">
            <div className="col-md-6">
              <h2 className="p-head">{data.procedure.title}</h2>
              <h5 className="sec-c fw-normal">{data.procedure.description}</h5>
            </div>
            <div className="col-md-5">
              <div className="row">
                {data.procedure.stats.map((stat) => (
                  <div key={stat._id} className="col-md-6 col-6 mb-4">
                    <div className="hw-200 rounded-4 text-start border rounded p-4">
                      {stat.value ? (
                        <>
                          <h2
                            className="primary-c fw-normal"
                            style={{ fontSize: "70px" }}
                          >
                            {stat.value}
                          </h2>
                          <h4 className="primary-c">{stat.label}</h4>
                        </>
                      ) : (
                        <>
                          <img
                            src={stat.icon}
                            className="w-25"
                            alt={stat.label}
                          />
                          <h4 className="primary-c mt-4">{stat.label}</h4>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row mt-5 align-items-center">
            <div className="col-md-5 text-md-start text-center justify-content-between">
              <img
                src={data.procedure.beforeAfterImage}
                alt="Before and After"
                className="img-fluid w-md-75 mb-5"
              />
              <button className="primary-btn px-4 mb-5 mb-md-0 mt-5">
                {data.procedure.buttonText}
              </button>
            </div>
            <div className="col-md-7 border-bottom">
              {data.procedure.steps.map((step) => (
                <div
                  key={step._id}
                  className="d-flex justify-content-between align-items-start border-top py-5"
                >
                  <div>
                    <h4 className="fw-500">{step.title}</h4>
                    <p className="sec-c">{step.description}</p>
                  </div>
                  <h2 className="hollow-number">{step.number}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Procedure Tips */}
      <div className="sec-pad pt-5">
        <div className="container border-top border-lgrey pt-5">
          <div className="row pt-0 pt-md-5">
            <div className="col-md-5">
              <h2 className="p-head">{data.preProcedureTips.title}</h2>
            </div>
            <div className="col-md-7">
              <h5 className="fw-normal sec-c">
                {data.preProcedureTips.subtitle}
              </h5>
            </div>
          </div>

          <div className="row my-5">
            {data.preProcedureTips.tips.map((tip, index) => (
              <div
                key={tip._id}
                className={`col-md-3 ${
                  index === 0
                    ? "border-lgrey"
                    : index === data.preProcedureTips.tips.length - 1
                    ? "border-lgrey"
                    : "border-x border-lgrey"
                } px-md-5 px-3`}
              >
                <img src={tip.icon} alt={tip.title} />
                <h4>{tip.title}</h4>
                <p className="sec-c">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cost */}
      <div className="sec-pad sec-bg" id="Cost">
        <div className="container">
          {/* Dynamic Main Heading */}
          <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
            <h2 className="p-head">{data.cost.title}</h2>
            <h6 className="border py-1 px-2 rounded text-secondary">5</h6>
          </div>

          <div className="row mt-5">
            <div className="col-lg-5">
              <p className="sec-c">{data.cost.description}</p>
              <div className="mt-5">
                <span className="d-none d-md-flex fs-1 sec-c border hw-100 border-secondary just-align-center rounded-circle">
                  ↓
                </span>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="bg-white rounded-4 px-3 shadow-sm">
                <table className="table table-borderless mb-0">
                  <thead>
                    <tr>
                      {data.cost.costTable.headers.map((header, index) => (
                        <th
                          key={index}
                          className={`fs-5 fw-semibold ${
                            index === 0 ? "border-end" : ""
                          }`}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* These rows below are static because your JSON doesn’t have them yet.
                  If you have rows in JSON, just map them like this: */}
                    {[
                      {
                        type: "Follicular Unit Extraction (FUE)",
                        cost: "30,000 – 1,50,000",
                      },
                      {
                        type: "Follicular Unit Transplantation (FUT)",
                        cost: "25,000 – 1,25,000",
                      },
                      {
                        type: "Direct Hair Implantation (DHI)",
                        cost: "40,000 – 2,00,000",
                      },
                      {
                        type: "Robotic Hair Transplant",
                        cost: "75,000 – 3,00,000",
                      },
                    ].map((row, index) => (
                      <tr key={index}>
                        <td className="border-end">{row.type}</td>
                        <td className="sec-c">{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Factors Title & Description */}
          <div className="row my-5">
            <div className="col-md-5">
              <h3>{data.cost.factors.title}</h3>
            </div>
            <div className="col-md-6">
              <h6 className="sec-c fw-normal">
                {data.cost.factors.description}
              </h6>
            </div>
          </div>

          {/* Factors Items */}
          <div className="row align-items-center my-5">
            {data.cost.factors.items.map((item, index) => (
              <div
                key={item._id}
                className={`col-md-3 text-start ${
                  index === 0
                    ? "border-lgrey"
                    : index === data.cost.factors.items.length - 1
                    ? "border-lgrey"
                    : "border-x border-lgrey"
                } px-md-5 px-3`}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mb-3 hw-100 object-fit-contain"
                />
                <h5 className="fw-500">{item.title}</h5>
                <p className="text-muted small">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why we are */}
      <div className="primary-bg sec-pad text-white">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-8">
              <h2 className="p-head">
                Why we are amongst the most trusted <br />
                hair transplant clinic in india
              </h2>
              <p className="mt-3 text-white">
                Learn about the recovery timeline and essential aftercare tips
                following a hair transplant to ensure proper healing, optimal
                results, and long-lasting, healthy hair growth.
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <img
                src={GoogleRating}
                alt="Google Rating"
                className="img-fluid w-75"
              />
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-6 text-center flex-column d-flex">
              <img
                src={TwoFace}
                alt="Transplant illustration"
                className="img-fluid"
                style={{ maxWidth: "350px" }}
              />
              <button className="btn btn-light rounded-pill mt-5 px-4 py-2 fw-medium w-md-50">
                Book Free Consultation
              </button>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <div className="row g-4">
                {[
                  { value: "325+", label: "Transplant Completed" },
                  { value: "100%", label: "Client Satisfaction" },
                  { value: "05+", label: "Clinics All Over India" },
                  { value: "200+", label: "Experts Workforces" },
                ].map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <h3 className="peacock fw-500 fs-2">{item.value}</h3>
                    <h4 className="fw-normal fs-4">{item.label}</h4>
                    <p className="text-white small">
                      Over 325 successful transplants completed with expert care
                      and precision.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Videos />

      {/* Cause */}
      <div className="sec-pad pt-0">
        <div className="container pt-5 border-grey border-top">
          <div className="row">
            <div className="col-md-4 just-align-center flex-column">
              <h2 className="p-head">{data.causesOfHairLoss.title}</h2>
              <h5 className="sec-c fw-normal my-3">
                {data.causesOfHairLoss.subtitle}
              </h5>
            </div>

            {data.causesOfHairLoss.causes.map((cause) => (
              <div className="col-md-4 p-3" key={cause._id}>
                <div className="p-5 sec-bg rounded-4 h-350">
                  <img src={cause.icon} className="mb-5" alt={cause.title} />
                  <h4>{cause.title}</h4>
                  <h6 className="sec-c fw-normal">{cause.description}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="sec-pad g-gradient">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-5">
              <h2 className="p-head text-white">{data.whyChooseUs.title}</h2>
            </div>
            <div className="col-md-7">
              <h5 className="text-white fw-light">
                {data.whyChooseUs.subtitle}
              </h5>
            </div>
          </div>

          <div className="row">
            {data.whyChooseUs.items.map((item, index) => (
              <div className="col-md-4" key={item._id}>
                {item.specialBox ? (
                  <div
                    className="text-dark p-5 mb-4 d-flex flex-column justify-content-between"
                    style={{
                      backgroundColor: "#C5ED82",
                      minHeight: "400px",
                      borderRadius: "12px",
                      color: "#000",
                    }}
                  >
                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={item.specialBox.image}
                          alt=""
                          className="object-fit-cover"
                          height="80"
                          width="185"
                          style={{ objectPosition: "left" }}
                        />
                      </div>
                      <h4 className="fw-500">{item.specialBox.title}</h4>
                      <h4 className="fw-light">{item.specialBox.subtitle}</h4>
                    </div>
                    <div>
                      <button className="primary-btn px-5">
                        {item.specialBox.buttonText}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="text-white p-4 mb-4 d-flex justify-content-end align-items-start flex-column"
                    style={{
                      background: `
                linear-gradient(
                  180deg,
                  rgba(0, 0, 0, 0) 42.06%,
                  rgba(0, 0, 0, 0.28) 59.86%,
                  rgba(0, 0, 0, 0.514) 76.66%,
                  #000000 104.98%
                ),
                url(${item.bg}) center center / cover no-repeat
              `,
                      minHeight: "400px",
                      borderRadius: "12px",
                    }}
                  >
                    <div className="h-150 mb-2">
                      <h4>{item.title}</h4>
                      <p className="fw-light">{item.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonals */}
      <Testimonials />

      {/* Post Surgery Support */}
      <div className="sec-pad">
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div className="col-md-6">
              <h2 className="p-head mb-4">{data.postSurgerySupport.title}</h2>
              <img
                src={data.postSurgerySupport.image}
                className="w-md-75 w-100"
                alt="Post Surgery Support"
              />
            </div>

            {/* Right Side */}
            <div className="col-md-6">
              <h5 className="sec-c fw-light mb-3 border-bottom pb-4 mt-4 mt-md-0">
                {data.postSurgerySupport.description}
              </h5>

              <div>
                {data.postSurgerySupport.items.map((item, index) => (
                  <div
                    key={item._id}
                    className={`border-bottom pb-4 mb-4 d-flex ${
                      index === data.postSurgerySupport.items.length - 1
                        ? "border-bottom-0"
                        : ""
                    }`}
                  >
                    <div className="me-3 text-white ter-bg fw-light rounded-circle just-align-center h-50 fs-6 mt-2 px-2 py-1">
                      ✔
                    </div>
                    <div>
                      <h4 className="fw-500 mb-1">{item.title}</h4>
                      <p className="mb-0 text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <div className="sec-pad primary-bg">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="p-head text-white text-center">
              {data.dosAndDonts.title}
            </h2>
            <h5 className="sec-c fw-light w-md-75 my-3 text-white text-center">
              {data.dosAndDonts.subtitle}
            </h5>
          </div>

          <div className="container py-5">
            <div className="row g-5">
              {/* Don'ts */}
              <div className="col-md-6">
                <div className="p-5 rounded-5 shadow bg-white h-100">
                  <h4 className="fw-bold fs-3 mb-3 border-bottom border-lgrey pb-4">
                    Don’ts
                  </h4>
                  <ul className="list-unstyled">
                    {data.dosAndDonts.donts.map((item, index) => (
                      <li
                        key={item._id}
                        className={`my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px h-sm-fit-content ${
                          index === data.dosAndDonts.donts.length - 1
                            ? "border-bottom-0"
                            : ""
                        }`}
                      >
                        <span className="bg-danger fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center">
                          ✖
                        </span>
                        &nbsp;
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Do’s */}
              <div className="col-md-6">
                <div className="p-5 rounded-5 shadow bg-white h-100">
                  <h4 className="fw-bold fs-3 mb-3 border-bottom border-lgrey pb-4">
                    Do’s
                  </h4>
                  <ul className="list-unstyled">
                    {data.dosAndDonts.dos.map((item, index) => (
                      <li
                        key={item._id}
                        className={`my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px h-sm-fit-content ${
                          index === data.dosAndDonts.dos.length - 1
                            ? "border-bottom-0"
                            : ""
                        }`}
                      >
                        <span className="primary-bg fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center">
                          ✓
                        </span>
                        &nbsp;
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recovery */}
      <div className="sec-pad sec-bg">
        <div className="container">
          <div className="row">
            <h2 className="p-head">{data.recovery.title}</h2>
            <h5 className="sec-c fw-light w-md-75 my-3">
              {data.recovery.subtitle}
            </h5>
          </div>

          <div className="container py-5">
            <div className="row">
              {/* Tabs Navigation */}
              <div className="col-md-2">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {data.recovery.weeks.map((week, index) => (
                    <button
                      key={week._id}
                      className={`nav-link sec-c rounded-pill tab-btn text-center mb-4 w-md-75 ${
                        index === 0 ? "active" : ""
                      }`}
                      id={`v-pills-${index}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#v-pills-${index}`}
                      type="button"
                      role="tab"
                    >
                      {week.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="col-md-10">
                <div className="tab-content" id="v-pills-tabContent">
                  {data.recovery.weeks.map((week, index) => (
                    <div
                      key={week._id}
                      className={`tab-pane fade ${
                        index === 0 ? "show active" : ""
                      }`}
                      id={`v-pills-${index}`}
                      role="tabpanel"
                    >
                      <div className="row">
                        {/* Image */}
                        <div className="col-md-6">
                          <img
                            src={week.image}
                            alt={`${week.name} Image`}
                            className="img-fluid rounded w-100 object-fit-cover"
                            style={{ height: "560px" }}
                          />
                        </div>

                        {/* Text Section */}
                        <div className="col-md-6">
                          {/* What to Expect */}
                          <div className="bg-light p-4 mb-3 rounded-4 mt-3 mt-md-3 shadow-sm">
                            <h6 className="primary-c fw-bold">
                              WHAT TO EXPECT
                            </h6>
                            <ul className="list-unstyled fw-light">
                              {week.expectations.map((exp, idx) => (
                                <li
                                  key={idx}
                                  className={`py-4 ${
                                    idx !== week.expectations.length - 1
                                      ? "border-bottom border-lgrey"
                                      : ""
                                  }`}
                                >
                                  <span className="primary-bg text-white rounded-circle px-1 fs-20px">
                                    ✓
                                  </span>{" "}
                                  {exp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* How to Care */}
                          <div className="bg-light p-4 mb-3 rounded-4 shadow-sm">
                            <h6 className="primary-c fw-bold">HOW TO CARE</h6>
                            <ul className="list-unstyled fw-light">
                              {week.careInstructions.map((care, idx) => (
                                <li
                                  key={idx}
                                  className={`py-4 ${
                                    idx !== week.careInstructions.length - 1
                                      ? "border-bottom border-lgrey"
                                      : ""
                                  }`}
                                >
                                  <span className="primary-bg text-white rounded-circle px-1 fs-20px">
                                    ✓
                                  </span>{" "}
                                  {care}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sec-pad primary-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <h2 className="p-head text-white fw-normal">
                Get 20% off on your first booking!
              </h2>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center border-x px-4 border-white">
              <img src={Booked} className="w-100" alt="" />
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <button className="btn rounded-pill fs-5 px-5 py-3 bg-white primary-c">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="sec-pad pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="p-head text-center">{data.comparison.title}</h2>
            <h5 className="sec-c fw-light text-center w-md-75 my-3">
              {data.comparison.subtitle}
            </h5>
          </div>
          <div className="row align-items-center py-4">
            {data.comparison.columns.map((column, index) => (
              <div className="col-md-4 p-0" key={column._id}>
                <div className={`treat-box tb-${index + 1}`}>
                  <h4 className="primary-c fw-500">{column.title}</h4>
                  <ul>
                    {column.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="sec-pad" id="faq">
        <div className="container border-top border-grey pt-5">
          <div className="row pt-5">
            <div className="col-md-6 justify-content-between d-flex flex-column">
              <div>
                <h2 className="p-head w-75">Frequently Asked Questions.</h2>
                <h5 className="sec-c fw-light my-3">
                  If you don’t find relevant answer please send us your queries
                  on support@qhtclinic.com or Call +91-9084726916
                </h5>
              </div>
              <img src={Llogo} width="250" alt="" />
            </div>
            <div className="col-md-6">
              {/* <Faqs/> */}
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      What are the common causes of donor are a pain after a
                      hair transplant?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body sec-c p-0 pb-5">
                      Donor area pain post-transplant can stem from mild
                      inflammation, nerve irritation, or tension on the scalp.
                      It’s a normal part of the healing process and usually
                      subsides within a few days.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                    >
                      What's the cost of hair transplant in India?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body sec-c p-0 pb-5">
                      The cost varies depending on several factors like
                      technique and grafts needed. Contact us for a free
                      estimate.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                    >
                      Which are the different packages provided for hair
                      transplant India?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body sec-c p-0 pb-5">
                      We offer standard, premium, and VIP packages customized to
                      your needs.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                    >
                      Is there any impact of the type of hair surgery on the
                      cost?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body sec-c p-0 pb-5">
                      Yes, different techniques like FUE, FUT, or DHI have
                      varying costs.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                    >
                      Does hair transplant damage existing hair?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body sec-c p-0 pb-5">
                      No, if performed correctly, the existing hair remains
                      unaffected.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="sec-pad" id="insights">
        <div className="container border-top border-grey pt-5">
          <h2 className="p-head mb-5">{data.insights.title}</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {data.insights.items.map((item, i) => (
              <SwiperSlide>
                <img
                  src={item.image}
                  className="w-100 mb-4 h-250 rounded-3"
                  alt=""
                />
                <h4>{item.title}</h4>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Locations */}
      <div className="g-gradient sec-pad" id="location">
        <div className="container">
          <h2 className="p-head text-center text-white py-5">
            {data.locations.title}
          </h2>
          <div className="row">
            {data.locations.cities.map((city) => (
              <div className="col-md-2 col-6 p-2 p-md-3" key={city._id}>
                <div className="box rounded-4 text-center">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="img-fluid mb-2"
                  />
                  <h4 className="text-white fw-normal fs-5">{city.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GetInTouch />
    </>
  );
};

export default City;
