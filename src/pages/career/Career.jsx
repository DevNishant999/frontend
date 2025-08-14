import React, { useEffect, useState } from "react";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

   const API = import.meta.env.VITE_API_URL; // Make sure this is set in .env

  // Fetch jobs from API
  useEffect(() => {
    fetch(`${API}/jobs`)
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div className="sec-pad pt-4 sec-bg">
      <div className="container">
        {/* Show Grid if no job selected */}
        {!selectedJob && (
          <>
            <h2 className="mb-4 p-head">Current Openings</h2>
            <div className="row">
              {jobs.map((job) => (
                <div key={job.id} className="col-md-4 mb-4">
                  <div className="card sec-gradient h-100">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">{job.title}</h5>
                      <button
                        className="btn mt-4 text-end primary-c border-none"
                        onClick={() => setSelectedJob(job)}
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Show Job Details if a job is selected */}
        {selectedJob && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2>{selectedJob.title}</h2>
              <button
                className="btn primary-btn px-4"
                onClick={() => setSelectedJob(null)}
              >
                ← Back to Openings
              </button>
            </div>

            <div className="row">
              {/* Job description */}
              <div
                className="col-md-8"
                dangerouslySetInnerHTML={{ __html: selectedJob.description }}
              ></div>

              {/* Apply Form */}
              <div className="col-md-4">
                <div className="card shadow-sm p-3">
                  <h5 className="mb-3 text-center">Apply for this job</h5>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Interested In?</label>
                      <select className="form-select">
                        {jobs.map((job) => (
                          <option key={job.id} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Upload Resume</label>
                      <input type="file" className="form-control" />
                    </div>
                    <button type="submit" className="btn primary-btn w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Career;
