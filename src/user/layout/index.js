import { Outlet, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

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
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (!user?.isLoggedIn) {
            navigate('/auth/login')
            console.log("user auto logout");
        }
    }, [user])
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