import { LayoutFooter } from '@/layouts/footer';

const BasicLayout = () => {
  return (
    <div className="h-screen bg-amber color-blue">
      我是基础的布局组件
      <Outlet />
      <LayoutFooter />
    </div>
  );
};

export default BasicLayout;
