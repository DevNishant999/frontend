import { React, useEffect, useState } from "react";
import "../about/AboutUs.css";
import { Helmet } from "react-helmet";
import Videos from "../../components/Videos";
import Testimonials from "../../components/Testimonials";
import Services from "../../components/Services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import QuickForm from "../../components/QuickForm";
import milind from "../../assets/milind.png";
import celeb from "../../assets/icon/celeb.png";
import affordable from "../../assets/icon/affordable.png";
import cultural from "../../assets/icon/cultural.png";
import hygienic from "../../assets/icon/hygienic.png";
import luxurious from "../../assets/icon/luxurious.png";
import professional from "../../assets/icon/professional.png";
import certified from "../../assets/icon/certified.png";
import fda from "../../assets/icon/fda.png";
import calc from "../../assets/icon/calc.png";
import doctor from "../../assets/doctor.png";
import mission1 from "../../assets/m1.png";
import mission2 from "../../assets/m2.png";
import mission3 from "../../assets/m3.png";
import gal from "../../assets/gal.png";
import bhadwe from "../../assets/bhadwe.png";
import abouth1 from "../../assets/abouth1.png";

const AboutUs = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [about, setAbout] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/about`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setData(result.aboutPage);
        setAbout(result);
        console.log(result.aboutPage);
        console.log(result);
      })
      .catch((err) => console.error(err));
  }, []);

  // if (loading) return <div>Loading...</div>;
  if (!data) return <div>Error loading data</div>;

  return (
    <>
      <div>
        {/* SEO HEAD */}
        <Helmet>
          <title>{about.metaTitle}</title>
          <meta name="description" content={about.metaDescription} />
          <meta name="keywords" content={about.metaKeywords || ""} />
        </Helmet>

        {/* Banner */}
        <div className="sec-bg pt-md-5 pt-0 sec-pad">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <img src={data.banner} className="w-md-50 w-100 mb-4" alt={data.banner} />
              <p className="text-center sec-c">{data.expertise.subtitle}</p>

              <div>
                <img src={bhadwe} className="w-100 my-4" alt="" />
              </div>

              <div className="container">
                <div className="marquee-container">
                  <div className="marquee-text">
                    ✨ Wait! don't miss these cost-saving secrets before you
                    scroll to prices
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Establish */}
        <div className="sec-pad pb-0">
          <div className="container">
            <div className="row gy-5">
              {/* Left Text Block */}
              <div className="col-lg-7">
                <h2 className="p-head">{data.establishmentSection.title}</h2>
                <p className="mt-4 sec-c">
                  {data.establishmentSection.description}
                </p>

                {/* Certifications */}
                <p className="mt-4">Our Certifications</p>
                <div className="d-flex gap-3 mt-3 flex-wrap flex-column">
                  {data.establishmentSection.certifications.map(
                    (cert, index) => (
                      <div
                        key={cert._id}
                        className="border rounded-4 p-4 d-flex align-items-center gap-3"
                      >
                        <img
                          src={cert.icon}
                          alt={cert.text}
                          width={cert.icon === "certified.png" ? "30" : "40"}
                        />
                        <div>
                          <div className="fw-medium">{cert.text}</div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Right List Block */}
              <div className="col-lg-5">
                <div className="d-flex flex-column gap-4">
                  {data.establishmentSection.features.map((item) => (
                    <div
                      key={item._id}
                      className="d-flex border-top pt-5 pb-3 gap-3"
                    >
                      <div className="fw-medium fs-5 text-af">
                        {item.num}&nbsp;/
                      </div>
                      <div>
                        <div className="fw-medium mb-2 fs-5">{item.title}</div>
                        <div className="sec-c">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="sec-pad" id="timeline">
          <div className="container g-gradient px-5 pt-5 rounded-5">
            <h2 className="p-head pt-5 text-white text-start fw-normal mb-2">
              {data.timeline.title}
            </h2>
            <p className="text-start text-white fw-light mb-5">
              {data.timeline.subtitle}
            </p>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              spaceBetween={30}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              {data.timeline.events.map((item) => (
                <SwiperSlide key={item._id}>
                  <div className="p-5 pb-5 bg-transparent border position-relative border-white ms-5 me-2 rounded-5 h-300 h-sm-fit-content">
                    <span className="px-3 py-2 fs-5 position-absolute text-white fw-normal">
                      {item.year}
                    </span>
                    <h4 className="text-parot fw-normal mb-3">{item.title}</h4>
                    <p className="text-white fw-light">{item.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* City Gallery */}
        <div className="sec-pad">
          <div className="container">
            {/* Headline */}
            <div className="row mb-2 align-items-center">
              <div className="col-md-6">
                <h2 className="p-head">{data.clinicLocations.title}</h2>
              </div>
              <div className="col-md-6">
                <p className="sec-c w-md-75 w-100">
                  {data.clinicLocations.description}
                </p>
              </div>
            </div>

            {/* City Tabs */}
            <div className="mb-5 d-flex flex-wrap gap-2">
              {[
                ...new Set(data.clinicLocations.cities.map((c) => c.branch)),
              ].map((branch) => (
                <button
                  key={branch}
                  className={`btn rounded-pill ${
                    selectedCity === branch
                      ? "primary-btn px-4"
                      : "btn-outline-secondary px-4"
                  }`}
                  onClick={() => setSelectedCity(branch)}
                >
                  {branch}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="row g-3">
              {data.clinicLocations.cities.filter(
                (c) => c.branch === selectedCity
              ).length ? (
                data.clinicLocations.cities
                  .filter((c) => c.branch === selectedCity)
                  .map((c, index) => (
                    <div className="col-md-4 col-6" key={c._id}>
                      <img
                        src={c.image}
                        alt={`${c.branch} ${index + 1}`}
                        className="img-fluid rounded-4"
                      />
                    </div>
                  ))
              ) : (
                <div className="col-12 text-center text-muted py-5">
                  No data available for {selectedCity}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="sec-pad primary-bg text-white" id="mission">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-5 d-flex justify-content-between flex-column align-items-end">
                <div>
                  <h6 className="text-parot">Our Mission</h6>
                  <h2 className="fw-normal mt-3">
                    We work tirelessly to provide advanced hair restoration
                    techniques, surgical excellence, quality care, and
                    outstanding value.
                  </h2>
                </div>
                <div className="d-none d-md-flex justify-content-end align-items-center">
                  <img
                    src={mission1}
                    alt="Clinic"
                    className="w-75 mt-4"
                    style={{ marginRight: "-2.8rem" }}
                  />
                </div>
              </div>
              <div className="col-md-2 d-none d-md-flex justify-content-end align-items-center">
                <img src={mission2} alt="Tool" className="w-100" />
              </div>
              <div className="col-md-5 d-flex justify-content-between flex-column align-items-center align-items-md-start">
                <div>
                  <img
                    src={mission3}
                    alt="Procedure"
                    className="w-md-75 w-100 ml-sm-0"
                    style={{ marginLeft: "-2.5rem" }}
                  />
                </div>

                <div className="text-end">
                  <h6 className="text-parot mt-3 mt-md-0">Our Vision</h6>
                  <h3 className="fw-normal mt-3">
                    Hair transplantation combines "Hair Design" and "Art,"
                    creating not just results but a true work of art.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get Know */}
        <div className="p-5 know-bg">
          <div className="container text-white">
            <div className="row justify-content-center align-items-center gap-3 gap-md-0">
              <div className="col-md-2">
                <img src={calc} alt="" />
              </div>
              <div className="col-md-8">
                <h2 className="p-head fw-normal">
                  Get Know More About QHT Costing
                </h2>
                <h5 className="fw-light">
                  Explore transparent pricing for QHT procedures.
                </h5>
              </div>
              <div className="col-md-2">
                <button className="btn btn-light rounded-pill px-4 py-2 primary-c">
                  Know more
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Doctors */}
        <div className="container my-5" id="doctor">
          <div className="text-start mb-5">
            <h2 className="p-head">Only The Expert Guidance at QHT Clinic</h2>
            <p className="sec-c">
              QHT offers advanced techniques, expert surgeons, and high success
              rates beyond just affordability.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {data.doctors.map((doc) => (
              <SwiperSlide key={doc._id}>
                <div className="card position-relative border-0">
                  <img
                    src={doc.image}
                    className="card-img-top w-100 rounded-3"
                    alt={doc.name}
                  />
                  <div className="card-body position-absolute rounded-3 px-4 py-4 bottom-0 text-start text-white in-card">
                    <h5 className="card-title">{doc.name}</h5>
                    <small className="fw-light">
                      {doc.degree} - {doc.specialization}
                    </small>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Team */}
        <div className="sec-pad pt-4">
          <div className="container border-top">
            <div className="row pt-5 mb-4 align-items-start">
              <div className="col-md-6 pt-5">
                <h2 className="p-head">{data.expertise.title}</h2>
              </div>
              <div className="col-md-6 pt-5">
                <p className="sec-c">{data.expertise.subtitle}</p>
              </div>
            </div>

            <div className="row g-4 mt-5">
              {data.expertise.features.map((item) => (
                <div className="col-md-4" key={item._id}>
                  <div className="card h-100 p-5 border-0 sec-bg rounded-4">
                    <div className="fs-2 mb-5">
                      <img
                        src={item.icon}
                        className="hw-50 object-fit-contain"
                        alt=""
                      />
                    </div>
                    <h5 className="fw-medium fs-4">{item.title}</h5>
                    <p className="sec-c small mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Schedule An Appointment */}
            <div className="d-flex justify-content-center gap-md-4 align-items-center mt-5">
              <div className="line d-none d-md-block"></div>
              <div>
                <button
                  className="btn text-white rounded-pill px-4 py-2"
                  style={{ backgroundColor: "#627251" }}
                >
                  Schedule An Appointment
                </button>
              </div>
              <div className="line d-none d-md-block"></div>
            </div>
          </div>
        </div>

        {/* Celeb */}
        <div className="sec-pad sec-bg" id="Celeb">
          <div className="container text-center mb-4">
            <h2 className="p-head">Celebrities At QHT</h2>
            <p className="sec-c">
              Real stories, real experiences—see how we've made a difference!
            </p>

            <div className="mt-5">
              <Swiper
                modules={[Navigation]}
                navigation={true}
                slidesPerView={1}
                loop={true}
              >
                {data.celebTestimonials.map((item) => (
                  <SwiperSlide key={item._id}>
                    <div className="row px-5 flex-column-reverse flex-md-row align-items-center testimonial-box rounded-5 overflow-hidden">
                      <div className="col-md-6 rounded-left p-md-5 p-3 text-white text-start primary-bg h-600 h-sm-fit-content">
                        <div className="display-1 mx-md-4 mx-0 mt-md-5 mt-0">
                          ❝
                        </div>
                        <h3 className="fw-normal mb-3 mx-md-4 mx-0">
                          {item.review}
                        </h3>
                        <p className="mx-md-4 mx-0 fs-5 fw-light">
                          {item.details}
                        </p>
                        <p className="mt-md-4 mx-0 mb-1 mx-md-4 mx-0 fs-5">
                          {"★".repeat(item.stars)}
                        </p>
                        <p className="mb-0 mx-md-4 mx-0 fs-5">
                          – {item.name.split(" ")[0]} &nbsp;
                          <strong>{item.name.split(" ")[1]}</strong>
                        </p>
                        <small className="text-white fw-lighter mx-md-4 mx-0">
                          {item.title}
                        </small>
                      </div>
                      <div className="col-md-6 rounded-right p-0 h-600">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid w-100 rounded-right h-100 object-fit-cover"
                          style={{ objectFit: "cover", height: "100%" }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <Videos />

        <Testimonials />

        <div className="sec-pad primary-bg text-white">
          <QuickForm />
        </div>

        {/* Different */}
        <div className="sec-pad" id="difference">
          <div className="container py-5">
            <h2 className="p-head text-center">{data.comparisonTable.title}</h2>
            <p className="text-center sec-c mb-5">
              {data.comparisonTable.description}
            </p>

            <div className="table-responsive">
              <table className="table rounded table-bordered align-middle">
                <thead>
                  <tr>
                    <th className="fs-5 fw-semibold">Features</th>
                    <th className="highlight-bg">QHT</th>
                    <th className="fs-5 fw-semibold">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {data.comparisonTable.rows.map((row) => (
                    <tr key={row._id}>
                      <td>{row.feature}</td>
                      <td className="highlight-bg">
                        <span className="check-icon">✔</span> {row.qht}
                      </td>
                      <td>
                        <span className="cross-icon">✖</span> {row.others}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Services />

        {/* Medical Tourism */}
        <div className="sec-pad" id="tourism">
          <div className="container text-white py-md-5 py-0">
            <div className="row py-md-5 py-0">
              <h2 className="p-head w-100 w-md-50">
                {data.medicalTourism.title}
              </h2>
              <p className="w-md-75 w-100 mt-2">
                {data.medicalTourism.description}
              </p>
              <div>
                <button className="primary-btn px-4 mt-4">Explore More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
