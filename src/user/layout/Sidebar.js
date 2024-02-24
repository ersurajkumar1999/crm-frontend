import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
    Drawer, List, Divider,
    ListItem, ListItemButton, ListItemIcon,
    ListItemText,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from 'react-router-dom';
const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export const Sidebar = ({ open, handleDrawerClose }) => {
    const theme = useTheme();
    const routes = [
        { name: 'Dashboard', slug: '/', icon: <DashboardIcon /> },
        { name: 'MyNetwork', slug: 'my-network', icon: <Diversity3Icon /> },
        { name: 'Feed', slug: 'feed', icon: <Diversity1Icon /> },
        { name: 'chat', slug: 'chat', icon: <ChatIcon /> },
    ];
    const otherroutes = [
        { name: 'Profile', slug: 'profile', icon: <AccountCircleIcon /> },
        { name: 'Logout', slug: 'logout', icon: <LogoutIcon /> },
    ]
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {
                    routes.map((route) => (
                        <ListItem disablePadding key={route.slug}>
                            <ListItemButton
                                component={Link}
                                to={route.slug}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {route.icon}
                                </ListItemIcon>
                                <ListItemText primary={route.name} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
            <Divider />
            <List>
                {otherroutes.map((route, index) => (
                    <ListItem disablePadding key={route.slug}>
                        <ListItemButton
                            component={Link}
                            to={route.slug}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {route.icon}
                            </ListItemIcon>
                            <ListItemText primary={route.name} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}