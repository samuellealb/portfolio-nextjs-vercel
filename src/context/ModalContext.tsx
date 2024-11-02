'use client';

import { createContext, useState, ReactNode } from 'react';

type ModalContextType = {
  modalOpen: boolean;
  imageIndex: number | null;
  // eslint-disable-next-line no-unused-vars
  setModalOpen: (_open: boolean, _index?: number | null) => void;
};

export const ModalContext = createContext<ModalContextType>({
  modalOpen: false,
  imageIndex: null,
  setModalOpen: () => {},
});

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalOpen, setModalOpenState] = useState(false);
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const setModalOpen = (open: boolean, index: number | null = null) => {
    setModalOpenState(open);
    setImageIndex(index);
  };

  return (
    <ModalContext.Provider value={{ modalOpen, imageIndex, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
