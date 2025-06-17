const BaseLayout = () => {
  return (
    <div className="h-screen bg-amber color-blue">
      我是基础的布局组件
      <Outlet />
    </div>
  );
};

export default BaseLayout;
