module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': 0
  }
}
