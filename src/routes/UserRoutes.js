// import { Dashboard } from '../user/dashboard';
// import Dashboard from '../user/Dashboard';
import ChatHome from '../user/Chat';
import { Profile } from '../user/Profile';
import Feed from '../user/Feed';
import UserLayout from '../user/layout';

const UserRoutes = {
  path: '/',
  element: <UserLayout />,
  children: [
    { path: '/', element: <Profile />},
    { path: '/profile', element: <Profile />},
    { path: '/feed', element: <Feed />},
    { path: '/chat', element: <ChatHome />}
  ]
};

export default UserRoutes;
