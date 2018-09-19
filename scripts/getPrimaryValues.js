const less = require('less');
const path = require('path');

const $primary = '#f15b41';

less.render(`
  @import './themes/default.less';
  @primary-color: var(--primary-color, ${$primary});
  @primary: color(replace(~"@{primary-color}", @var-reg, "$1"));

  body {
    --primary-color: @primary;
    --primary-1: replace(~"@{primary-1}", @var-reg, "$1");
    --primary-2: replace(~"@{primary-2}", @var-reg, "$1");
    --primary-3: replace(~"@{primary-3}", @var-reg, "$1");
    --primary-4: replace(~"@{primary-4}", @var-reg, "$1");
    --primary-5: replace(~"@{primary-5}", @var-reg, "$1");
    --primary-7: replace(~"@{primary-7}", @var-reg, "$1");
    --primary-fade-20: fade(@primary, 20%);
    --primary-tint-20: tint(@primary, 20%);
    --primary-tint-50: tint(@primary, 50%);
    --primary-tint-80: tint(@primary, 80%);
  }
`, {
  javascriptEnabled: true,
  rootFileInfo: {
    currentDirectory: path.join(__dirname, '../components/style'),
  },
}).then((output) => {
  console.log(output.css);
}).catch(console.error);
