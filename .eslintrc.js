module.exports = {
  env: {
    es6: true,
    node: true,
  },

  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9,
    project: './tsconfig.json',
  },

  plugins: ['@typescript-eslint'],

  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  },
};
