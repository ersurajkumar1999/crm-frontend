import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Profile } from '../user/Profile';

const ProtectedRoute = ({ element: Element }) => {
    const { user } = useContext(AuthContext);
    return user ? <Profile /> : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
