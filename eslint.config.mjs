import { FlatCompat } from '@eslint/eslintrc';
import storybook from 'eslint-plugin-storybook';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  ...storybook.configs['flat/recommended'],
  ...compat.extends('prettier'),
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
  },
];

export default eslintConfig;
