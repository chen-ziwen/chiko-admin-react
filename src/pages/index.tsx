import BaseLayout from '@/layouts';
import GuardLayout from '@/pages/guard-layout';

// 应用布局包含应用路由守卫和基础布局
const AppLayout = () => {
  return (
    <GuardLayout>
      <BaseLayout />
    </GuardLayout>
  );
};

export default AppLayout;
