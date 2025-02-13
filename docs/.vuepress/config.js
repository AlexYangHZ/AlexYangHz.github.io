const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "Alex Yang",
  description: 'Alex Yang Things',
  base: '/AlexYangHz.github.io/', // 格式：'/<仓库名>/'， 默认'/'
  repo: 'AlexYangHz.github.io',
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}
