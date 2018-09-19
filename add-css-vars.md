## primary相关
### 常见属性

```js
// 也可以保留原样式
source.replace(/(background|color): @(primiary-color|primary-\d)/, '$1: var(--$2, @$2)')

```

### 对于源代码的改造

* tint
  * primary-tint-80
  * primary-tint-50
  * primary-tint-20
* fade
  * primary-fade-20

注：以下几个变量等于primary-color
* @outline-color
* @switch-color

注：需要修改.active和.hover两个函数来适配动态主题

注：需要修改button的.button-variant-primary函数

### 命令
```
// 安装依赖
npm i less postc-css post-clean -D

// 运行脚本
node scripts/generateTheme.js
```




