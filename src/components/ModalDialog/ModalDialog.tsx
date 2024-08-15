import styles from './ModalDialog.module.scss';
import { TModal } from './ModalDialog.d';

export const ModalDialog = ({ isOpen, children }: TModal) => {
  if (!isOpen) return null;
  return <div className={styles.ModalDialog}>{children}</div>;
};
