/* eslint-env node */
module.exports = {
  rules: {
    'vue/multi-word-component-names': 0,
  },
  rules: {
    'vue/no-reserved-component-names': 'on',
  },
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
