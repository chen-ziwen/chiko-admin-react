import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/pages';
import Home from '@/pages/home';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        path: 'home',
        Component: Home
      }
    ]
  }
]);

export default routes;
