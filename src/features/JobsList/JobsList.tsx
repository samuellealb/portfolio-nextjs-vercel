import { Thumbnail } from "@/src/components/Thumbnail";
import { Job } from "@/src/lib/types";

export const JobsList = async (jobsList: Job[]) => {
  if (jobsList && Object.keys(jobsList).length > 0) {
    return (
      <>
        {Object.values(jobsList).map((job) => (
          <Thumbnail
            key={job.sys.id}
            slug={job.slug}
            title={job.cover?.title}
            src={job.cover?.url}
          />
        ))}
      </>
    );
  }

  return <div>No jobs available</div>;
};
