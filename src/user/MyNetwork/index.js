import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';

import {
    Grid, Stack, Skeleton, Card, Typography, CardHeader, Button
} from "../../librarys/MUILibrary";

import ConnectionInformation from '../../components/common/ConnectionInformation';
import { getUserList } from '../../services/CommonService';
import ConnectionCard from './components/ConnectionCard';
import { sendRequest } from '../../services/ConnectionService';
import { AuthContext } from '../../contexts/AuthContext';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';


const MyNetwork = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const loginUserId = user.userInfo.userId;
    const [state, setState] = useState({
        users: [],
        data: [],
        loading: true,
        page: 1,
        pageSize: 15,
    });
    const { users, data, loading, page, pageSize } = state;
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
                    data: data.data,
                    users: [...prevState.users, ...data.data],
                    loading: false
                }));
            } catch (error) {
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
            if (entries[0].isIntersecting && data.length > 0) {
                setState((prevState) => ({
                    ...prevState,
                    page: prevState.page + 1
                }));
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, data.length]);


    const handleUserConnection = async (userId, index) => {
        try {
            const userInfo = {
                _id: null,
                requester: loginUserId,
                recipient: userId,
                status: "pending",
                createdAt: new Date(),
                updatedAt: new Date(),
                __v: 0
            }
            const response = await sendRequest({ receiverId: userId });
            if (response.status) {
                setState(prevState => {
                    // Clone the array of users
                    const updatedUsers = [...prevState.users];

                    // Clone the user object to update
                    const updatedUser = { ...updatedUsers[index] };

                    // Update friendRequestsReceived with the new request
                    updatedUser.friendRequestsReceived = [
                        ...updatedUser.friendRequestsReceived,
                        userInfo
                    ];

                    // Update the user object in the array
                    updatedUsers[index] = updatedUser;

                    // Return updated state
                    return {
                        ...prevState,
                        users: updatedUsers
                    };
                });
            }
        } catch (error) {
            console.log("error==>", error);
        }
        console.log("handleUserConnection", userId);
    }
    // constant
    const headerSX = {
        '& .MuiCardHeader-action': { mr: 0 }
    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                <ConnectionInformation setState={setState} />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={12}>
                        <Card>
                            <CardHeader
                                sx={headerSX}
                                title={<Typography variant="h6" component="h6">Invitations</Typography>}
                                action={<Button size="small" variant="outlined" startIcon={<SettingsIcon />} onClick={() => navigate('/invitation-manager')}> Manage</Button>} // include the header action here
                            />
                        </Card>
                    </Grid>
                    <ConnectionCard users={users} handleUserConnection={handleUserConnection} />
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