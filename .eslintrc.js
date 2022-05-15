module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react', 'import', 'jsx-a11y',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    indent: 'off',
    'react/jsx-indent': 'off',
    'class-methods-use-this': 'off',
    'react/forbid-prop-types': 'off',
  },
};
