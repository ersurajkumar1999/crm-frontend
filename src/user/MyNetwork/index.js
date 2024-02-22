import React, { useEffect, useState } from 'react';

import {
    Grid, Card, CardContent, CardHeader, Avatar, Typography, Button, IconButton, CardActions
} from "../../librarys/MUILibrary";

import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddIcon from '@mui/icons-material/Add';
import ConnectionInformation from './components/ConnectionInformation';
import { getUserList } from '../../services/CommonService';
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

const MyNetwork = () => {
    const [users, setUsers] = useState([]);

    const [state, setState] = useState({
        loading: true,
        data: [],
        page: 1,
        pageSize: 10,
    });
    
    useEffect(() => {
        const userSearching = async () => {
            // setIsLoading(true)
            try {
                const { data } = await getUserList({ page: state.page, pageSize: state.pageSize });
                console.log("data==>", data.data);
                setUsers(data)
            } catch (error) {
                console.log("error==>", error);
            }
            // setIsLoading(false)
        }
        userSearching();
    }, [state.page])
    
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <ConnectionInformation setState={setState}/>
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    <Grid container spacing={3}>
                        {
                            users.length > 0 && users.map((user) => (
                                <Grid key={user._id} item xs={12} sm={6} md={4}>
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
                                                <Typography variant="h6" component="h6" >
                                                    {user.name}
                                                </Typography>
                                                <Typography variant="body1">
                                                    Lorem ipsum dolor sit amet,
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" sx={{ width: '50%' }} variant="contained"><PersonAddIcon /> Connect</Button>
                                                <Button size="small" sx={{ width: '50%' }} variant="outlined" ><AddIcon /> Connect</Button>
                                            </CardActions>
                                        </StyledAvatarContainer>
                                    </Card>
                                </Grid>
                            ))
                        }

                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}
export default MyNetwork;