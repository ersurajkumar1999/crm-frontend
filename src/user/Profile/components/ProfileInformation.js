import { styled } from "../../../librarys/MUIStyles";
import { CardContent, Grid, Typography, Avatar } from "../../../librarys/MUILibrary";

const ProfileInformation = ({userProfile}) => {
    const StyledCardContent = styled(CardContent)({
        marginTop: 20,
    });

    const StyledAvatar = styled(Avatar)({
        width: 100,
        height: 100,
        border: '2px solid #fff',
        marginTop: -50,
        marginLeft: 10,
    });
    const profilePicture = "https://via.placeholder.com/150";
    return (
        <>
            <StyledCardContent>
                <Grid container alignItems="center">
                    <StyledAvatar
                        alt="Profile Picture"
                        src={profilePicture}
                    />
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            {userProfile.username}
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
        </>
    )
}
export default ProfileInformation;