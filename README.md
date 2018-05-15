# scor-stars
#### 基于vue的评分星星组件，例如5🌟

## 安装
方法一：
```
npm install scor-stars --save

import stars from 'scor-stars'
```

方法二：
```
<script type="text/javascript" src="https://github.com/moyuanshangshen/scor-stars.git/dist/main.js">
```

## 使用
   

不管您是在.vue文件中使用或者是在原生的html中使用都是特别简单哈哈

1，安装引入之后在您的组件中的vue实例中的components属性中注册改组件

```
import stars from 'scor-stars'
export default {
    components:{
        stars
    }
}
```
然后在需要的位置加入stars标签即可：

```
<stars :num="num" :option:"option"></stars>
```

```
num : {
    type:Number // 数字类型，星星的个数
}

option: {
    type:Objext,// 对象类型
    
}

例子：

option:{
    font_size:20px,
    default_color:#333,//未进行评分时候的星星颜色
    letter_spacing:5px,//星星与星星之间的间距
    light_color:#ffcf00/评分后星星的颜色
}
```


