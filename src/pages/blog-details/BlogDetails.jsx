import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../blog-details/BlogDetails.css";
import Guide from "../../components/Guide";
import surgeryroom from "../../assets/surgeryroom.png";

const videos = [
  {
    id: 1,
    title: "The reality will shock hair transplant.",
    thumbnail: surgeryroom,
  },
  {
    id: 2,
    title: "The reality will shock hair transplant.",
    thumbnail: surgeryroom,
  },
  {
    id: 3,
    title: "The reality will shock hair transplant.",
    thumbnail: surgeryroom,
  },
  {
    id: 4,
    title: "The reality will shock hair transplant.",
    thumbnail: surgeryroom,
  },
];

const BlogDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(null);

  console.log("location",location)

  useEffect(() => {
    // Check if path includes 'guide'
    const isGuide = location.pathname.includes("/guide/");
    const apiUrl = isGuide
      ? `${import.meta.env.VITE_API_URL}/blogs/guide/${slug}`
      : `${import.meta.env.VITE_API_URL}/blogs/${slug}`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        console.log("Blog/Guide data:", data);
        setBlog(data);
      })
      .catch((err) => {
        console.error("Error fetching blog/guide:", err);
      });
  }, [slug, location.pathname]);

  // if (!blog) return <p>Loading...</p>;

  return (
    <>
      {/* SEO HEAD */}
      <Helmet>
        <title>{blog?.seoTitle || blog?.title}</title>
        <meta name="description" content={blog?.seoDescription || blog?.title} />
        <meta name="keywords" content={blog?.seoKeywords || ""} />
      </Helmet>

      {/* Banner */}
      <div className="sec-pad sec-gradient">
        <div className="container text-center">
          <h6>by Team Regrow | {blog?.date}</h6>
          <h1 className="display-4 fw-medium mx-4">{blog?.title}</h1>
          <p className="sec-c mb-5">{blog?.category}</p>
          {blog?.thumbnail && (
            <img
              src={blog?.thumbnail}
              className="w-100 rounded-5"
              alt={blog?.title}
            />
          )}
        </div>
      </div>

      {/* Details + Sidebar */}
      <div className="sec-pad">
        <div className="container">
          <div className="row">
            {/* Blog Content */}
            <div className="col-md-8 sec-c">
              <div dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
            </div>

            {/* Static Sidebar */}
            <div className="col-md-4 px-4">
              <div className="primary-bg text-white p-4 rounded-4">
                <form id="blogdetailsform">
                  <div className="row mb-3">
                    <h4>Get Notified</h4>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-white text-white"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-white text-white"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-white text-white"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-white text-white"
                      placeholder="Mobile"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-white text-white"
                      rows="3"
                      placeholder="Type your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-white primary-c btn rounded-pill px-4"
                  >
                    Submit
                  </button>
                </form>
              </div>

              <div className="p-4 text-white rounded-4 ter-bg mt-5">
                <h4 className="mb-4">Latest Videos</h4>
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`d-flex align-items-start gap-3 fw-light pb-4 ${
                      index !== videos.length - 1
                        ? "mb-4 border-bottom border-light-subtle"
                        : ""
                    }`}
                  >
                    <img
                      src={video.thumbnail}
                      alt={`Video ${index + 1}`}
                      className="object-fit-cover"
                      width="80"
                      height="50"
                    />
                    <h6 className="mb-0 fw-4">{video.title}</h6>
                  </div>
                ))}
              </div>

              <div className="bg-parda text-white p-4 rounded-4 ter-bg mt-5">
                <h4 className="text-parot">Our Services</h4>
                <ol className="list-unstyled">
                  <li className="border-bottom border-grey py-4">
                    <span className="rounded-circle bg-parot text-black px-2">
                      1
                    </span>{" "}
                    Hair Transplant For Men
                  </li>
                  <li className="border-bottom border-grey py-4">
                    <span className="rounded-circle bg-parot text-black px-2">
                      2
                    </span>{" "}
                    Hairline Reconstruction
                  </li>
                  <li className="border-bottom border-grey py-4">
                    <span className="rounded-circle bg-parot text-black px-2">
                      3
                    </span>{" "}
                    Failed Hair Transplant Repair
                  </li>
                  <li className="border-bottom border-grey py-4">
                    <span className="rounded-circle bg-parot text-black px-2">
                      4
                    </span>{" "}
                    Body Hair Transplant
                  </li>
                  <li className="border-bottom border-grey py-4">
                    <span className="rounded-circle bg-parot text-black px-2">
                      5
                    </span>{" "}
                    Beard Transplant
                  </li>
                  <li className="py-4">
                    <span className="rounded-circle bg-parot text-black px-2">
                      6
                    </span>{" "}
                    PRP Treatment
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Guide />
    </>
  );
};

export default BlogDetails;
