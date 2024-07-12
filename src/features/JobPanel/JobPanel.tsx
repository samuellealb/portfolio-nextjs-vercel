import { Job } from "@/src/lib/types";

export const JobPanel = async (jobData: Job) => {
  const jobExists = jobData && Object.keys(jobData).length > 0;

  if (jobExists) {
    return (
      <div>
        Job Data:
        {jobData && <pre>{JSON.stringify(jobData, null, 2)}</pre>}
      </div>
    );
  }

  return <div>Job not found</div>;
};
