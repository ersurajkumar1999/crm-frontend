import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
    Grid, Card, CardContent, CardHeader, Avatar, Typography, Button, IconButton,
    CardActions, Stack, Skeleton
} from "../../librarys/MUILibrary";
import { CloseIcon, PersonAddIcon, AddIcon } from "../../librarys/MUIIcons";
import { styled } from '../../librarys/MUIStyles';

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

    const [state, setState] = useState({
        users: [],
        loading: true,
        page: 1,
        pageSize: 15,
    });
    const { users, loading, page, pageSize } = state;
    const observer = useRef(null);

    useEffect(() => {
        const userSearching = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true
            }));

            try {
                const { data } = await getUserList({ page, pageSize });
                setState(prevState => ({
                    ...prevState,
                    users: [...prevState.users, ...data.data],
                    loading: false
                }));
            } catch (error) {
                console.log("error==>", error);
                setState(prevState => ({
                    ...prevState,
                    loading: false
                }));
            }
        };

        userSearching();
    }, [page, pageSize]);
    const lastUserElementRef = useCallback((node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setState((prevState) => ({
                    ...prevState,
                    page: prevState.page + 1
                }));
            }
        });
        if (node) observer.current.observe(node);
    }, [loading]);
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                <ConnectionInformation setState={setState} />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
                <Grid container spacing={3}>
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
                                            <Button size="small" sx={{ width: '50%' }} variant="contained"><PersonAddIcon /> Connect</Button>
                                            <Button size="small" sx={{ width: '50%' }} variant="outlined" ><AddIcon /> Connect</Button>
                                        </CardActions>
                                    </StyledAvatarContainer>
                                </Card>
                            </Grid>
                        ))
                    }
                    <Grid item xs={12} ref={lastUserElementRef}>
                        {
                            loading && (
                                <Stack spacing={1}>
                                    <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
                                    <Skeleton variant="circular" width={70} height={70} />
                                    <Skeleton variant="rectangular" width="100%" height={60} />
                                    <Skeleton variant="rounded" width="100%" height={60} />
                                </Stack>
                            )
                        }
                    </Grid>

                </Grid>

            </Grid>
        </Grid>
    )
}
export default MyNetwork;