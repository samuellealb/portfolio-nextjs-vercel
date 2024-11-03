import { Thumbnail } from '@/src/components/Thumbnail';
import { TJob } from '@/src/lib/types';
import styles from './JobsList.module.scss';

export const JobsList = (jobsList: TJob[]) => {
  const hasItems = jobsList && Object.keys(jobsList).length > 0;

  if (hasItems) {
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
