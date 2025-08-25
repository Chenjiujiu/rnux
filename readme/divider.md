## Divider 分割线

| 属性           | 描述                     | 类型                                     | 默认值                        |
|--------------|------------------------|----------------------------------------|----------------------------|
| variant      | 类型                     | `primary`/`secondary`/`outline`/`text` | -                          |
| size         | 大小                     | `sm`/`md`/`lg`                         | `md`                       |
| disabled     | 禁用                     | boolean                                | false                      |
| loading      | 加载中                    | boolean                                | false                      |
| weight       | 宽度                     | number                                 | 30                         |
| height       | 高度                     | number                                 | 80                         |
| borderRadius | 圆角                     | number                                 | 0                          |
| hitSlop      | 触摸区域                   | number                                 | {top, left, bottom, right} | -` |
| style        | 自定义样式                  | Object                                 | -                          |
| labelStyle   | 自定义label样式             | Object                                 | -                          |
| iconStyle    | 自定义icon样式              | Object                                 | -                          |
| onPress      | 同 RN Pressable onPress | (e: Object): void                      | -                          |

> theme.button 中可自定义variant / sizeStyle / borderRadius, [theme](./theme.md)
