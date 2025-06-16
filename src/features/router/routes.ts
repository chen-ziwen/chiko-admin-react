import { createBrowserRouter } from 'react-router-dom';

import { Home } from '@/pages';

const routes = createBrowserRouter([{ Component: Home, path: '/' }]);

export default routes;
