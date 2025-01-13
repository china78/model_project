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