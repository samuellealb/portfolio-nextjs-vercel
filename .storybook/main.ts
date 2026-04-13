import path from 'path';
import { fileURLToPath } from 'url';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/nextjs-vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../**/*.stories.*'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
  ],
  features: { experimentalRSC: true },
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '..'),
        },
      },
    });
  },
};
export default config;
