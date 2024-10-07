import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

/* eslint no-underscore-dangle: 0 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.env({
    es2020: true,
    node: true,
  }),

  ...compat.extends('airbnb-base'),

  ...compat.config({
    extends: 'airbnb-base',
    env: {
      es2020: true,
      node: true,
    },
    rules: {
      semi: 'error',
    },
  }),
];
