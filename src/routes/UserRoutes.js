// import { Dashboard } from '../user/dashboard';
// import Dashboard from '../user/Dashboard';
import UserLayout from '../user/layout';
import { Profile } from '../user/Profile';

const UserRoutes = {
  path: '/',
  element: <UserLayout />,
  children: [
    {
      path: '/',
      element: <Profile />
    },
    {
      path: '/profile',
      element: <Profile />
    },
  ]
};

export default UserRoutes;
