import React, { useContext, useEffect, useState } from 'react'
import ProfilePage from './components/ProfilePage'
import { AuthContext } from '../../contexts/AuthContext';
import { getProfile } from '../../services/CommonService';

export const Profile = () => {
    // const [isLoading, setisLoading] = useState(false);
    const [state, setState] = useState({
        profileData: null,
        isLoading: false,
    })
    const { user } = useContext(AuthContext);
    console.log("useruseruseruseruser=>", user);

    const getProfileData = async () => {
        setState({ ...state, isLoading: true });
        try {
            const userprofile = await getProfile();
            setState({ ...state, profileData: userprofile.data.data, isLoading: false });
        } catch (error) {
            console.log("Something went wrong: ", error);
        }
    }
    console.log("statestatestatestate==>", state);
    useEffect(() => {
        getProfileData();
    }, []);
    return (
        <>
            <ProfilePage />
        </>
    )
}