<div style="text-align: center">

# RNUX
## React Native UX

</div>


## 安装
1. 依赖库 [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/#installation)
2. 依赖库 [react-native-modal](https://github.com/react-native-modal/react-native-modal)
3. 依赖库 [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/#installation)
4. 字体 [@react-native-vector-icons/icomoon](https://github.com/oblador/react-native-vector-icons/blob/master/packages/icomoon/README.md)
5. 本体  [rnux](https://github.com/Chenjiujiu/rnux)

```
npm install react-native-reanimated // 有额外配置
npm install react-native-modal
npm install @react-native-vector-icons/icomoon
npm install react-native-gesture-handler // 有额外容器
npm install rnux
```
> 添加字体说明
> ```
> # ios/YourApp/Info.plist
> <key>UIAppFonts</key>
> <array>
> <string>MicasIcon.ttf</string>
> </array>
> ```



## 全局样式

#### 字体大小
- h1: 20
- h2: 18
- h3: 16
- h4: 14
- h5: 12
- h6: 10

#### 字体粗细
- light: 300
- regular: 400
- medium: 500
- semiBold: 600
- bold: 700

#### 颜色
- white: '#FFFFFF',
- black: '#000000',
- primaryLight: '#E7CDBB',
- primary: '#9E6733',
- errorLight: '#D63D39',
- error: '#ED4432',
- warningLight: '#F5BF55',
- warning: '#FF8742',
- successLight: '#6FCABA',
- success: '#35AD1B',
- gray900: '#111111',
- gray800: '#333333',
- gray600: '#666666',
- gray400: '#999999',
- gray300: '#CECECE',
- gray200: '#E7E7E7',
- gray100: '#F7F7F7',
- gray50: '#FAFAFA',


## Text 文本组件

| 属性            | 描述        | 值                                                                          | 类型     | 默认值     |
|---------------|-----------|----------------------------------------------------------------------------|--------|---------|
| size          | 字体大小      | h1 / h2 / h3 / h4 / h5 / h6                                                | 字符串    | h5      |
| color         | 字体颜色      | 颜色key                                                                      | 字符串    | black   |
| weight        | 字体粗细      | light / regular / medium / semiBold / bold                                 | 字符串    | regular |
| align         | 对齐方式      | left / center / right                                                      | 字符串    | left    |
| lineHeight    | 行高        | 12 / '1.2' / '+4' <br/>(数组=倍数, 字符串=固定值 +字符串=1倍+偏移量)                        | 字符串/数字 | 1.2倍    |
| decoration    | 下换线 / 删除线 | unset / underline / strikeThrough   <br/>默认有1px下边距,为对齐1px下换线, 不需要请使用 unset | 字符串    | 无       |
| isTruncated   | 超出省略      | true / false                                                               | 布尔值    | false   |
| numberOfLines | 最大行数      |                                                                            | 整数     | 无       |
> theme.text 中可自定义 size


## Spinner 旋转加载组件

| 属性       | 描述   | 值                      | 类型  | 默认值      |
|----------|------|------------------------|-----|----------|
| size     | 大小   | small / medium / large | 字符串 | 'medium' |
| color    | 圈圈颜色 | 颜色key                  | 字符串 | black    |
| duration | 一圈时间 | 800                    | 整数  | 800      |
> theme.activity 中可自定义 size 与 borderWidth

## Loading 加载组件
### 继承自 Spinner, 支持Spinner组件所有属性

| 属性           | 描述                  | 值            | 类型  | 默认值   |
|--------------|---------------------|--------------|-----|-------|
| cover        | 撑满父容器               | true / false | 布尔值 | false |
| fullscreen   | 全屏                  | true / false | 布尔值 | false |
| modalVisible | 模态框可见<br/>兼容模态框关闭动画 | true / false | 布尔值 | true  |
