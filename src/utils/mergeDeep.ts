/** @format */

// DeepPartial 类型（递归可选）
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// 深度合并函数
function mergeDeep<T>(target: T, source: DeepPartial<T>): T {
  // 如果 source 不是对象，直接返回 target
  if (typeof source !== 'object' || source === null) {
    return target;
  }

  const output = { ...target } as T;

  for (const key in source) {
    if (source[key] === undefined) continue;

    if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
      output[key] = mergeDeep((target as any)[key] ?? {}, source[key] as any);
    } else {
      output[key] = source[key] as any;
    }
  }

  return output;
}

export { mergeDeep, type DeepPartial };
