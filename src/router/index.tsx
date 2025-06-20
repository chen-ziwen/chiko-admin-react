import { Navigate, createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/pages';
import Home from '@/pages/home';

// 先这么写让内容先展示 后续会补上权限路由逻辑
const routes = createBrowserRouter([
  {
    path: '/login',
    handle: {
      title: '登录',
      constant: true
    }
  },
  {
    path: '/',
    Component: AppLayout,
    handle: {
      title: '首页'
    },
    children: [
      {
        index: true,
        element: <Navigate to={import.meta.env.VITE_ROUTE_HOME} />
      },
      {
        path: 'home',
        Component: Home,
        handle: {
          title: '首页',
          fixedIndexInTab: 0,
          keepAlive: true
        }
      }
    ]
  }
]);

export default routes;
