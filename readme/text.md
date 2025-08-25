## Text 文本组件

| 属性            | 描述                                                                                | 类型                                 | 默认值       |
|---------------|-----------------------------------------------------------------------------------|------------------------------------|-----------|
| size          | 大小 `h1`/`h2`/`h3`/`h4`/`h5`/`h6`                                                  | string                             | `h5`      |
| color         | 颜色 `black`/`primaryLight`/`#667788`/...                                           | [colors key](./theme.md)  / string | `black`   |
| weight        | 粗细 `light`/`regular`/`medium`/`semiBold`/`bold`                                   | [font key](./theme.md)             | `regular` |
| align         | 对齐  `left` / `center` / `right`                                                   | string                             | `left`    |
| lineHeight    | 行高  12 / `'1.2'` / `'+4'` <br/>(数组=倍数, 字符串=固定值 +字符串=1倍+偏移量)                       | string / number                    | `1.2`     |
| decoration    | 装饰 `unset` / `underline` / `strikeThrough` <br/>默认有1px下边距,为对齐1px下换线, 不需要请使用 unset | string                             | -         |
| isTruncated   | 超出省略                                                                              | boolean                            | false     |
| numberOfLines | 最大行数                                                                              | number                             | -         |

> theme.text 中可自定义size, [theme](./theme.md)
