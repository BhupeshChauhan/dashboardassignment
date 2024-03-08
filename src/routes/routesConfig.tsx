/* eslint-disable react-refresh/only-export-components */

import { LinearProgress } from '@mui/material';
import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const NotFound = React.lazy(() => import('../pages/NotFound'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Layout = React.lazy(() => import('../layout'));
const UsersList = React.lazy(() => import('../pages/users/List'));
const UserAuth = React.lazy(() => import('../pages/auth'));

const routes = [
  {
    // parent route component
    element: (
      <Suspense fallback={<LinearProgress />}>
        <Layout type='mini' />
      </Suspense>
    ),
    errorElement: <Navigate to='/404' />,
    // child route components
    children: [{ path: '/', element: <UserAuth type='sign-in' /> }],
  },
  {
    // parent route component
    element: (
      <Suspense fallback={<LinearProgress />}>
        <Layout type='main' />
      </Suspense>
    ),
    errorElement: <Navigate to='/404' />,
    // child route components
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/users/list', element: <UsersList /> },
    ],
  },
  {
    path: '/404',
    element: (
      <Suspense fallback={<LinearProgress color='inherit' />}>
        <NotFound />
      </Suspense>
    ),
  },
];

export default routes;
