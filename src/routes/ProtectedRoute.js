import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const { user } = useContext(AuthContext);

    // If user is not authenticated, redirect to login page
    if (!user) {
        return <Navigate to="/auth/login" />;
    }

    // If user is authenticated, render the element
    return <Route {...rest} element={<Element />} />;
};

export default ProtectedRoute;
