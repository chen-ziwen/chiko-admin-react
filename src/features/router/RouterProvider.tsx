import { RouterProvider as Provider } from 'react-router-dom';

import routes from './routes';

export const RouterProvider = () => {
  return <Provider router={routes} />;
};
