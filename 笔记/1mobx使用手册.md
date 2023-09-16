# 官方文档地址
https://mobx.js.org/installation.html#installation
# 安装
在react中需要安装mobx和mobx-react
```javascript
npm install --save mobx  
npm install mobx-react --save
```


# 问题
1.发现父组件使用了observer,子组件不用，页面不会更新
2.父组件即使不用，子组件用了也是会更新的，所以使用hooks用法，哪里要监听你加哪里加observer