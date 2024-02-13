// import { Dashboard } from '../user/dashboard';
// import Dashboard from '../user/Dashboard';
import ChatHome from '../user/Chat';
import { Profile } from '../user/Profile';
import Feed from '../user/Feed';
import UserLayout from '../user/layout';
import { AuthContext, AuthContextProvider } from '../contexts/AuthContext';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element }) => {
  const { user } = useContext(AuthContext);
  console.log("ProtectedRoute user", user);
  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  // If user is logged in, render the element
  return <Element />;
};

const UserRoutes = {
  path: '/',
  element: <AuthContextProvider> <UserLayout /></AuthContextProvider>,
  children: [
    { path: '/', element: <Profile /> },// Profile route protected
    { path: '/profile', element: <ProtectedRoute element={<Profile />} /> }, // Profile route protected
    { path: '/feed', element: <ProtectedRoute element={<Feed />} /> }, // Feed route protected
    { path: '/chat', element: <ProtectedRoute element={<ChatHome />} /> }, // Chat route protected
    { path: '*', element: <ProtectedRoute element={<Navigate to="/auth/login" />} /> } // Catch-all route protected
  ]
};


export default UserRoutes;
