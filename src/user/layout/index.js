import { Outlet } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, CssBaseline, Typography } from '@mui/material';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function UserLayout() {


    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Header handleDrawerOpen={handleDrawerOpen} open={open} />

            <Sidebar handleDrawerClose={handleDrawerClose} open={open} />

            <Main open={open}>
                <DrawerHeader />
                <Outlet />
            </Main>
        </Box>
    );
}
export default UserLayout