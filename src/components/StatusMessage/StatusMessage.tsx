import styles from './StatusMessage.module.scss';
import Image from 'next/image';
import { Status } from './StatusMessage.d';

const statusConfig = {
  [Status.MAINTENANCE]: {
    message: 'Maintenance Mode',
    image: '/imgs/maintenance_mode.png',
  },
  [Status.NOT_FOUND]: {
    message: 'Page Not Found',
    image: '/imgs/not_found.png',
  },
  [Status.NO_ITEMS]: {
    message: 'No Items Found',
    image: '/imgs/no_items.png',
  },
  [Status.NO_DATA]: {
    message: 'No Data Found',
    image: '/imgs/no_items.png',
  },
  default: {
    message: 'Something went wrong',
    image: '',
  },
};

export const StatusMessage = ({ status }: { status: Status }) => {
  const { message, image } = statusConfig[status] || statusConfig.default;
  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Message}>{message}</h2>
      <div className={styles.Image}>
        {image && <Image src={image} alt={message} fill />}
      </div>
    </div>
  );
};
