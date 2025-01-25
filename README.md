variable.scss 全局变量
common.scss 全局样式

webpack.config.js
.concat({
  loader:'sass-resources-loader',
  options:{
    resources:[
      path.join(__dirname, '../src/variable.scss'),
      path.join(__dirname, '../src/common.scss'),
    ]
  }
})

首页主图设置了 transform: scaleX(-1);

屏幕尺寸类别	最小宽度	最大宽度	常见设备
手机	max-width: 600px	max-width: 480px	iPhone SE/5/6/7/8等
平板	min-width: 601px	max-width: 1024px	iPad、安卓平板等
桌面	min-width: 1025px	-	一般桌面显示器
超大显示器	min-width: 1440px	-	4K 显示器、超宽显示器