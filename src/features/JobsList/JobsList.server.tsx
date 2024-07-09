import { Thumbnail } from "@/src/components/Thumbnail";
import { Job } from "@/app/api/types";

export const JobsList = async ({ category }: { category?: string }) => {
  const jobs: Job[] = [];

  try {
    let response;
    if (category) {
      response = await fetch(
        process.env.URL + `/api/categories/${category}`
      );
    } else {
      response = await fetch(process.env.URL + "/api/jobs");
    }
    const { data } = await response.json();
    jobs.push(...data);
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }

  if (jobs.length) {
    return jobs.map((job) => (
      <Thumbnail
        key={job.id}
        id={job.id.toString()}
        title={job.title}
        src={job.thumbnail.src}
      />
    ));
  }

  return <div>No jobs available</div>;
};
