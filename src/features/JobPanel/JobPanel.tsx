"use client";

import { useCallback, useEffect, useState } from "react";
import { Job } from "@/app/api/types";

export const JobPanel = ({ slug }: { slug: string }) => {
  const [job, setJob] = useState<Job | null | undefined>(undefined);

  const fetchJob = useCallback(async () => {
    try {
      const response = await fetch(`/api/jobs/${slug}`);
      const { data } = await response.json();
      setJob(data);
    } catch (error) {
      console.error("Error fetching job:", error);
      setJob(null);
    }
  }, [slug]);

  useEffect(() => {
    fetchJob();
  }, [fetchJob]);

  return (
    <div>
      Job Data:
      {job === undefined && <div>Loading...</div>}
      {job === null && <div>Job not found</div>}
      {job && <pre>{JSON.stringify(job, null, 2)}</pre>}
    </div>
  );
};
