import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';

const UserList = ({ searchResults }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <>
            <Box sx={{ width: '100%', mt: 2, maxWidth: '100%', height: '400px', overflow: 'auto', bgcolor: 'background.paper' }}>
                <Button size="medium" variant="outlined">Create Group</Button>
                <List component="nav" aria-label="main mailbox folders" >
                    <Divider />
                    {
                        searchResults.map((user, index) => (
                            <>
                                <ListItemButton
                                    key={user._id}
                                    selected={selectedIndex === index}
                                    onClick={(event) => handleListItemClick(event, index)}
                                >
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/146355358?v=4" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={user.name}
                                        secondary={
                                            <>
                                                {"this last msg"}
                                                <ListItem disableGutters secondaryAction={'1 day ago'} ></ListItem>
                                            </>
                                        }
                                    />
                                </ListItemButton>
                                <Divider />
                            </>
                        ))
                    }
                </List>
                <Divider />
            </Box>
        </>
    );
}
export default UserList;