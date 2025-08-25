## Radio 单选框

| 属性             | 描述                                      | 类型                                  | 默认值     |
|----------------|-----------------------------------------|-------------------------------------|---------|
| checked        | 选中 (受控)                                 | boolean                             | -       |
| defaultChecked | 默认选中  (非受控)                             | boolean                             | -       |
| size           | 大小                                      | number                              | 16      |
| disabled       | 禁用                                      | boolean                             | false   |
| color          | 颜色 `black`/`primaryLight`/`#667788`/... | [colors key](./theme.md)  / string  | `black` |
| vertical       | label垂直排列                               | boolean                             | false   |
| hitSlop        | 触摸区域                                    | number / {top, left, bottom, right} | -`      |
| onChange       | 切换函数                                    | (checked: boolean): void            | -       |
| label          | 内容                                      | RN Node / string                    | -       |
| labelStyle     | 自定义label样式                              | Style                               | -       |

