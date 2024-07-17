import { Thumbnail } from '@/src/components/Thumbnail';
import { Job } from '@/src/lib/types';
import styles from './JobsList.module.scss';

export const JobsList = (jobsList: Job[]) => {
  if (jobsList && Object.keys(jobsList).length > 0) {
    return (
      <div className={styles.jobsList}>
        {Object.values(jobsList).map((job) => (
          <Thumbnail
            key={job.sys.id}
            slug={job.slug}
            title={job.thumbnail?.title}
            src={job.thumbnail?.url}
          />
        ))}
      </div>
    );
  }

  return <div>No jobs available</div>;
};
