"use client";

import { useEffect, useState } from "react";
import { Thumbnail } from "../Thumbnail";
import { Jobs } from "@/app/api/jobs/types";

export const JobsList = () => {
  const [jobs, setJobs] = useState<Jobs[] | null>(null);

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs");
      const { data } = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      {!jobs && <div>Loading...</div>}
      {jobs && jobs.length === 0 && <div>No jobs available</div>}
      {jobs &&
        jobs.length > 0 &&
        jobs.map((job) => (
          <Thumbnail
            key={job.id}
            id={job.id.toString()}
            title={job.title}
            src={job.thumbnail.src}
          />
        ))}
    </div>
  );
};
