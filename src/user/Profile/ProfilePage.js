// import CoverPhoto from "./components/CoverPhoto";
// import ProfileInformation from "./components/ProfileInformation";

// const ProfilePage = () => {
//     return (
//         <>
//             <CoverPhoto />
//             <ProfileInformation />
//         </>
//     )
// }
// export default ProfilePage;

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Avatar, Card, CardMedia, CardContent, Typography, Grid, Button, IconButton, Tabs, Tab, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import CoverPhoto from './components/CoverPhoto';
import ProfileInformation from './components/ProfileInformation';
import ProfileLeftSidebarInformation from './components/ProfileLeftSidebarInformation';
import ProfileSidebarInformation from './components/ProfileRightSidebarInformation';
// import AboutSection from './AboutSection';

// import { IconLayoutNavbarExpand, IconInfoCircle } from '@tabler/icons';

const StyledCoverPhoto = styled(CardMedia)({
    height: 200,
    '&:hover': {
        opacity: 0.8,
    },
    '@media (min-width: 600px)': {
        height: 300,
    },
});

const StyledAvatar = styled(Avatar)({
    width: 100,
    height: 100,
    border: '2px solid #fff',
    marginTop: -50,
    marginLeft: 10,
});

const StyledCardContent = styled(CardContent)({
    marginTop: 20,
});

const ProfilePage = () => {
    const [coverPhoto, setCoverPhoto] = useState('https://via.placeholder.com/1500x500');
    const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/150');
    console.log("setCoverPhoto", setCoverPhoto, setProfilePicture);
    const handleCoverPhotoChange = () => {
        // Logic to handle cover photo upload
        console.log("Upload cover photo");
    };

    const handleProfilePictureChange = () => {
        // Logic to handle profile picture upload
        console.log("Upload profile picture");
    };
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
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
