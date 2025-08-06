import React, { useState, useEffect } from "react";
import "./Home.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import Kapil from "../../assets/kapil.png";
import Anil from "../../assets/anil.png";
import surgery from "../../assets/surgery.png";
import surgery2 from "../../assets/surgery2.png";
import surgery3 from "../../assets/surgery3.png";
import book from "../../assets/book.png";
import after from "../../assets/after.png";
import ban from "../../assets/ban.png";
import Process from "../../assets/process.png";
import Process1 from "../../assets/Process1.png";
import gola from "../../assets/gola.png";
import i1 from "../../assets/icon/1.png";
import i2 from "../../assets/icon/2.png";
import i3 from "../../assets/icon/3.png";
import i4 from "../../assets/icon/4.png";
import i5 from "../../assets/icon/5.png";
import Testimonials from "../../components/Testimonials";
import Booknow from "../../components/Booknow";
import Faqs from "../../components/Faqs";
import Services from "../../components/Services";
import Loader from "../../components/Loader";

const tabs = [
  { id: 0, label: "Who Performs your surgery?" },
  { id: 1, label: "Technology" },
  { id: 2, label: "Graft Handling" },
  { id: 3, label: "Naturalness" },
  { id: 4, label: "Safety" },
];

const resultsData = [
  {
    grade: "Grade I (3)",
    pairs: [
      { before: after, after: after },
      { before: after, after: after },
      { before: after, after: after },
    ],
  },
  {
    grade: "Grade II (2)",
    pairs: [
      { before: after, after: after },
      { before: after, after: after },
    ],
  },
  {
    grade: "Grade III (3)",
    pairs: [
      { before: after, after: after },
      { before: after, after: after },
      { before: after, after: after },
    ],
  },
  {
    grade: "Grade IV (2)",
    pairs: [
      { before: after, after: after },
      { before: after, after: after },
    ],
  },
  {
    grade: "Grade V (3)",
    pairs: [
      { before: after, after: after },
      { before: after, after: after },
      { before: after, after: after },
    ],
  },
  {
    grade: "Grade VI (1)",
    pairs: [{ before: after, after: after }],
  },
  {
    grade: "Grade VII (3)",
    pairs: [
      { before: after, after: after },
      { before: after, after: after },
      { before: after, after: after },
    ],
  },
];

const Home = () => {
  const [data, setData] = useState(null);
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sliderValue, setSliderValue] = useState([50, 50, 50]);
  const [stageIndex, setStageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Fetch data
    const apiUrl = `${import.meta.env.VITE_API_URL}/home`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setData(result.sections);
        setHome(result);
        console.log(result.sections);
        console.log(result);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStageIndex(
        (prev) => (prev + 1) % data?.processSection?.stages?.length
      );
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, [data]);

  const getEmoji = (value) => {
    if (value < 25) return "😢";
    if (value < 75) return "😐";
    return "😄";
  };

  const handleSliderChange = (val, index) => {
    const updated = [...sliderValue];
    updated[index] = val;
    setSliderValue(updated);
  };

  // if (loading) return <div>Loading...</div>;
  if (!data) return <Loader />;

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(240, 246, 242, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)",
          overflowX: "hidden",
        }}
      >
        {/* Banner */}
        <div className="container pt-4" id="banner">
          <div
            className="row justify-content-center align-items-center gap-4 gap-md-0 h-fit-content"
            style={{ height: "450px" }}
          >
            <h1
              data-aos="fade-in"
              className="text-center w-md-75 w-100 fw-500 fs-sm-1 mt-4"
              style={{ fontSize: "60px" }}
            >
              {(() => {
                const words = data?.banner.heading.split(" ");
                const lastFive = words.slice(-5).join(" ");
                const rest = words.slice(0, -5).join(" ");
                return (
                  <>
                    {rest} <span className="primary-c">{lastFive}</span>
                  </>
                );
              })()}
            </h1>

            <h5
              data-aos="fade-in"
              className="text-center w-md-75 fw-normal w-100 fs-5 sec-c mb-3"
            >
              {data?.banner.subheading}
            </h5>
            <div
              data-aos="fade-up"
              className="d-flex justify-content-center align-items-center"
            >
              <a href={data?.banner.cta.link}>
                <button className="primary-btn px-5 py-3 border-n">
                  {data?.banner.cta.text}
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Celeb Slider */}
        <div className="container-fluid my-md-5 py-5">
          {/* <h2 className="text-center mb-4">{data?.celebritySlider.title}</h2> */}
          <Swiper
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
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
            {data?.celebritySlider.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div data-aos="zoom-in" data-aos-delay={index * 100}>
                  <img
                    className="rounded-5 w-100"
                    src={image}
                    alt=""
                    decoding="async"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Truth */}
        <div
          className="container my-4 primary-bg rounded-md-4 p-md-5 pt-5 g-gradient"
          id="truth"
        >
          <h2 className="text-white fs-1 mt-5">{data?.truthSection.title}</h2>
          <h6 className="text-white mb-5 fw-normal">
            {data?.truthSection.subtitle}
          </h6>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            spaceBetween={10}
            slidesPerView={2.5}
            loop={true}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1.5,
              },
              992: {
                slidesPerView: 2.5,
              },
            }}
          >
            {data?.truthSection.points.map((point, index) => (
              <SwiperSlide key={index}>
                <div
                  className="d-flex justify-content-start align-items-start"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="position-relative">
                    {activeIndex === index && (
                      <img
                        src={gola}
                        alt="Gola"
                        className="position-absolute top-0 start-50 translate-middle-x z-0 h-100"
                        decoding="async"
                      />
                    )}
                    <h1
                      className="truth-h mx-3 position-relative"
                      style={{ zIndex: 1 }}
                    >
                      {point.number}.
                    </h1>
                  </div>
                  <div>
                    <h2 className="text-white fw-medium h-fit-content fs-2">
                      {point.title}
                    </h2>
                    <h5 className="text-white fw-light">{point.description}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Our Promise */}
        <div className="container my-5">
          <div className="row">
            <div
              className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4"
              data-aos="fade-up"
            >
              <h2 className="fs-1">{data?.ourPromise.title}</h2>
              <h6 className="border py-1 px-2 rounded text-secondary">1</h6>
            </div>

            <div className="col-md-6" data-aos="fade-right">
              <h4>{data?.ourPromise.subtitle}</h4>
            </div>

            <div className="col-md-6">
              <ol className="custom-ol">
                {data?.ourPromise.promises.map((promise, index) => (
                  <li
                    key={index}
                    data-aos="fade-left"
                    data-aos-delay={index * 150} // stagger effect
                  >
                    <h5>{promise.title}</h5>
                    <p className="text-secondary fs-5">{promise.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Surg Slider */}
        <div className="container-fluid my-md-5 py-md-5">
          <Swiper
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
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
            {data?.surgeryGallery.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  data-aos="zoom-in"
                  data-aos-delay={index * 150} // staggered animation
                >
                  <img
                    className="rounded-4 w-100 h-500 object-fit-cover"
                    src={image}
                    alt=""
                    decoding="async"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* See differce */}
        <div className="container py-5 text-center" id="differnce">
          <h2 className="fw-500 fs-1" data-aos="fade-up">
            Slide to See the Difference That Matters
          </h2>

          <p
            className="text-muted fw-500 fs-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Most clinics promise dreams, but we focus on delivering real,
            <br className="d-none d-md-block" /> lifelong transformative
            results.
          </p>

          <div
            className="d-flex justify-content-center gap-md-5 align-items-center icons mt-5"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            {tabs.map((tab, index) => (
              <div
                key={index}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                className="badge px-1 px-md-2"
                title={tab.label}
              >
                <img
                  src={[i1, i2, i3, i4, i5][index]}
                  alt={`icon${index + 1}`}
                  decoding="async"
                />
              </div>
            ))}
          </div>

          {/* Content Box */}
          <div className="d-flex justify-content-center align-items-center">
            <div className="bg-white rounded-5 border p-md-4 mt-4 w-md-75 w-100">
              {[...Array(3)].map((_, i) => {
                return (
                  <div
                    className="row align-items-center my-4 border-bottom emoji"
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={300 + i * 150} // 300, 450, 600
                  >
                    <div className="col-md-3 col-4 my-4 text-end px-md-5">
                      <p className="fw-semibold mb-0 text-muted fw-bold">
                        Most Clinics ❎
                      </p>
                      <small className="text-muted text-light">
                        Technicians, not <br /> surgeons
                      </small>
                    </div>

                    <div className="col-md-6 col-4 my-4 position-relative">
                      <div
                        className="comparison-bar position-relative"
                        style={{
                          height: "6px",
                          background: "#e2e6de",
                          borderRadius: "3px",
                        }}
                      >
                        <div
                          className="fill-line"
                          style={{
                            width: `${sliderValue[i]}%`,
                            height: "6px",
                            backgroundColor: "#5c6e4a",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            borderRadius: "3px",
                          }}
                        ></div>

                        <div
                          className="smiley"
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: `${sliderValue[i]}%`,
                            transform: "translate(-50%, -50%)",
                            background: "white",
                            borderRadius: "50%",
                            padding: "6px",
                            fontSize: "20px",
                            boxShadow: "0 0 6px rgba(0,0,0,0.15)",
                            zIndex: 2,
                          }}
                        >
                          {getEmoji(sliderValue[i])}
                        </div>

                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={sliderValue[i]}
                          onChange={(e) =>
                            handleSliderChange(Number(e.target.value), i)
                          }
                          style={{
                            position: "absolute",
                            top: "-12px",
                            left: 0,
                            width: "100%",
                            height: "30px",
                            background: "transparent",
                            zIndex: 3,
                            WebkitAppearance: "none",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3 col-4 my-4 text-start px-md-5">
                      <p className="fw-semibold primary-c fw-bold mb-0">
                        QHT PROMISE ✅
                      </p>
                      <small>
                        Only experienced <br /> touch your scalp.
                      </small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Prev/Next Buttons */}
          <div
            className="d-flex justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="d-flex justify-content-between w-75 mt-4">
              <button
                className="btn text-white rounded-pill px-4"
                style={{ backgroundColor: "#C7C7C7" }}
                onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
              >
                « &nbsp;&nbsp;&nbsp; PREV
              </button>
              <button
                className="btn primary-bg text-white rounded-pill px-4"
                onClick={() =>
                  setActiveTab((prev) => Math.min(tabs.length - 1, prev + 1))
                }
              >
                NEXT &nbsp;&nbsp;&nbsp; »
              </button>
            </div>
          </div>
        </div>

        {/* Process */}
        <div id="process" className="py-5">
          <div className="container py-md-5">
            <div className="text-center mb-4">
              <h2 className="fs-1 fw-500" data-aos="fade-up">
                {data?.processSection.title}
              </h2>
              <p
                className="text-muted fw-500 mt-3 mb-5 fs-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {data?.processSection.description}
              </p>
            </div>

            {/* Timeline */}
            <div
              className="position-relative mb-5 mx-5"
              style={{ height: "100px" }}
              data-aos="fade-in"
              data-aos-delay="200"
            >
              {/* Moving Label (Top Center) */}
              <div
                className="position-absolute translate-middle-x text-center"
                style={{
                  top: "-10%",
                  left: `${data?.processSection?.stages[stageIndex]?.percent}%`,
                  transition: "left 0.5s ease-in-out",
                  zIndex: 2,
                }}
              >
                <div className="badge primary-bg p-2 px-3 fs-6 text-white fw-normal rounded-1 tag-box">
                  {data?.processSection?.stages[stageIndex]?.label}
                </div>
              </div>

              {/* Progress Bar (Middle) */}
              <div
                className="position-absolute start-0 end-0"
                style={{
                  top: "40%",
                }}
              >
                <div
                  className="progress"
                  style={{ height: "8px", backgroundColor: "#D5E6C3" }}
                >
                  <div
                    className="progress-bar primary-bg primary-c"
                    role="progressbar"
                    style={{
                      width: `${data?.processSection.stages[stageIndex].percent}%`,
                      transition: "width 0.5s ease-in-out",
                    }}
                  ></div>
                </div>
              </div>

              {/* Percentage (Bottom Center) */}
              <div
                className="position-absolute translate-middle-x text-center"
                style={{
                  top: "55%",
                  left: `${data?.processSection.stages[stageIndex].percent}%`,
                  transition: "left 0.5s ease-in-out",
                }}
              >
                <div className="text-af">|</div>
                <div className="small fw-semibold text-af">
                  {data?.processSection.stages[stageIndex].percent}%
                </div>
              </div>
            </div>

            {/* Image for Current Stage */}
            <div className="row g-4 justify-content-center">
              <img
                src={data?.processSection.stages[stageIndex].image}
                alt="Stage"
                className="img-fluid w-75"
                data-aos="zoom-in-up"
                data-aos-delay="300"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Img */}
        <div className="container-fluid p-0" data-aos="fade-up">
          <div className="row">
            <img
              src={data?.fullWidthImage.image}
              className="w-100"
              alt={data?.fullWidthImage.altText}
              decoding="async"
            />
          </div>
        </div>

        <Services />

        {/* Result */}
        <div className="container">
          <div className="row">
            <div
              className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-5"
              data-aos="fade-up"
            >
              <h2 className="p-head">{data?.resultsGallery.title}</h2>
              <h6 className="border py-1 px-2 rounded text-secondary">3</h6>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h4 className="fs-2">{data?.resultsGallery.description}</h4>
            </div>

            {data?.resultsGallery.beforeAfterPairs.map((pair, index) => (
              <div
                className="col-md-4 mb-4 mb-md-0"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={200 + index * 100}
              >
                <ReactCompareSlider
                  style={{ borderRadius: "20px" }}
                  itemOne={
                    <ReactCompareSliderImage src={pair.before} alt="Before" />
                  }
                  itemTwo={
                    <ReactCompareSliderImage src={pair.after} alt="After" />
                  }
                />
              </div>
            ))}
            <div className="text-md-end text-center my-5">
              <button
                type="button"
                className="btn text-white rounded-pill px-4 py-2"
                style={{ backgroundColor: "#627251" }}
                data-bs-toggle="modal"
                data-bs-target="#resultsModal"
              >
                Explore More Results +
              </button>

              {/* Modal */}
              <div
                className="modal fade"
                id="resultsModal"
                tabIndex="-1"
                aria-labelledby="resultsModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered gallery-model mx-md-auto">
                  <div className="modal-content text-start p-md-5">
                    <div className="modal-header border-none">
                      <h2 className="modal-title" id="resultsModalLabel">
                        Hair Transplant Gallery
                      </h2>
                      <button
                        type="button"
                        className="btn-close close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      {resultsData.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className={`row justify-content-start gap-4 gap-md-0 ${
                            sectionIndex === 0
                              ? "border-bottom pb-5"
                              : "border-bottom py-5"
                          }`}
                          data-aos="fade-up"
                          data-aos-delay={sectionIndex * 100}
                        >
                          <h4 className="pb-3">{section.grade}</h4>

                          {section.pairs.map((pair, pairIndex) => (
                            <div
                              className="col-md-4"
                              key={pairIndex}
                              data-aos="zoom-in"
                              data-aos-delay={200 + pairIndex * 100}
                            >
                              <ReactCompareSlider
                                style={{ borderRadius: "20px" }}
                                itemOne={
                                  <ReactCompareSliderImage
                                    src={pair.before}
                                    alt={`Before ${pairIndex + 1}`}
                                  />
                                }
                                itemTwo={
                                  <ReactCompareSliderImage
                                    src={pair.after}
                                    alt={`After ${pairIndex + 1}`}
                                  />
                                }
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book */}
        <div
          className="sec-pad"
          id="book"
          style={{ backgroundColor: "#627251" }}
        >
          <div className="container">
            <div className="row align-items-center">
              {/* Left side - Book Image */}
              <div
                className="col-md-6 text-center mb-4 mb-md-0"
                data-aos="zoom-in-left"
              >
                <img
                  src={data?.bookSection.image}
                  alt="Hair Transplant Guide"
                  className="animate-book w-100"
                  decoding="async"
                />
              </div>

              {/* Right side - Text + Form */}
              <div className="col-md-6 text-white">
                <h2
                  className="fw-500 text-center text-md-start mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {data?.bookSection.title}
                </h2>

                <p
                  className="mb-4 text-center text-md-start"
                  style={{ lineHeight: 1.6 }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {data?.bookSection.description}
                </p>

                <ul className="list-unstyled mb-4">
                  {data?.bookSection.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="mb-2"
                      data-aos="fade-left"
                      data-aos-delay={300 + index * 100}
                    >
                      • {benefit}
                    </li>
                  ))}
                </ul>

                {/* Form */}
                <form
                  className="d-flex flex-column flex-md-row align-items-center gap-4"
                  data-aos="zoom-in-up"
                  data-aos-delay="600"
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control border-none bg-transparent text-white border-bottom rounded-0"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control border-none bg-transparent text-white border-bottom rounded-0"
                  />
                  <button
                    type="submit"
                    className="btn btn-light rounded-pill px-4 py-2 w-100"
                    style={{ color: "#627251", width: "500px" }}
                  >
                    Download Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <Faqs />

        {/* Actions */}
        <div id="action">
          <div className="container text-center">
            <h1 className="text-white fw-bold" data-aos="fade-up">
              {data?.actionSection.title}
            </h1>

            <h4
              className="text-white text-center fw-normal mx-4 mt-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {data?.actionSection.description}
            </h4>

            <a
              href={data?.actionSection.cta.link}
              className="btn rounded-pill bg-white px-4 py-3 fw-normal"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              {data?.actionSection.cta.text}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
