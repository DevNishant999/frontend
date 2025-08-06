import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import test from "../assets/test.png";
import quote from "../assets/quotes.png";

// const testimonialsData = [
//   {
//     id: 1,
//     name: "Priyanka Das",
//     age: 26,
//     location: "India",
//     rating: 5,
//     text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
//     image: test,
//     grade: "Grade III",
//   },
//   {
//     id: 2,
//     name: "Abhishek Kumar",
//     age: 22,
//     location: "India",
//     rating: 3,
//     text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
//     image: test,
//     grade: "Grade II",
//   },
//   {
//     id: 3,
//     name: "Amardeep Singh",
//     age: 45,
//     location: "India",
//     rating: 5,
//     text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
//     image: test,
//     grade: "Grade III",
//   },
//   {
//     id: 4,
//     name: "Amardeep Singh",
//     age: 45,
//     location: "India",
//     rating: 5,
//     text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
//     image: test,
//     grade: "Grade III",
//   },
//   {
//     id: 5,
//     name: "Amardeep Singh",
//     age: 45,
//     location: "India",
//     rating: 5,
//     text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
//     image: test,
//     grade: "Grade III",
//   },
// ];

const grades = [
  "Grade I",
  "Grade II",
  "Grade III",
  "Grade IV",
  "Grade V",
  "Grade VI",
  "Grade VII",
];

const Testimonials = () => {
  const [selectedGrade, setSelectedGrade] = useState("Grade III");
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/testimonials`)
      .then((res) => res.json())
      .then(setTestimonialsData);
  }, []);

  const filteredTestimonials = testimonialsData.filter(
    (item) => item.grade === selectedGrade
  );

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="sec-pad" id="test">
        <div className="container py-md-5">
          <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap">
            <div className="mb-4" data-aos="fade-up">
              <h2 className="p-head">Testimonials</h2>
            </div>

            <div
              className="mb-4 bg-white rounded p-md-2 p-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* Mobile View: Show select */}
              {isMobile ? (
                <select
                  className="form-select primary-bg text-white"
                  value={selectedGrade}
                  onChange={(e) => handleGradeClick(e.target.value)}
                >
                  {grades.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              ) : (
                // Desktop View: Show buttons
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {grades.map((grade) => (
                    <button
                      key={grade}
                      onClick={() => handleGradeClick(grade)}
                      className="btn rounded px-3"
                      style={{
                        backgroundColor:
                          selectedGrade === grade ? "#627251" : "#fff",
                        color: selectedGrade === grade ? "#fff" : "#627251",
                      }}
                    >
                      {grade}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <h4 className="my-4" data-aos="fade-up" data-aos-delay="200">
            What our community says about their journey{" "}
            <br className="d-none d-md-block" /> and experiences with us so far.
          </h4>

          {/* Swiper Testimonials */}
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
          >
            {filteredTestimonials.length > 0 ? (
              filteredTestimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id}>
                  <div
                    className="p-4 bg-white border rounded-4 d-flex flex-column justify-content-between h-100"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100} // ✅ Now this will work
                  >
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
                      <p className="text-muted h-100px overflow-y-scroll">
                        {testimonial.text}
                      </p>
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

          {/* View All Button */}
          <div
            className="d-flex justify-content-center gap-md-4 align-items-center mt-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="line d-none d-md-block"></div>
            <div>
              <button className="primary-btn px-5">View All Testimonials</button>
            </div>
            <div className="line d-none d-md-block"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
