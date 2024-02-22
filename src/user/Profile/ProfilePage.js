import React, { useContext, useEffect } from 'react';
import { Card, Grid } from '@mui/material';

import CoverPhoto from './components/CoverPhoto';
import ProfileInformation from './components/ProfileInformation';
import ProfileLeftSidebarInformation from './components/ProfileLeftSidebarInformation';
import ProfileSidebarInformation from './components/ProfileRightSidebarInformation';
import { AuthContext } from '../../contexts/AuthContext';
import { getProfile } from '../../services/CommonService';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
const ProfilePage = () => {
    const { userProfile, setProfileData } = useContext(AuthContext);

    useEffect(() => {
        if (!userProfile) {
            const getUserProfile = async () => {
                try {
                    const profile = await getProfile();
                    console.log("profile==>", profile);
                    setProfileData(profile.data.data);
                } catch (error) {
                    console.log("error===>", error);
                }
            }
            getUserProfile();
        }
    }, [userProfile, setProfileData]);


    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={12}>
                    <Card>
                        <CoverPhoto />
                        {
                            userProfile ? (
                                <ProfileInformation userProfile={userProfile} />
                            ) : (
                                <Grid container alignItems="center">
                                    <Stack spacing={1} sx={{ width: '100%' }}>
                                        {/* For variant="text", adjust the height via font-size */}
                                        <Skeleton variant="circular" width={40} height={40} />
                                        <Skeleton variant="rectangular" sx={{ width: '100%' }} height={60} />
                                        <Skeleton variant="rounded" sx={{ width: '100%' }} height={60} />
                                    </Stack>
                                </Grid>
                            )
                        }

                        {/* <Grid container justifyContent="flex-end">
                            <label htmlFor="cover-photo-button">
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="cover-photo-button"
                                    type="file"
                                    onChange={handleCoverPhotoChange}
                                />
                                <IconButton color="primary" aria-label="upload cover photo" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                            <label htmlFor="profile-picture-button">
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="profile-picture-button"
                                    type="file"
                                    onChange={handleProfilePictureChange}
                                />
                                <IconButton color="primary" aria-label="upload profile picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                                Add Cover Photo
                            </label>
                        </Grid> */}
                    </Card>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
                <Grid item xs={12} sm={4}>
                    <ProfileLeftSidebarInformation />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <ProfileSidebarInformation />
                </Grid>
            </Grid>
        </>
    );
};

export default ProfilePage;
