import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Profile } from "../user/Profile";
import ProfilePage from '../user/Profile/ProfilePage';
import Feed from '../user/Feed';
const ProtectedRoute = ({ element: Element }) => {
    const { user } = useContext(AuthContext);
    // return user ? <ProfilePage /> : <Navigate to="/auth/login" />;
    // return user ? <Profile /> : <Navigate to="/auth/login" />;
    return user ? <Feed /> : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
