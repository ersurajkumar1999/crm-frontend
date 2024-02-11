import UserLayout from '../user/layout/UserLayout';
import Dashboard from "../user/dashboard";


const UserAuthenticationRoutes = {
  path: '/',
  element: <UserLayout />,
  children: [
    {
      path: '/',
      element: <Dashboard/>
    },
  ]
};

export default UserAuthenticationRoutes;
