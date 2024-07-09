import { Job } from "@/app/api/types";

export const JobPanel = async ({ slug }: { slug: string }) => {
  let job: Job | null = null;

  try {
    const response = await fetch(`http://localhost:3000/api/jobs/${slug}`);
    const { data } = await response.json();
    job = data;
  } catch (error) {
    console.error("Error fetching job:", error);
  }

  if (job) {
    return (
      <div>
        Job Data:
        {job && <pre>{JSON.stringify(job, null, 2)}</pre>}
      </div>
    );
  }

  return <div>Job not found</div>;
};
