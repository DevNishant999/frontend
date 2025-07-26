import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../medical-tourism/MedicalTourism.css";
import Services from "../../components/Services";
import Faqs from "../../components/Faqs";
import glimps from "../../assets/glimps.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import test from "../../assets/test.png";
import quote from "../../assets/quotes.png";
import coin from "../../assets/icon/coin.png";
import Why from "../../assets/Why.png";
import indiareason from "../../assets/indiareason.png";
import baldgraft from "../../assets/icon/baldgraft.png";
import buildstar from "../../assets/icon/buildstar.png";
import capman from "../../assets/icon/capman.png";
import downhand from "../../assets/icon/downhand.png";
import grating from "../../assets/icon/grating.png";
import hathplus from "../../assets/icon/hathplus.png";
import plane from "../../assets/icon/plane.png";
import plusbag from "../../assets/icon/plusbag.png";
import ungli from "../../assets/icon/ungli.png";
import uphand from "../../assets/icon/uphand.png";
import mtism from "../../assets/mtism.png";

const testimonialsData = [
  {
    id: 1,
    name: "Priyanka Das",
    age: 26,
    location: "India",
    rating: 5,
    text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
    image: test,
    grade: "Grade III",
  },
  {
    id: 2,
    name: "Abhishek Kumar",
    age: 22,
    location: "India",
    rating: 3,
    text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
    image: test,
    grade: "Grade II",
  },
  {
    id: 3,
    name: "Amardeep Singh",
    age: 45,
    location: "India",
    rating: 5,
    text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
    image: test,
    grade: "Grade III",
  },
  {
    id: 4,
    name: "Amardeep Singh",
    age: 45,
    location: "India",
    rating: 5,
    text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
    image: test,
    grade: "Grade III",
  },
  {
    id: 5,
    name: "Amardeep Singh",
    age: 45,
    location: "India",
    rating: 5,
    text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
    image: test,
    grade: "Grade III",
  },
];

const MedicalTourism = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tourism, setTourism] = useState(null);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/medical-tourism`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
        setTourism(result);
        console.log(result.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // if (loading) return <div>Loading...</div>;
  if (!data) return <div>Error loading data</div>;

  // Prepare sections data from API
  const sections = data.sections.processTabs.tabs.map((tab) => ({
    title: tab.title,
    icon:
      tab.icon === "ungli.png"
        ? ungli
        : tab.icon === "buildstar.png"
        ? buildstar
        : tab.icon === "baldgraft.png"
        ? baldgraft
        : tab.icon === "plane.png"
        ? plane
        : ungli,
    content: tab.content,
  }));

  return (
    <>
      {/* SEO HEAD */}
      <Helmet>
        <title>{tourism.metaTitle}</title>
        <meta name="description" content={tourism.metaDescription} />
        <meta name="keywords" content={tourism.metaKeywords || ""} />
      </Helmet>

      {/* Banner */}
      <div className="sec-pad Mbanner">
        <div className="container just-align-center h-100">
          <div className="row">
            <h1 className="text-white text-center display-3 fw-normal">
              {data.sections.banner.title}
            </h1>
            <h4 className="text-white text-center fw-light">
              {data.sections.banner.subtitle}
            </h4>
            <div className="just-align-center mt-5">
              <span className="border text-white display-3 hw-100 just-align-center rounded-circle">
                ↓
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Choice */}
      <div className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className="p-head">{data.sections.topChoice.heading}</h2>
            </div>
            <div className="col-md-5">
              <p className="sec-c">{data.sections.topChoice.description}</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div>
                <img src={indiareason} className="w-100" alt="" />
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              {data.sections.topChoice.features
                .slice(0, 2)
                .map((feature, index) => (
                  <div
                    key={feature._id}
                    className="sec-bg p-4 rounded-4"
                    style={index === 1 ? { marginTop: "1rem" } : {}}
                  >
                    <img src={feature.icon} alt={feature.title} width="60" />
                    <h4 className="py-3">{feature.title}</h4>
                    <p className="h-100px">{feature.description}</p>
                  </div>
                ))}
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              {data.sections.topChoice.features
                .slice(2, 4)
                .map((feature, index) => (
                  <div
                    key={feature._id}
                    className="sec-bg p-4 rounded-4"
                    style={index === 1 ? { marginTop: "1rem" } : {}}
                  >
                    <img src={feature.icon} alt={feature.title} width="60" />
                    <h4 className="py-3">{feature.title}</h4>
                    <p className="h-100px">{feature.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why */}
      <div className="sec-pad g-gradient">
        <div className="container">
          <img src={data.sections.whySection.image} className="w-100" alt="" />
        </div>
      </div>

      {/* Comparison */}
      <div className="sec-pad pb-0" id="comp">
        <div className="container">
          <div className="row text-md-center text-start">
            <h2 className="p-head">{data.sections.comparison.heading}</h2>
            <p className="sec-c">{data.sections.comparison.description}</p>
          </div>

          <div className="container my-4">
            <div className="table-responsive">
              <table
                className="table table-bordered text-center"
                style={{ borderRadius: "20px", overflow: "hidden" }}
              >
                <thead>
                  <tr>
                    <th className="fw-medium fs-4 text-start">Feature</th>
                    <th className="fw-medium fs-4 text-start primary-c">
                      <span className="me-2">
                        <img src={uphand} alt="" />
                      </span>{" "}
                      QHT Benefits
                    </th>
                    <th className="fw-medium fs-4 text-start">
                      <span className="me-2">
                        <img src={downhand} alt="" />
                      </span>{" "}
                      FUE Technique
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.sections.comparison.table.map((row, idx) => (
                    <tr key={idx}>
                      <td className="text-start">{row.feature}</td>
                      <td className="text-start">{row.qht}</td>
                      <td className="text-start">{row.fue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container primary-bg p-md-4 p-5 rounded-md-4">
        <div className="row gap-4 gap-md-0">
          <div className="col-md-4 just-align-center">
            <img src={grating} className="w-100 px-5" alt="" />
          </div>
          <div className="col-md-6 border-start border-sm-none pe-md-5 pe-0 just-align-center justify-content-end">
            <h2 className="p-head text-white text-center text-md-start fw-normal">
              Connect with <br className="d-none d-md-block" /> hair transplant
              expert.
            </h2>
          </div>
          <div className="col-md-2 just-align-center">
            <button className="btn bg-white primary-c py-2 px-4 rounded-pill fw-medium">
              Consult Now
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container sec-pad">
        <h2 className="p-head w-md-75 px-2 px-md-0">
          {data.sections.processTabs.heading}
        </h2>
        <p className="pt-4 pb-5 px-2 px-md-0">
          {data.sections.processTabs.description}
        </p>
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-4 mb-4 pe-md-5">
              <div className="list-group rounded-3 sec-bg p-4">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    className={`list-group-item border-bottom border-none rounded-3 text-black d-flex justify-content-start gap-3 align-items-center  p-4 list-group-item-action ${
                      activeSection === index
                        ? "primary-bg text-white shadow"
                        : "sec-bg"
                    }`}
                    onClick={() => setActiveSection(index)}
                  >
                    <img src={section.icon} alt="" width="40" />
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-md-8 px-5">
              <h2 className="p-head mb-3">
                What we do for your premium stay and seamless experience
              </h2>
              <p>
                We ensure your visit is as smooth and stress-free as possible.
                From the moment you arrive, our team offers support with
                accommodation, transport, and local assistance. Our priority is
                to make you feel relaxed so you can focus on your
                transformation.
              </p>
              <img src={mtism} className="w-100 rounded-4" alt="" />
              <ul className="my-3 m-0 ps-3">
                <li>
                  Travel Assistance, Support with booking flights and airport
                  transfers.
                </li>
                <li>
                  Comfortable Accommodation, Assistance in finding safe,
                  hygienic, and convenient hotels near the clinic.
                </li>
                <li>
                  On-Ground Support, Friendly team available for local guidance
                  and logistical help.
                </li>
              </ul>
              <p>
                Whether you're visiting from another city or abroad, you'll
                receive personal attention and local guidance. Our goal is to
                ensure your journey is hassle-free, letting you focus on your
                treatment and recovery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Comparison */}
      <div className="sec-pad sec-bg">
        <div className="container">
          <h2 className="p-head">{data.sections.costComparison.heading}</h2>

          <div className="row g-4 py-5">
            {data.sections.costComparison.countries.map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className="card h-100 border-0 rounded-4 shadow-sm">
                  <div className="card-body p-4">
                    <p className="mb-1">Starts at</p>
                    <h2 className="card-title fs-1">{item.price}</h2>
                    <hr className=" sec-c" />
                    <h5>
                      <img
                        src={item.flag}
                        alt={`${item.country} flag`}
                        width="30"
                        height="30"
                        className="me-2 my-3 rounded-circle"
                      />
                      {item.country}
                    </h5>
                    <p className="card-text sec-c">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row know-bg py-4 m-2 text-center text-md-start rounded-4 text-white">
            <div className="col-md-2 just-align-center">
              <img src={coin} className="w-md-50 w-25" alt="" />
            </div>
            <div className="col-md-8 just-align-center justify-content-start">
              <h2>Get your hair transplant cost estimation.</h2>
            </div>
            <div className="col-md-2 just-align-center">
              <button className="btn bg-white primary-c py-2 px-4 rounded-pill fw-medium">
                Consult Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="sec-pad primary-bg" id="MDtest">
        <div className="container">
          <h2 className="p-head border-bottom text-white border-grey pb-4 mb-5">
            Hear from our satisfied international <br /> clients around the
            world.
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            style={{ paddingBottom: "6rem" }}
          >
            {testimonialsData.length > 0 ? (
              testimonialsData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="p-4 bg-white border rounded-4 d-flex flex-column justify-content-between h-100">
                    <div>
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <div className="mb-2 fs-4 primary-c">
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i}>
                              {i < testimonial.rating ? "★" : "☆"}
                            </span>
                          ))}
                        </div>
                        <div>
                          <img src={quote} alt="" />
                        </div>
                      </div>
                      <h5>Exceptional Service & Results!</h5>
                      <p className="text-muted">{testimonial.text}</p>
                    </div>
                    <div className="d-flex align-items-center border-top pt-4 mt-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        width="40"
                        height="40"
                      />
                      <div>
                        <div>{testimonial.name}</div>
                        <small className="text-muted">
                          Age {testimonial.age}, {testimonial.location}
                        </small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p className="text-center">
                No testimonials available for this grade.
              </p>
            )}
          </Swiper>
        </div>
      </div>

      {/* Glimps */}
      <div className="sec-pad">
        <div className="container text-center">
          <h2 className="p-head">{data.sections.glimpse.heading}</h2>
          <p className="sec-c">{data.sections.glimpse.description}</p>
          <div className="row">
            {data.sections.glimpse.images.map((image, index) => (
              <div className="col-md-4">
                <img src={image} className="w-100 mt-4" alt="glimps" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ & Form */}
      <div className="container border-top">
        <div className="row">
          <div className="col-md-7" id="MTfaq">
            <Faqs />
          </div>
          <div className="col-md-5 p-md-5">
            <div className="sec-bg p-5 m-md-4 rounded-4 gap-5 just-align-center flex-column align-items-start">
              <input
                type="text"
                className="form-control input-underline bg-transparent border-none border-bottom border-black rounded-0"
                placeholder="First Name"
              />
              <input
                type="text"
                className="form-control input-underline bg-transparent border-none border-bottom border-black rounded-0"
                placeholder="Last Name"
              />
              <input
                type="tel"
                className="form-control input-underline bg-transparent border-none border-bottom border-black rounded-0"
                placeholder="Mobile"
              />
              <input
                type="email"
                className="form-control input-underline bg-transparent border-none border-bottom border-black rounded-0"
                placeholder="Email Address"
              />
              <input
                type="interested"
                className="form-control input-underline bg-transparent border-none border-bottom border-black rounded-0"
                placeholder="Interested In?"
              />
              <button type="submit" className="primary-btn px-5">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Services />
    </>
  );
};

export default MedicalTourism;
