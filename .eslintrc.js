module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    // 句末不需要分号（当然for等里面必须的还是要的）
    "semi": ["error", "never"],
    "semi-spacing": ["error", { "before": false, "after": true }],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}