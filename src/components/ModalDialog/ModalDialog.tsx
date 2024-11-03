import { useEffect, useRef } from 'react';
import styles from './ModalDialog.module.scss';
import { TModal } from './ModalDialog.d';
import Image from 'next/image';

export const ModalDialog = ({ isOpen, closeAction, children }: TModal) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAction();
      }

      if (event.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button, textarea, input, select',
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeAction]);

  if (!isOpen) return null;
  return (
    <div className={styles.ModalDialog} ref={modalRef}>
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
