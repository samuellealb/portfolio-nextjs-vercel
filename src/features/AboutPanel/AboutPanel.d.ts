import { Locale } from '@/i18n-config';
import React from 'react';
import { TGetBioProps } from '@/src/lib/types'; // Import updated TGetBioProps

// Renamed TAboutPanel to AboutPanelProps and changed its structure
export type AboutPanelProps = {
  bioEntry: TGetBioProps; // This will contain sys, __typename, text, image, etc.
  locale: Locale;
  socialBar: React.ReactNode;
};
