import React from 'react';

export type TModal = {
  isOpen: boolean;
  closeAction: () => void;
  children: React.ReactNode;
};
