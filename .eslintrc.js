// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-unused-vars": [2, {
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none"
    }],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // 关闭语句强制分号结尾
    "semi": [0],
    //空行最多不能超过5行
    "no-multiple-empty-lines": [0, {"max": 5}],
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],

  }
}
