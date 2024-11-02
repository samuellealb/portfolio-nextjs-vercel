'use client';

import { createContext, useState, ReactNode } from 'react';

type SliderContextType = {
  imageIndex: number | null;
  // eslint-disable-next-line no-unused-vars
  setImageIndex: (_index: number | null) => void;
};

export const SliderContext = createContext<SliderContextType>({
  imageIndex: 0,
  setImageIndex: () => {},
});

type SliderProviderProps = {
  children: ReactNode;
};

export const SliderProvider = ({ children }: SliderProviderProps) => {
  const [imageIndex, setImageIndexState] = useState<number | null>(0);

  const setImageIndex = (index: number | null) => {
    setImageIndexState(index);
  };

  return (
    <SliderContext.Provider value={{ imageIndex, setImageIndex }}>
      {children}
    </SliderContext.Provider>
  );
};
