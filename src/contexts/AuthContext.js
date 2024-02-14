// contexts/AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    // Initialize the state with user data if available in localStorage
    const storedUserData = JSON.parse(localStorage.getItem('crm'));
    const [user, setUser] = useState(storedUserData || null);

    const login = (userData) => {
        const loggedInUser = {
            isLoggedIn: true,
            userInfo: {
                userId:userData._id,
                isEmailVerified: userData.isEmailVerified,
                userType: userData.userType,
                profileId:userData.profile
            },
            userToken: userData.token
        };
        localStorage.setItem('crm', JSON.stringify(loggedInUser));
        setUser(loggedInUser);
    };

    const logout = () => {
        localStorage.removeItem('crm');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };