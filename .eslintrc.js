module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: 'espree',
    ecmaVersion: 2020,
    sourceType: 'module'
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'prettier'
  ],

  plugins: ['vue', 'prettier'],

  rules: {
    /* General JS */
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-unused-vars': 'warn',
    'no-undef': 'error',

    /* Vue legacy allowances */
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',

    /* Prettier integration */
    'prettier/prettier': 'error'
  }
};
