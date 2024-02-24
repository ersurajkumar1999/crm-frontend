import React from 'react';
import ChatHome from '../user/Chat';
import Feed from '../user/Feed';
import UserLayout from '../user/layout';
import { AuthContextProvider } from '../contexts/AuthContext';
import ProfilePage from '../user/Profile/ProfilePage';
import MyNetwork from '../user/MyNetwork';
import Logout from '../user/Logout';
import Page404 from '../user/error/Page404';
import MyConnections from '../user/MyConnections';
import ManagerInvitation from '../user/ManagerInvitation';


const UserRoutes = {
  path: '/',
  element: <AuthContextProvider> <UserLayout /></AuthContextProvider>,
  children: [
    { path: '/', element: <Feed /> },
    { path: 'my-network', element: <MyNetwork /> },
    { path: 'feed', element: <Feed /> },
    { path: 'chat', element: <ChatHome /> },
    { path: 'profile', element: <ProfilePage /> },
    { path: 'logout', element: <Logout /> },
    { path: 'connections', element: <MyConnections /> },
    { path: 'invitation-manager', element: <ManagerInvitation /> },
    { path: '*', element: <Page404 /> },
  ]
};


export default UserRoutes;
