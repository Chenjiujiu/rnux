## Chip

| 属性              | 描述                                        | 类型                                 | 默认值       |
|-----------------|-------------------------------------------|------------------------------------|-----------|
| id              | ID                                        | string / number                    | -         |
| label           | 内容                                        | string                             | -         |
| borderWidth     | 边框大小                                      | number                             | 1         |
| showClose       | 显示关闭                                      | boolean                            | false     |
| color           | 颜色 `black`/`primaryLight`/`#667788`/...   | [colors key](./theme.md)  / string | `blank`   |
| borderColor     | 边框颜色 `black`/`primaryLight`/`#667788`/... | [colors key](./theme.md)  / string | `blank`   |
| variant         | 变体`primary`                               | string                             | `primary` |
| size            | 大小`md`/`lg`                               | string                             | `md`      |
| height          | 高度                                        | number                             | -`        |
| disabled        | 禁用                                        | boolean                            | false     |
| selected        | 选中(受控状态)                                  | Object                             | -         |
| defaultSelected | 默认选中(非受控状态)                               | Object                             | -         |
| onPress         | 同 RN Pressable onPress                    | (id: string / number ): void       | -         |
| style           | 演示                                        | Style                              | -         |

> theme.button 中可自定义variant / size [theme](./theme.md)
