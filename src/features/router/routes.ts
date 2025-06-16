import { createBrowserRouter } from 'react-router-dom';

import BaseLayout from '@/layouts';
import RootLayout from '@/pages';
import DashBoard from '@/pages/DashBoard';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout, // 根布局处理路由守卫、页面标题等
    children: [
      {
        path: '', // 空路径表示默认子路由
        Component: BaseLayout, // 基础布局，包含侧边栏、头部、标签页等
        children: [
          {
            path: '/dashboard',
            Component: DashBoard
          }
        ]
      }
    ]
  }
]);

export default routes;
