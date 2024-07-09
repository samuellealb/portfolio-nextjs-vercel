"use client";

import { useEffect, useState, useCallback } from "react";
import { Thumbnail } from "@/src/components/Thumbnail";
import { Job } from "@/app/api/types";

export const JobsList = ({ category }: { category?: string }) => {
  const [jobs, setJobs] = useState<Job[] | null>(null);

  const fetchJobs = useCallback(async () => {
    try {
      let response;
      if (category) {
        response = await fetch(`/api/categories/${category}`);
      } else {
        response = await fetch("/api/jobs");
      }
      const { data } = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  }, [category]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

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
