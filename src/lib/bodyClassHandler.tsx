'use client';

import React, { useEffect, useContext } from 'react';
import { ModalContext } from '@/src/context/ModalContext';

export const BodyClassManager = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { modalOpen } = useContext(ModalContext);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [modalOpen]);

  return <>{children}</>;
};
