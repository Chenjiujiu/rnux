/** @format */

import React from 'react';
import { ScrollYProvider } from './ScrollYProvider';

// Y轴滚动位置的高阶组件
const withScrollY = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => {
  const Wrapper: React.FC<P> = props => {
    return (
      <ScrollYProvider>
        <Component {...props} />
      </ScrollYProvider>
    );
  };
  // 方便调试和识别组件
  Wrapper.displayName = `withScrollY(${Component.displayName || Component.name || 'Component'})`;
  return Wrapper;
};

export { withScrollY };
