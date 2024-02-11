import UserAuthLayout from '../user/layout/UserAuthLayout';
import UserLogin from '../user/auth/UserLogin';


const UserAuthenticationRoutes = {
  path: '/',
  element: <UserAuthLayout />,
  children: [
    {
      path: '/login',
      element: <UserLogin />
    },
    {
      path: '/register',
      element: <UserLogin />
    },
    {
      path: '/verify-account',
      element: <UserLogin />
    },
    {
      path: '/verify-email/:email/:token',
      element: <UserLogin />
    },
    {
      path: '/forgot-password',
      element: <UserLogin />
    },
    {
      path: '/change-password/:email/:token',
      element: <UserLogin />
    }
  ]
};

export default UserAuthenticationRoutes;
