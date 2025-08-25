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
- [theme](./readme/theme.md)

## 组件列表

### 基础组件
- [Text 文本](./readme/text.md)
- [Badge 徽标](./readme/badge.md)
- [Button 按钮](./readme/button.md)
- [Spinner 旋转加载](./readme/spinner.md)
- [Input 输入框](./readme/input.md)
- [Checkbox 复选框](./readme/checkbox.md)
- [Radio 单选框](./readme/radio.md)
- [Divider 分割线](./readme/divider.md)
- [Chip 标签](./readme/chip.md)
- [Icon 图标](./readme/icon.md)
- [rangeSlider 滑动数据](./readme/rangeSlider.md)

### 扩展组件
- [Loading 加载](./readme/loading.md)
- [ChipGroup 标签组](./readme/chipGroup.md)
- [Stepper 步进器](./readme/stepper.md)
