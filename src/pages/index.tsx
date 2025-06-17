import BaseLayout from '@/layouts';
import RootLayout from '@/pages/root-layout';

const AppLayout = () => {
  return (
    <RootLayout>
      <BaseLayout />
    </RootLayout>
  );
};

export default AppLayout;
