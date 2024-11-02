import styles from './ModalDialog.module.scss';
import { TModal } from './ModalDialog.d';
import Image from 'next/image';

export const ModalDialog = ({ isOpen, closeAction, children }: TModal) => {
  if (!isOpen) return null;
  return (
    <div className={styles.ModalDialog}>
      <div className={styles.Wrapper}>
        <button
          className={styles.CloseButton}
          onClick={() => closeAction()}
          type="button"
          title="Close"
        >
          <Image src="/imgs/close.svg" alt="Close" width={24} height={24} />
        </button>
        {children}
      </div>
    </div>
  );
};
