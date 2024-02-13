import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Avatar, Card, CardMedia, CardContent, Typography, Grid, Button, IconButton, Tabs, Tab } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

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
        <Grid item xs={12} sm={10}>
          <Card>
            <StyledCoverPhoto
              image={coverPhoto}
              title="Cover photo"
            />
            <Grid container justifyContent="flex-end">
              <Button variant="outlined">
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
              </Button>

            </Grid>
            <StyledCardContent>
              <Grid container alignItems="center">
                <StyledAvatar
                  alt="Profile Picture"
                  src={profilePicture}
                />
                <Grid item>
                  <Typography variant="h4" gutterBottom>
                    John Doe
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Software Engineer at XYZ Company
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum felis quis metus dictum, at accumsan dui aliquam. Maecenas nec lacinia lectus. Integer hendrerit mi et tortor fringilla, nec consequat velit eleifend. Quisque posuere lobortis dolor, eget ultricies libero consequat nec.
              </Typography>
            </StyledCardContent>
            <Grid container justifyContent="flex-end">
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
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <Typography variant="h6" gutterBottom>
              John Doe
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Software Engineer at XYZ Company
            </Typography>
            <Button variant="contained" color="primary" fullWidth>
              Edit Profile
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <StyledCardContent>
              <Tabs value={selectedTab} onChange={handleTabChange} aria-label="profile tabs" variant="fullWidth">
                <Tab label="Posts" />
                <Tab label="About" />
                <Tab label="Posts" />
                <Tab label="About" />
                
                {/* Add more tabs here for additional sections */}
              </Tabs>
              {selectedTab === 0 && (
                <Typography variant="body1">
                  This is the Posts section.
                </Typography>
              )}
              {selectedTab === 1 && (
                <Typography variant="body1">
                  This is the About section.
                </Typography>
              )}
              {selectedTab === 2 && (
                <Typography variant="body1">
                  This is the Posts section.
                </Typography>
              )}
              {selectedTab === 3 && (
                <Typography variant="body1">
                  This is the About section.
                </Typography>
              )}
              {/* Add more sections corresponding to each tab */}
            </StyledCardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfilePage;
