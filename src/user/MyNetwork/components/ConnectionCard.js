import React, { useContext } from 'react'
import {
    Grid, Card, CardContent, CardHeader, Avatar, Typography, Button, IconButton,
    CardActions,
} from "../../../librarys/MUILibrary";
import { CloseIcon, PersonAddIcon, AddIcon, AccessAlarmIcon } from "../../../librarys/MUIIcons";
import { styled } from '../../../librarys/MUIStyles';
import { AuthContext } from '../../../contexts/AuthContext';

const StyledAvatarContainer = styled('div')({
    width: '100%',
    textAlign: 'center',
    margin: 'auto',
});

const StyledCardUp = styled('div')({
    height: '70px',
    backgroundImage: "url('https://ik.imagekit.io/hydlcbl5qlg/public/misc/28iK9OtJk9TlPTbYUyohzvplQminYXV8ZjfrLIiw.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
});
const ConnectionCard = ({ users, handleUserConnection }) => {
    const { user } = useContext(AuthContext);
    const userId = user.userInfo.userId;
    // console.log("users==>11111", userId, users);
    const checkFriendsRequest = (user) => {
        const requestSent = user.friendRequestsReceived.some((friendRequest) => {
            return friendRequest.requester === userId;
        });
        return requestSent;
    }
    return (
        <>
            {
                users.length > 0 && users.map((user, index) => (
                    <Grid key={users._id} item xs={12} sm={6} md={4}>
                        <Card>
                            <StyledAvatarContainer>
                                <StyledCardUp />
                                <CardHeader
                                    action={
                                        <IconButton sx={{ marginTop: '-120px', backgroundColor: '#623e09', color: 'white' }}>
                                            <CloseIcon color={"red"} />
                                        </IconButton>
                                    }
                                />
                                <Avatar sx={{ width: 150, height: 150, margin: 'auto', border: '2px solid #fff', marginTop: '-100px', zIndex: '11' }}>
                                    <Avatar sx={{ height: '100%', width: '100%' }} src="https://avatars.githubusercontent.com/u/146355358?v=4" alt="woman avatar" />
                                </Avatar>
                                <CardContent>
                                    <Typography variant="h5" component="h5" >
                                        {user.username}
                                    </Typography>
                                    <Typography variant="body1">
                                        {index}:- Lorem ipsum dolor sit amet,
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {
                                        checkFriendsRequest(user) ? (
                                            <>
                                                <Button sx={{ width: '50%', backgroundColor: '#a4a4a4' }} variant="contained" onClick={() => handleUserConnection(user._id, index)} startIcon={<AccessAlarmIcon />}> Pending</Button>
                                                <Button size="small" sx={{ width: '50%' }} variant="outlined" ><AddIcon /> Connect</Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button size="small" sx={{ width: '50%' }} variant="contained" onClick={() => handleUserConnection(user._id, index)}><PersonAddIcon /> Connect</Button>
                                                <Button size="small" sx={{ width: '50%' }} variant="outlined" ><AddIcon /> Connect</Button>
                                            </>
                                        )
                                    }


                                </CardActions>
                            </StyledAvatarContainer>
                        </Card>
                    </Grid>
                ))
            }
        </>
    )
}

export default ConnectionCard