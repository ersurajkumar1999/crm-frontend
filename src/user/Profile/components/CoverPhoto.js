import { styled } from "../../../librarys/MUIStyles";
import { PhotoCamera } from "../../../librarys/MUIIcons";
import { CardMedia, Grid, Button, IconButton } from "../../../librarys/MUILibrary";
const CoverPhoto = () => {

    const StyledCoverPhoto = styled(CardMedia)({
        height: 200,
        '&:hover': {
            opacity: 0.8,
        },
        '@media (min-width: 600px)': {
            height: 300,
        },
    });
    const coverPhoto = "https://via.placeholder.com/1500x500";
    return (
        <>
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
                        // onChange={handleProfilePictureChange}
                        />
                        <IconButton color="primary" aria-label="upload profile picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                        Add Cover Photo
                    </label>
                </Button>

            </Grid>
        </>
    )
}
export default CoverPhoto;