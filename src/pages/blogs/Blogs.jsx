import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../blogs/Blogs.css";
import Guide from "../../components/Guide";

const categories = [
  "Hair Transplant Techniques",
  "Baldness Grade",
  "Patient Experiences",
  "Hair Care Tips",
  "Scalp & Hair Health",
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [posts, setPosts] = useState([]);

  console.log(posts);

  useEffect(() => {
    console.log("API URL:", `${import.meta.env.VITE_API_URL}/blogs`);
    fetch(`${import.meta.env.VITE_API_URL}/blogs`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        console.log("All posts:", data);
        setPosts(data);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        // Optionally set an error state here
      });
  }, []);

  const filteredPosts = posts.filter(
    (post) => post.category === activeCategory
  );

  return (
    <>
      {/* Banner */}
      <div className="sec-pad bbanner">
        <div className="container just-align-center h-100">
          <div className="row">
            <h1 className="text-white text-center display-3 fw-normal">
              Hair Transplant Insights, <br /> Tips, and Trends
            </h1>
            <h4 className="text-white text-center fw-light">
              Discover expert tips, trends, and insights on hair restoration
              treatments.
            </h4>
          </div>
        </div>
      </div>

      {/* Blogs */}
      <div className="sec-pad" id="blogs">
        <div className="container">
          <div className="mb-5 pb-5 border-bottom border-grey d-flex flex-wrap justify-content-between align-items-center gap-2">
            <h4 className="m-0 text-secondary">Categories</h4>
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`btn px-4 ${
                  cat === activeCategory ? "ter-bg text-white" : "border sec-c"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="row">
            {filteredPosts.length === 0 ? (
              <p>No posts found for this category.</p>
            ) : (
              filteredPosts.map((post) => (
                <div className="col-md-6 col-lg-4 mb-4" key={post._id}>
                  <div className="card border-0 h-100">
                    <img
                      src={post.thumbnail || "/default-blog.png"}
                      alt={post.title}
                      className="card-img-top h-300 object-fit-cover"
                    />
                    <div className="card-body px-0">
                      <small className="sec-c">{post.date}</small>
                      <h4 className="fw-medium mt-2">{post.title}</h4>
                      <h6 className="sec-c fw-light mt-3 h-100px">
                        {post.content.replace(/<[^>]+>/g, "").slice(0, 100)}
                        ...
                      </h6>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="primary-c d-block"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Care Guide blogs */}
      <Guide />
    </>
  );
};

export default Blogs;
