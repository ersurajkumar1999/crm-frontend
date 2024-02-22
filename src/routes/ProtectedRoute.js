import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import MyNetwork from '../user/MyNetwork';
// import Feed from '../user/Feed';
const ProtectedRoute = ({ element: Element }) => {
    const { user } = useContext(AuthContext);
    return user ? <MyNetwork /> : <Navigate to="/auth/login" />;
    // return user ? <Feed /> : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
