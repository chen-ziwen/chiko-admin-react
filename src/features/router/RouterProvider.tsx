import { RouterProvider as Provider } from 'react-router-dom';

import routes from '@/router';

export const RouterProvider = () => {
  return <Provider router={routes} />;
};
