  // .eslintrc.js
  module.exports = {
    extends: [
      'next',
      'next/core-web-vitals',
    ],
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
    },
  };
