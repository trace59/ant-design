const less = require('less');
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const clean = require('postcss-clean');
const pack = require('../package.json');

console.log(`less version is ${less.version.join('.')}`);
console.log(`antd version is ${pack.version}`);

less.render(`
  @import './v2-compatible-reset.less';
  @import './index.less';
  @import './components.less';
  @font-size-base: 12px;
  @font-size-lg: 14px;
  @input-height-sm: 22px;
  @input-height-base: 28px;
  @input-height-lg: 32px;
  @btn-height-sm: 22px;
  @btn-height-base: 28px;
  @btn-height-lg: 32px; // 修改了变量名
  @table-padding-vertical: 12px;
  @pagination-item-size: 28px;
  @pagination-item-size-sm: 22px;
  @tree-title-height: 30px;
`, {
  javascriptEnabled: true,
  rootFileInfo: {
    currentDirectory: path.join(__dirname, '../components/style'),
  },
}).then((output) => {
  fs.writeFileSync('./dist/antd-with-theme.css', output.css);
  postcss([
    clean(),
  ]).process(output.css).then((res) => {
    fs.writeFileSync('./dist/antd-with-theme.min.css', res.css);
    console.log('done');
  }, console.error);
}).catch(console.error);
