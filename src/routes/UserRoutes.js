import React from 'react';
import { Navigate, } from 'react-router-dom';
import ChatHome from '../user/Chat';
import { Profile } from '../user/Profile';
import Feed from '../user/Feed';
import UserLayout from '../user/layout';
import { AuthContextProvider } from '../contexts/AuthContext';
import ProtectedRoute from './ProtectedRoute';


const UserRoutes = {
  path: '/',
  element: <AuthContextProvider> <UserLayout /></AuthContextProvider>,
  children: [
    { path: '/', element: <ProtectedRoute element={<Profile />} /> },
    { path: '/profile', element: <ProtectedRoute element={<Profile />} /> },
    { path: '/feed', element: <ProtectedRoute element={<Feed />} /> },
    { path: '/chat', element: <ProtectedRoute element={<ChatHome />} /> },
    { path: '*', element: <ProtectedRoute element={<Navigate to="/auth/login" />} /> } // Catch-all route protected
  ]
};


export default UserRoutes;
