import { LayoutFooter, LayoutHeader } from '@/layouts/modules';

const BasicLayout = () => {
  return (
    <div className="h-screen bg-amber color-blue">
      我是基础的布局组件
      <Outlet />
      <LayoutHeader />
      <LayoutFooter />
    </div>
  );
};

export default BasicLayout;
