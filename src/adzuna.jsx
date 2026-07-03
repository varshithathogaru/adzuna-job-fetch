import { useState, useEffect } from "react";

export default function AdzunaJobFetch({ appId, appKey, what = "software developer", where = "India" }) {
  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!appId || !appKey) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    const url = `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${appId}&app_key=${appKey}&results_per_page=5&what=${encodeURIComponent(
      what
    )}&where=${encodeURIComponent(where)}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setJobs(data.results || []);
        setStatus("done");
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setStatus("error");
      });
  }, [appId, appKey, what, where]);

  if (status === "loading") return <p>Loading jobs...</p>;
  if (status === "error") return <p>Error fetching jobs...</p>;
  if (!jobs.length) return <p>No jobs found.</p>;

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} style={{ marginBottom: "20px" }}>
            <h3>{job.title}</h3>
            <p>{job.company?.display_name || "Unknown company"}</p>
            <p>{job.location?.display_name || "Unknown location"}</p>
            <a href={job.redirect_url} target="_blank" rel="noopener noreferrer">
              View Job
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
