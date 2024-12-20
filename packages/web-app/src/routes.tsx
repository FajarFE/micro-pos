import { DashboardPage } from '@pages/dashboard';
import { RouteObject } from 'react-router';
import LoginPage from '@pages/login';

export default [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    children: [],
  },
] as RouteObject[];
