import React, { useContext } from 'react'
import ProfilePage from './components/ProfilePage'
import { AuthContext } from '../../contexts/AuthContext';

export const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log("useruseruseruseruser=>", user);
    return (
        <>
            <ProfilePage />
        </>
    )
}