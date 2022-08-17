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
    'react/jsx-indent-props': 'off',
    'class-methods-use-this': 'off',
    'react/forbid-prop-types': 'off',
    'default-param-last': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-props-no-spreading': 'off',
    'consistent-return': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
