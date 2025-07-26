import { React, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../cost/Cost.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Accordion } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "../../assets/map.png";
import Faqs from "../../components/Faqs";
import Testimonails from "../../components/Testimonials";
import Videos from "../../components/Videos";
import GetInTouch from "../../components/GetInTouch";
import hr from "../../assets/icon/hr.png";
import ht from "../../assets/icon/ht.png";
import minimal from "../../assets/icon/minimal.png";
import prp from "../../assets/icon/prp.png";
import gfc from "../../assets/icon/gfc.png";
import Results from "../../components/Results";
import bgImage from "../../assets/man-getting-hair-loss.png";
import baldness1 from "../../assets/baldness-1.png";
import baldness2 from "../../assets/baldness-2.png";
import baldness3 from "../../assets/baldness-3.png";
import baldness4 from "../../assets/baldness-4.png";
import baldness5 from "../../assets/baldness-5.png";
import baldness6 from "../../assets/baldness-6.png";
import baldness7 from "../../assets/baldness-7.png";
import gr from "../../assets/gr.png";
import satisfy from "../../assets/satisfied.png";
import {
  FaCheck,
  FaTimes,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaVideo,
  FaChalkboardTeacher,
  FaUsers,
  FaShareAlt,
  FaUserAlt,
  FaCut,
  FaUserCheck,
  FaSyringe,
  FaHospital,
  FaArrowDown,
} from "react-icons/fa";
import min from "../../assets/icon/30min.png";
import emi from "../../assets/icon/emi.png";
import insurance from "../../assets/icon/insurance.png";
import claim from "../../assets/icon/claim.png";
import check from "../../assets/icon/check.png";
import hairs from "../../assets/hairs.png";
import yoga from "../../assets/yoga.png";
import family from "../../assets/family.png";
import fm from "../../assets/icon/fm.png";
import msg from "../../assets/icon/msg.png";
import tv from "../../assets/icon/tv.png";
import share from "../../assets/icon/share.png";
import doublearrow from "../../assets/icon/doublearrow.png";
import backbald from "../../assets/icon/backbald.png";
import graftpluck from "../../assets/icon/graftpluck.png";
import gfput from "../../assets/icon/gfput.png";
import star from "../../assets/icon/star.png";
import backh from "../../assets/icon/backh.png";

const cities = [
  "Mumbai",
  "Chennai",
  "Hyderabad",
  "Dehradun",
  "Surat",
  "Bangalore",
  "Kochi",
  "Ahmedabad",
  "Nagpur",
  "Kolkata",
  "Chandigarh",
  "Pune",
  "Delhi",
  "Lucknow",
  "Patna",
  "Guwahati",
  "Jaipur",
  "Indore",
];

const countries = [
  "Turkey",
  "Thailand",
  "Poland",
  "United Kingdom",
  "Pakistan",
  "South Korea",
  "United States",
  "Germany",
  "Spain",
  "Mexico",
  "Hungary",
  "Philippines",
  "Iran",
  "Canada",
  "Malaysia",
  "India",
  "UAE",
  "Brazil",
];

const solutions = [
  { title: "Hairline Reconstruction", icon: hr },
  { title: "Prp Treatment", icon: prp },
  { title: "Minimal Shave Hair Transplantation", icon: minimal },
  { title: "Hair Transplant For Men", icon: ht },
  { title: "Growth Factor Concentrate", icon: gfc },
];

const features = [
  {
    title: "Advanced QHT Technology",
    description: "Delivers natural results with high graft survival rates.",
  },
  {
    title: "Transparent Pricing",
    description: "Clear, honest costs with no hidden surprise charges.",
  },
  {
    title: "Personalized Care",
    description: "Customized treatment plans & dedicated post-surgery support.",
  },
  {
    title: "Experienced Surgeons",
    description:
      "Skilled doctors with thousands of successful transplant procedures.",
  },
];

const baldnessImages = {
  1: baldness1,
  2: baldness2,
  3: baldness3,
  4: baldness4,
  5: baldness5,
  6: baldness6,
  7: baldness7,
};

const costData = [
  {
    level: "IIa",
    grafts: "800–1400",
    qht: "1,40,000–2,20,000",
    fue: "40,000",
    dhi: "45,000",
  },
  {
    level: "III",
    grafts: "1000–1600",
    qht: "1,60,000–2,40,000",
    fue: "48,000",
    dhi: "54,000",
  },
  {
    level: "III (vertex)",
    grafts: "1200–1600",
    qht: "1,80,000–2,60,000",
    fue: "54,000",
    dhi: "60,000",
  },
  {
    level: "IIIa",
    grafts: "1400–1800",
    qht: "2,00,000–3,00,000",
    fue: "42,000–54,000",
    dhi: "50,000–60,000",
  },
  {
    level: "IV",
    grafts: "1600–2200",
    qht: "2,20,000–3,40,000",
    fue: "48,000–66,000",
    dhi: "55,000–75,000",
  },
  {
    level: "IVa",
    grafts: "1800–2400",
    qht: "2,40,000–3,60,000",
    fue: "54,000–72,000",
    dhi: "60,000–82,000",
  },
  {
    level: "V",
    grafts: "2000–2500",
    qht: "2,60,000–3,80,000",
    fue: "60,000–75,000",
    dhi: "66,000–90,000",
  },
  {
    level: "Va",
    grafts: "2200–2800",
    qht: "2,80,000–4,20,000",
    fue: "66,000–84,000",
    dhi: "72,000–1,00,000",
  },
  {
    level: "VI",
    grafts: "2400–3000",
    qht: "3,00,000–4,60,000",
    fue: "72,000–90,000",
    dhi: "78,000–1,08,000",
  },
  {
    level: "VII",
    grafts: "2500–3200",
    qht: "3,20,000–5,00,000",
    fue: "75,000–96,000",
    dhi: "82,000–1,15,000",
  },
];

const costdata = [
  {
    metric: "Cost",
    qht: "₹ 80 per graft.",
    delhi: "₹ 70 per graft.",
    mumbai: "₹ 90 per graft.",
  },
  {
    metric: "Platelet-Rich Plasma (PRP)",
    qht: true,
    delhi: false,
    mumbai: true,
  },
  {
    metric: "Family-friendly recovery",
    qht: true,
    delhi: false,
    mumbai: false,
  },
  {
    metric: "Airport pickup",
    qht: true,
    delhi: false,
    mumbai: false,
  },
];

const hairCostData = [
  { level: "IIa", grafts: "800–1400", cost: "₹62,000–82,000" },
  { level: "III", grafts: "1000–1600", cost: "₹72,000–1,02,000" },
  { level: "III (vertex)", grafts: "1200–1800", cost: "₹77,000–1,20,000" },
  { level: "IV", grafts: "1400–2000", cost: "₹88,000–1,40,000" },
  { level: "V", grafts: "1800–2400", cost: "₹1,02,000–1,62,000" },
  { level: "VI", grafts: "2400–3000", cost: "₹1,20,000–1,80,000" },
  { level: "VII", grafts: "2800–3200", cost: "₹1,70,000–2,00,000" },
  { level: "VII", grafts: "2800–3200", cost: "₹1,70,000–2,00,000" },
  { level: "VII", grafts: "2800–3200", cost: "₹1,70,000–2,00,000" },
  { level: "VII", grafts: "2800–3200", cost: "₹1,70,000–2,00,000" },
];

const qhtCostData = [
  { level: "IIa", grafts: "1400–1600", cost: "₹1,00,000–1,20,000" },
  { level: "III", grafts: "1600–1800", cost: "₹1,10,000–1,40,000" },
  { level: "III (vertex)", grafts: "1700–2200", cost: "₹1,20,000–1,60,000" },
  { level: "IV", grafts: "1800–2600", cost: "₹1,30,000–1,80,000" },
  { level: "V", grafts: "2600–3000", cost: "₹1,60,000–2,00,000" },
  { level: "VI", grafts: "3000–3600", cost: "₹2,00,000–2,40,000" },
  { level: "VII", grafts: "3300–4000", cost: "₹2,30,000–2,80,000" },
];

const Cost = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [data, setData] = useState(null);
  const [baldnessLevel, setBaldnessLevel] = useState(1);
  const [heredity, setHeredity] = useState("none");

  const renderLinks = (items, type) =>
    items.map((item, index) => (
      <div key={index} className="col-md-4 col-sm-6 mb-2">
        <a href="#" className="text-decoration-none text-dark">
          Hair transplant cost in {item}
        </a>
      </div>
    ));

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/cost/${slug}`;
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
      <div id="costpg">
        {/* SEO HEAD */}
        <Helmet>
          <title>{data?.metaTitle || data?.title}</title>
          <meta
            name="description"
            content={data?.metaDescription || data?.title}
          />
          <meta name="keywords" content={data?.metaKeywords || ""} />
        </Helmet>

        {/* Map */}
        <div className="sec-pad sec-bg">
          <div className="container just-align-center">
            <img
              src={data.costData.mapBanner.image}
              className="w-md-75 w-100"
              alt={data.costData.mapBanner.altText}
            />
          </div>
        </div>

        {/* Marquee & Accordion */}
        <div className="sec-pad bg-white">
          <div className="container">
            <div className="marquee-container">
              <div className="marquee-text">
                {data.costData.marqueeAccordion.marqueeText}
              </div>
            </div>
          </div>

          <div className="container py-5">
            {/* Heading */}
            <h2 className="p-head mb-3">
              {data.costData.marqueeAccordion.heading}
            </h2>
            <p className="sec-c w-75 mb-5">
              {data.costData.marqueeAccordion.description}
            </p>

            {/* Bootstrap Accordion */}
            <div className="accordion" id="savingTipsAccordion">
              {data.costData.marqueeAccordion.accordionItems.map(
                (item, idx) => (
                  <div
                    key={item._id}
                    className="accordion-item border-y border-none border-lgrey py-2"
                  >
                    <h2 className="accordion-header" id={`heading${idx}`}>
                      <button
                        className={`accordion-button ${
                          idx !== 1 ? "collapsed" : ""
                        } fw-semibold`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${idx}`}
                        aria-expanded={idx === 1 ? "true" : "false"}
                        aria-controls={`collapse${idx}`}
                      >
                        ▶ &nbsp;&nbsp;{item.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${idx}`}
                      className={`accordion-collapse collapse ${
                        idx === 1 ? "show" : ""
                      }`}
                      aria-labelledby={`heading${idx}`}
                      data-bs-parent="#savingTipsAccordion"
                    >
                      <div className="accordion-body">
                        {typeof item.content === "string" ? (
                          <>{item.content}</>
                        ) : (
                          <>
                            {/* Handle if it’s a known object shape */}
                            {item.content.items &&
                            Array.isArray(item.content.items) ? (
                              <div className="row text-center">
                                {item.content.items.map((tip, tipIdx) => (
                                  <div
                                    className="col-6 col-md-3 mb-4"
                                    key={tipIdx}
                                  >
                                    <div className="icon-box text-start">
                                      <img
                                        src={tip.icon}
                                        className="object-fit-contain mb-3"
                                        width="50"
                                        height="50"
                                        alt=""
                                      />
                                      <h6 className="fw-semi-bold">
                                        {tip.title}
                                      </h6>
                                      <p className="small sec-c">
                                        {tip.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div>
                                {/* Fallback for unexpected object */}
                                <pre>
                                  {JSON.stringify(item.content, null, 2)}
                                </pre>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Factors */}
        <div>
          <div className="container border-bottom pb-4">
            <div className="row mb-4">
              <div className="col-md-6">
                <h2 className="p-head">
                  Factors Affecting Hair Transplant Cost in India
                </h2>
              </div>
              <div className="col-md-6">
                <p className="sec-c">
                  If you’re interested in undergoing a hair transplant, please
                  make an appointment with our hair transplant experts to get an
                  extensive personal consultation.
                </p>
              </div>
            </div>

            <div className="row g-4 pb-5">
              {data.costData.factors.map((factor) => (
                <div className="col-md-4" key={factor._id}>
                  <div className="px-4 py-5 sec-bg rounded-4 h-100">
                    <img
                      src={factor.icon}
                      className="object-fit-contain mb-3"
                      height="60"
                      width="60"
                      alt=""
                    />
                    <h6 className="fw-semibold fs-5">{factor.title}</h6>
                    <p className="sec-c">{factor.description}</p>
                  </div>
                </div>
              ))}

              {/* Last static box */}
              <div className="col-md-4">
                <div className="p-4 primary-bg text-white rounded h-100 text-center d-flex flex-column justify-content-center align-items-center">
                  <h6 className="fw-normal fs-4">Explore Results</h6>
                  <img
                    src={doublearrow}
                    className="object-fit-contain mb-3"
                    height="100"
                    width="100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why top */}
        <div className="sec-pad">
          <div className="container py-5 text-center">
            <h2 className="p-head mb-3">
              Why QHT is a Top Hair Transplant <br /> Destination (Beyond Cost)
            </h2>
            <p className="sec-c mb-5">
              QHT offers advanced techniques, expert surgeons, and high success
              rates beyond just affordability.
            </p>

            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-md-4">
                <div className="card rounded-4 h-100 border">
                  <div className="card-body text-start p-4">
                    <div className="just-align-between border-bottom pb-3 mb-3">
                      <h4 className="fw-normal w-75 text-start">
                        Medical Tourism Advantage
                      </h4>
                      <h4 className="fw-normal fs-1 primary-c">01</h4>
                    </div>
                    <div className="just-align-between gap-5">
                      <div className="fs-3 d-flex justify-content-center align-items-start h-100px">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <h6>Haridwar – peaceful, well connected city</h6>
                        <p className="sec-c">
                          Proximity to Delhi, Mussoorie, and spiritual centers
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    src={yoga} // Replace with actual path
                    alt="Yoga"
                    className="card-img-bottom object-fit-cover rounded-4 w-100"
                    height="400"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4">
                <div className="card rounded-4 h-100 border">
                  <div className="card-body text-start p-4">
                    <div className="just-align-between border-bottom pb-3 mb-3">
                      <h4 className="fw-normal w-75 text-start">
                        Family-Friendly Recovery
                      </h4>
                      <h4 className="fw-normal fs-1 primary-c">02</h4>
                    </div>

                    <ul className="text-start small mb-0 ps-3 sec-c">
                      <li>Bring your partner/family</li>
                      <li>Combine recovery with a relaxing vacation</li>
                      <li>Explore nearby cafes, yoga retreats, and more</li>
                    </ul>
                  </div>
                  <img
                    src={family} // Replace with actual path
                    alt="Family"
                    className="card-img-bottom object-fit-cover rounded-4 w-100"
                    height="400"
                  />
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4">
                <div className="card rounded-4 h-100 border">
                  <div className="card-body text-start p-4">
                    <div className="just-align-between border-bottom pb-3 mb-3">
                      <h4 className="fw-normal w-75 text-start">
                        All-In-One Value Packages
                      </h4>
                      <h4 className="fw-normal fs-1 primary-c">03</h4>
                    </div>

                    <div className="just-align-between gap-5">
                      <div className="fs-3 d-flex justify-content-center align-items-start h-100px">
                        <FaUser />
                      </div>
                      <div>
                        <h6>PRP, Blood Tests, Pickup, Care Guidance</h6>
                        <p className="sec-c">
                          All-inclusive pricing, 30–50% more affordable than
                          metros
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    src={hairs} // Replace with actual path
                    alt="Smiling man"
                    className="card-img-bottom object-fit-cover rounded-4 w-100"
                    height="400"
                  />
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-md-4 align-items-center mt-5">
              <div className="line d-none d-md-block"></div>
              <div>
                <button
                  className="btn text-white rounded-pill px-4 py-2"
                  style={{ backgroundColor: "#627251" }}
                >
                  Plan Your Hair Holiday
                </button>
              </div>
              <div className="line d-none d-md-block"></div>
            </div>
          </div>
        </div>

        <Results />

        {/* Cost */}
        <div className="sec-pad sec-bg" id="cost">
          <div className="container py-5">
            {/* FUE Cost Section */}
            <div className="row gy-4 pb-5">
              <div className="col-lg-5 sec-c">
                <h4 className="p-head text-black">
                  FUE Hair Transplant Cost In India
                </h4>
                <p>{data.costData.cost.fue.description}</p>
                <ul>
                  <li>
                    FUE hair transplant in India is generally a preferred method
                    at QHT Clinic.
                  </li>
                  <li>
                    The reason for its popularity is the quality, fast recovery
                    and natural look. This gives freedom of styling hair and
                    journey to both men & women.
                  </li>
                  <li>
                    Unlike the traditional FUT method, the FUE does not leave a
                    long scar. Scars heal fast as they are tiny and spread out
                    on the scalp. Some can’t even be short.
                  </li>
                  <li>The results are natural and permanent.</li>
                  <li>
                    Minimum package of ₹62,000 for 1200 – 1800 grafts of hair
                    transplant.
                  </li>
                </ul>
              </div>
              <div className="col-lg-7">
                <div className="table-responsive bg-white px-4 py-2 rounded-4">
                  <table className="table text-start">
                    <thead className="table-white">
                      <tr>
                        <th className="fw-semibold p-3">Level of Baldness</th>
                        <th className="fw-semibold p-3">
                          No. of Grafts Required
                        </th>
                        <th className="fw-semibold p-3">
                          Average Cost of FUE Transplant
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.costData.cost.fue.pricingTable.map((row) => (
                        <tr key={row._id}>
                          <td className="p-3">{row.level}</td>
                          <td className="p-3">{row.grafts}</td>
                          <td className="p-3">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-5" />

            {/* SAVA-FUE Section */}
            <div className="row flex-column-reverse flex-md-row gy-4 py-5">
              <div className="col-lg-7">
                <div className="table-responsive bg-white px-4 py-2 rounded-4">
                  <table className="table text-start">
                    <thead className="table-white">
                      <tr>
                        <th className="fw-semibold p-3">Level of Baldness</th>
                        <th className="fw-semibold p-3">
                          No. of Grafts Required
                        </th>
                        <th className="fw-semibold p-3">
                          Average Cost of FUE Transplant
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.costData.cost.savaFue.pricingTable.map((row) => (
                        <tr key={row._id}>
                          <td className="p-3">{row.level}</td>
                          <td className="p-3">{row.grafts}</td>
                          <td className="p-3">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-5 sec-c">
                <h5 className="p-head text-black">SAVA–FUE</h5>
                <p>{data.costData.cost.savaFue.description}</p>
                <ul>
                  <li>
                    In Dense Hair Implantation, the hair graft is implanted one
                    by one directly to the affected area.
                  </li>
                  <li>
                    It is an increasingly popular hair transplant technique in
                    India.
                  </li>
                  <li>
                    With the use of implanter, each hair graft is placed into
                    the scalp at an optimum depth and angle to create a natural
                    hairline.
                  </li>
                  <li>
                    This is non-invasive and painless procedure but a bit more
                    expensive compared to other methods. But considering the use
                    of the best technology and durability, it is known to be
                    worth the cost.
                  </li>
                </ul>
                <div>
                  <span className="border display-4 rounded-circle px-3 text-secondary text-opacity-50">
                    🡣
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-5" />

            {/* QHT Section */}
            <div className="row gy-4 pt-5">
              <div className="col-lg-5 sec-c">
                <h4 className="p-head text-black">
                  QHT (Advance FUE) Cost in India
                </h4>
                <p>{data.costData.cost.qht.description}</p>
                <ul>
                  <li>
                    FUE hair transplant in India is generally a preferred method
                    at QHT Clinic.
                  </li>
                  <li>
                    The reason for its popularity is the quality, fast recovery
                    and natural look. This gives freedom of styling hair and
                    journey to both men & women.
                  </li>
                  <li>
                    Unlike the traditional FUT method, the FUE does not leave a
                    long scar. Scars heal fast as they are tiny and spread out
                    on the scalp. Some can’t even be short.
                  </li>
                  <li>The results are natural and permanent.</li>
                  <li>
                    Minimum package of ₹40,000 for 1200 – 1800 grafts of hair
                    transplant.
                  </li>
                </ul>
              </div>
              <div className="col-lg-7">
                <div className="table-responsive bg-white px-4 py-2 rounded-4">
                  <table className="table text-start">
                    <thead className="table-white">
                      <tr>
                        <th className="fw-semibold p-3">Level of Baldness</th>
                        <th className="fw-semibold p-3">
                          No. of Grafts Required
                        </th>
                        <th className="fw-semibold p-3">
                          Average Cost of FUE Transplant
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.costData.cost.qht.pricingTable.map((row) => (
                        <tr key={row._id}>
                          <td className="p-3">{row.level}</td>
                          <td className="p-3">{row.grafts}</td>
                          <td className="p-3">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financing */}
        <div className="sec-pad">
          <div className="container">
            <div className="row gy-4 align-items-center">
              {/* Left Section */}
              <div className="col-lg-6">
                <h2 className="p-head mb-3">
                  We Got Your Back
                  <br />
                  With Financing.
                </h2>
                <p className="sec-c w-75 mb-5">
                  We support your goals with easy, accessible financing
                  solutions tailored to your needs and timeline.
                </p>

                <div className="mb-3 d-flex align-items-start">
                  <img src={claim} alt="Claim" className="me-3" width="40" />
                  <div>
                    <h6 className="fw-semibold">30 minutes claim support</h6>
                    <p className="sec-c small m-0">(In 120+ cities).</p>
                  </div>
                </div>

                <div className="mb-4 d-flex align-items-start border-top pt-4">
                  <img src={min} alt="24x7" className="me-3" width="40" />
                  <div>
                    <h6 className="fw-semibold">24*7 claims assistance</h6>
                    <p className="sec-c small m-0">In 30 mins. guaranteed.</p>
                  </div>
                </div>

                <div className="mb-4 d-flex align-items-start border-top pt-4">
                  <img src={check} alt="Policy" className="me-3" width="40" />
                  <div>
                    <h6 className="fw-semibold">Instant policy issuance</h6>
                    <p className="sec-c small m-0">No medical tests</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="d-flex align-items-center justify-content-between p-4 mt-5 sec-bg rounded">
                  <div className="d-flex justify-content-center align-items-center w-50">
                    <FaEnvelope className="me-2 primary-c" />
                    <span className="me-4">hello@qhtclinic.com</span>
                  </div>
                  <div className="d-flex justify-content-center align-items-center w-50 border-start border-2">
                    <FaPhoneAlt className="me-2 primary-c" />
                    <span>+91-9084726916</span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-12">
                    <div className="p-5 rounded-4 primary-bg text-white bg-finance">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <img
                            src={emi}
                            alt="EMI"
                            className="mb-3"
                            width="50"
                          />
                        </div>
                        <div className="display-1 fw-light">🡥</div>
                      </div>

                      <h5 className="mb-2 fw-normal w-75">EMI e-financing</h5>
                      <p className="small w-75">
                        Easily convert your purchases into manageable monthly
                        installments with our secure and flexible EMI solutions.
                      </p>
                      <div className="corner-arrow" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="p-5 rounded-4 primary-bg text-white bg-finance">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <img
                            src={insurance}
                            alt="Insurance"
                            className="mb-3"
                            width="50"
                          />
                        </div>
                        <div className="display-1 fw-light">🡥</div>
                      </div>

                      <h5 className="mb-2 fw-normal w-75">
                        Insurance & Payment Plans
                      </h5>
                      <p className="small w-75">
                        Safeguard your valuable assets and manage your finances
                        effortlessly with our personalized insurance solutions
                        and flexible payment plans designed to suit your
                        lifestyle and budget.
                      </p>
                      <div className="corner-arrow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QHT vs Delhi/Mumbai */}
        <div className="sec-pad pt-0">
          <div className="container border-top py-5 text-center">
            <h2 className="p-head pt-5">
              {data.costData.qhtVsDelhiMumbai.heading}
            </h2>
            <p className="sec-c mb-5">
              {data.costData.qhtVsDelhiMumbai.description}
            </p>

            <div className="container">
              <div className="table-responsive">
                <table className="table table-bordered text-center align-middle border">
                  <thead>
                    <tr>
                      <th className="p-4 fw-semibold">Metric</th>
                      <th className="p-4 fw-semibold bg-success bg-opacity-10">
                        QHT (Haridwar)
                      </th>
                      <th className="p-4 fw-semibold">Delhi</th>
                      <th className="p-4 fw-semibold">Mumbai</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.costData.qhtVsDelhiMumbai.comparisonTable.map(
                      (row) => (
                        <tr key={row._id}>
                          <td className="p-4">{row.metric}</td>
                          <td className="bg-success bg-opacity-10">
                            {typeof row.qht === "boolean" ? (
                              row.qht ? (
                                <FaCheck className="text-success" />
                              ) : (
                                <FaTimes className="text-danger" />
                              )
                            ) : (
                              row.qht
                            )}
                          </td>
                          <td className="p-4">
                            {typeof row.delhi === "boolean" ? (
                              row.delhi ? (
                                <FaCheck className="text-success" />
                              ) : (
                                <FaTimes className="text-danger" />
                              )
                            ) : (
                              row.delhi
                            )}
                          </td>
                          <td className="p-4">
                            {typeof row.mumbai === "boolean" ? (
                              row.mumbai ? (
                                <FaCheck className="text-success" />
                              ) : (
                                <FaTimes className="text-danger" />
                              )
                            ) : (
                              row.mumbai
                            )}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="sec-pad g-gradient">
          <div className="py-5 px-3 text-white text-center">
            <h2 className="p-head mb-3">
              {data.costData.costComparison.heading}
            </h2>
            <p className="mb-5">{data.costData.costComparison.description}</p>

            <div className="container">
              <div className="table-responsive bg-white p-5 rounded-4">
                <table className="table table-bordered bg-white text-dark overflow-hidden">
                  <thead className="px-3 py-2 text-start">
                    <tr>
                      <th className="px-4 py-3 fw-semibold">
                        Level of Baldness
                      </th>
                      <th className="px-4 py-3 fw-semibold">
                        No. of Grafts Required
                      </th>
                      <th className="px-4 py-3 fw-semibold">
                        QHT Transplant Cost
                      </th>
                      <th className="px-4 py-3 fw-semibold">
                        FUE Transplant Cost
                      </th>
                      <th className="px-4 py-3 fw-semibold">
                        DHI Transplant Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-start px-3 py-2">
                    {data.costData.costComparison.comparisonTable.map((row) => (
                      <tr key={row._id}>
                        <td className="px-4 py-3">{row.level}</td>
                        <td className="px-4 py-3">{row.grafts}</td>
                        <td className="px-4 py-3">{row.qht}</td>
                        <td className="px-4 py-3">{row.fue}</td>
                        <td className="px-4 py-3">{row.dhi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* CTA & Reviews Section */}
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 p-4 rounded-4 primary-bg text-white">
                <div className="d-flex align-items-center mb-3 mb-md-0">
                  <img
                    src={satisfy} // your image path
                    alt="Patients"
                    className="me-3 w-sm-100"
                    width={550}
                  />
                </div>
                <div className="d-flex align-items-center mb-3 mb-md-0 border-x px-5 border-white">
                  <img
                    src={gr} // your star rating image
                    alt="Google Rating"
                    className="me-3 w-sm-100"
                    width={300}
                  />
                </div>
                <button className="btn btn-light rounded-pill primary-c fw-semibold px-5 py-3">
                  Consult Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Baldness Form */}
        <div className="sec-pad border-bottom">
          <div className="container estimate-form">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-5">
              <h2 className="p-head">
                Get An Estimate Of Your <br />
                Their Transplant.
              </h2>
              <button className=" border-p px-4 py-2 bg-transparent primary-c rounded-pill">
                Book Free Consultation
              </button>
            </div>

            <div className="row g-4">
              <div className="col-md-3">
                <h5 className="form-label fw-semibold">Your Age?</h5>
                <input
                  type="number"
                  className="form-control border-0 border-bottom border-black px-0 py-3 rounded-0"
                  placeholder="Enter Your Age"
                />
              </div>

              <div className="col-md-6 text-start">
                <h5 className="form-label fw-semibold mb-4">
                  Select Your Baldness Level
                </h5>
                <div className="d-flex justify-content-md-between justify-content-start align-items-center mt-2 flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 7].map((level) => (
                    <label
                      key={level}
                      className={`baldness-option ${
                        baldnessLevel === level ? "selected" : ""
                      }`}
                      onClick={() => setBaldnessLevel(level)}
                    >
                      <span className="select-circle"></span>
                      <input
                        type="radio"
                        name="baldness"
                        value={level}
                        checked={baldnessLevel === level}
                        onChange={() => setBaldnessLevel(level)}
                        hidden
                      />
                      <img
                        src={baldnessImages[level]}
                        alt={`Baldness ${level}`}
                        className="img-fluid"
                        width={60}
                      />
                      <div className="text-center mt-1 primary-c fw-bold fs-5">
                        {level}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="col-md-3">
                <h5 className="form-label fw-semibold">Is It Hereditary?</h5>
                <div className="d-flex flex-column gap-2 mt-4">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      name="heredity"
                      value="mother"
                      checked={heredity === "mother"}
                      onChange={() => setHeredity("mother")}
                      className="form-check-input me-2"
                    />
                    Yes, From Mother’s Side
                  </label>
                  <label className="form-check-label">
                    <input
                      type="radio"
                      name="heredity"
                      value="father"
                      checked={heredity === "father"}
                      onChange={() => setHeredity("father")}
                      className="form-check-input me-2"
                    />
                    Yes, From Father’s Side
                  </label>
                  <label className="form-check-label">
                    <input
                      type="radio"
                      name="heredity"
                      value="none"
                      checked={heredity === "none"}
                      onChange={() => setHeredity("none")}
                      className="form-check-input me-2"
                    />
                    No, it isn’t
                  </label>
                </div>
              </div>

              <div className="col-md-12 mt-4">
                <h5 className="form-label fw-semibold">Personal Details</h5>
                <div className="row g-3">
                  <div className="col-md-3">
                    <input
                      type="text"
                      className="form-control border-0 border-bottom border-black rounded-0 px-0 py-3"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-3">
                    <input
                      type="text"
                      className="form-control border-0 border-bottom border-black rounded-0 px-0 py-3"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-md-3">
                    <input
                      type="email"
                      className="form-control border-0 border-bottom border-black rounded-0 px-0 py-3"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-3">
                    <input
                      type="tel"
                      className="form-control border-0 border-bottom border-black rounded-0 px-0 py-3"
                      placeholder="Mobile"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-5">
                <button className="primary-btn px-4">Get Estimate</button>
              </div>
            </div>
          </div>
        </div>

        <Videos />

        {/* Why QHT */}
        <div
          className="qht-section text-white d-flex align-items-center py-5 p-md-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <div className="container">
            <div className="row">
              {/* Left Content */}
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h2 className="p-head display-5">
                  Why QHT Clinic <br /> Is Worth For Your <br /> Investments.
                </h2>
                <p className="mt-3 w-50">
                  There is also some hair loss treatment available for people
                  suffering from initial hair loss like PRP (Platelet-rich
                  Plasma).
                </p>
                <button className="btn btn-light mt-3 rounded-pill px-4 py-2">
                  Explore More
                </button>
              </div>

              {/* Right Features */}
              <div className="col-lg-6">
                <div className="row g-4">
                  {features.map((item, index) => (
                    <div className="col-sm-6" key={index}>
                      <div className="feature-card p-4 border-secondary border rounded-3 text-white h-100">
                        <div className="mb-3">
                          <span className="text-black rounded-circle bg-white px-2 fs-4">
                            ✔
                          </span>
                        </div>
                        <h5 className="fw-normal">{item.title}</h5>
                        <p className="small mb-0">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Testimonails />

        {/* Solutions */}
        <div className="sec-pad text-white primary-bg" id="solution">
          <div className="container mb-5 py-5 border-bottom">
            <h2 className="p-head mb-2">Explore Related Solutions At QHT</h2>
            <p className="fs-6 fw-light w-75 mb-5">
              The hair transplant cost in India averages around ₹100 per graft
              plus tax. Each graft contains 1 to 3 hair follicles. Taking the
              number of grafts into consideration,
            </p>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              spaceBetween={40}
              slidesPerView={1}
              breakpoints={{
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4.5 },
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              {data.costData.solutions.map((item) => (
                <SwiperSlide key={item._id}>
                  <div className="bg-white h-300 text-dark p-4 rounded-3 text-start d-flex flex-column justify-content-between align-items-start">
                    <img
                      src={item.icon} // helper to map icon string to import
                      className="hw-70 object-fit-contain"
                      alt={item.title}
                    />
                    <h4 className="h-50px">{item.title}</h4>
                    <div className="primary-c" style={{ fontSize: "3rem" }}>
                      🡥
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <GetInTouch />

        <Faqs />

        {/* Explore city & country */}
        <div className="sec-pad sec-bg">
          <div className="container">
            {/* Section 1 - City */}
            <div className="mb-5">
              <h2 className="p-head w-75 mb-3">
                {data.costData.exploreLocations.cities.heading}
              </h2>
              <p className="sec-c w-75 fs-5">
                {data.costData.exploreLocations.cities.description}
              </p>
              <div className="row text-underline">
                {data.costData.exploreLocations.cities.list.map((item) => (
                  <div className="col-md-3 mb-2" key={item._id}>
                    <a href={item.link} className="sec-c">
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <hr className="my-5" />

            {/* Section 2 - Country */}
            <div>
              <h2 className="p-head w-75 mb-3">
                {data.costData.exploreLocations.countries.heading}
              </h2>
              <p className="sec-c w-75 fs-5">
                {data.costData.exploreLocations.countries.description}
              </p>
              <div className="row text-underline">
                {data.costData.exploreLocations.countries.list.map((item) => (
                  <div className="col-md-3 mb-2" key={item._id}>
                    <a href={item.link} className="sec-c">
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cost;
