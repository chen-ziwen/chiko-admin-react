import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/pages';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: []
  }
]);

export default routes;
