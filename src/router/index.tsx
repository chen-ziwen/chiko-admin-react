import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/pages';
import Home from '@/pages/home';

// 先这么写让内容先展示 后续会补上权限路由逻辑
const routes = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        index: true,
        element: <Navigate to={import.meta.env.VITE_ROUTE_HOME} />
      },
      {
        path: 'home',
        Component: Home
      }
    ]
  }
]);

export default routes;
