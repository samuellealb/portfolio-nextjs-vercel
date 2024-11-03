'use client';

import { createContext, useState, ReactNode } from 'react';

type ModalContextType = {
  modalOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setModalOpen: (_open: boolean) => void;
};

export const ModalContext = createContext<ModalContextType>({
  modalOpen: false,
  setModalOpen: () => {},
});

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalOpen, setModalOpenState] = useState(false);

  const setModalOpen = (open: boolean) => {
    setModalOpenState(open);
  };

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
