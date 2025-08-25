## Button 按钮

| 属性           | 描述                                        | 类型                                  | 默认值   |
|--------------|-------------------------------------------|-------------------------------------|-------|
| variant      | 类型 `primary`/`secondary`/`outline`/`text` | string                              | -     |
| size         | 大小 `sm`/`md`/`lg`                         | string                              | `md`  |
| disabled     | 禁用                                        | boolean                             | false |
| loading      | 加载中                                       | boolean                             | false |
| weight       | 宽度                                        | number                              | 30    |
| height       | 高度                                        | number                              | 80    |
| borderRadius | 圆角                                        | number                              | 0     |
| hitSlop      | 触摸区域                                      | number / {top, left, bottom, right} | -     |
| style        | 自定义样式                                     | Style                               | -     |
| labelStyle   | 自定义label样式                                | Style                               | -     |
| iconStyle    | 自定义icon样式                                 | Style                               | -     |
| onPress      | 同 RN Pressable onPress                    | (e: Object): void                   | -     |
| label        | 内容                                        | RN Node / string                    | -     |

> theme.button 中可自定义variant / sizeStyle / borderRadius, [theme](./theme.md)
