import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Guide = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (blog) => blog.category.toLowerCase() === "guide"
        );
        setGuides(filtered);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log("Guides", guides);

  return (
    <>
      <div className="sec-pad primary-bg" id="guide">
        <div className="container text-white">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="p-head">Hair Care Guides</h2>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
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
            {guides.length === 0 ? (
              <p>No guides found.</p>
            ) : (
              guides.map((guide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="card bg-transparent text-white border-0">
                    <img
                      src={guide.thumbnail || "/default-blog.png"}
                      className="card-img-top rounded"
                      alt={guide.title}
                    />
                    <div className="card-body px-0">
                      <small className="text-parot">{guide.date}</small>
                      <h4 className="fw-normal mt-2">{guide.title}</h4>
                      <h6 className="sec-c fw-light text-white mt-3 h-100px">
                        {guide.content.replace(/<[^>]+>/g, "").slice(0, 100)}...
                      </h6>
                      <Link
                        to={`/guide/${guides[0].slug}`}
                        className="primary-c d-block text-parot"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Guide;
