import { BasicLayout } from '@/layouts';
import RootLayout from '@/pages/root';

const AppLayout = () => {
  return (
    <RootLayout>
      <BasicLayout />
    </RootLayout>
  );
};

export default AppLayout;
