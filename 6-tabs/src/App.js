import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loader from "./Loader";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const jobs = await res.json();
    setJobs(jobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <Loader loading={loading} />;
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map(({ company }, index) => (
            <button
              className={`job-btn ${index === value && "active-btn"}`}
              key={index}
              onClick={() => setValue(index)}
            >
              {company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
