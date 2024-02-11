import UserAuthLayout from '../user/layout/UserAuthLayout';
import UserLogin from '../user/auth/UserLogin';
import UserSignup from '../user/auth/UserSignup';
import UserForgotPassword from '../user/auth/UserForgotPassword';


const UserAuthenticationRoutes = {
  path: '/',
  element: <UserAuthLayout />,
  children: [
    {
      path: '/',
      element: <UserLogin />
    },
    {
      path: '/auth',
      element: <UserLogin />
    },
    {
      path: '/auth/login',
      element: <UserLogin />
    },
    {
      path: '/auth/signup',
      element: <UserSignup/>
    },
    {
      path: '/auth/forgot-password',
      element: <UserForgotPassword/>
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
