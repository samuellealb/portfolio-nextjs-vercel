"use client";

import { useEffect, useState } from "react";
import { Thumbnail } from "../Thumbnail";
import { Jobs } from "@/app/api/types";

export const JobsList = ({ category }: { category?: string }) => {
  const [jobs, setJobs] = useState<Jobs[] | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let response;
        if (category) {
          response = await fetch(`/api/category/${category}`);
        } else {
          response = await fetch("/api/jobs");
        }
        const { data } = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [category]);

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
