import { createBrowserRouter } from 'react-router-dom';

import BaseLayout from '@/layouts';
import RootLayout from '@/pages';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: BaseLayout // 布局组件可以定制化
      }
    ]
  }
]);

export default routes;
