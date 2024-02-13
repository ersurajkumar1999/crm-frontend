// contexts/AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    // console.log("AuthContextProvider");
    // const data = {
    //     id:'1',
    //     name:'suraj'
    // }
    const [user, setUser] = useState(null);
    console.log("AuthContextProvider  user===>", user);
    const login = (userData) => {
        console.log("userData======>", userData);
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };