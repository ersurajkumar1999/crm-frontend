import React from 'react';
import { Card, Grid} from '@mui/material';

import CoverPhoto from './components/CoverPhoto';
import ProfileInformation from './components/ProfileInformation';
import ProfileLeftSidebarInformation from './components/ProfileLeftSidebarInformation';
import ProfileSidebarInformation from './components/ProfileRightSidebarInformation';

const ProfilePage = () => {
    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={12}>
                    <Card>
                        <CoverPhoto />
                        <ProfileInformation />

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
