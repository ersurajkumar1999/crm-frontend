// import { Dashboard } from '../user/dashboard';
// import Dashboard from '../user/Dashboard';
import ChatHome from '../user/Chat';
import UserLayout from '../user/layout';
import { Profile } from '../user/Profile';

const UserRoutes = {
  path: '/',
  element: <UserLayout />,
  children: [
    { path: '/', element: <Profile />},
    { path: '/profile', element: <Profile />},
    { path: '/chat', element: <ChatHome />}
  ]
};

export default UserRoutes;
