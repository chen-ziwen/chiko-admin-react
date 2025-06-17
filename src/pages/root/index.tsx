import type { PropsWithChildren } from 'react';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  // 这里会进行一些路由守卫操作 还有一些标题进度条操作

  // 如果不符合条件则重定向到登录页 否则渲染子组件
  // if (false) {
  //   return <Navigate to="/login" />;
  // }

  return children;
};

export default RootLayout;
