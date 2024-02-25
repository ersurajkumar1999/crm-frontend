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
import { CalculateDateTime } from '../../../helpers/CalculateDateTime';

const UserList = ({ users }) => {
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
                        users.map((user, index) => (
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
                                        primary={user?.users[1]?.username}
                                        secondary={
                                            <>
                                                {"this last msg"}
                                                <ListItem disableGutters secondaryAction={CalculateDateTime(user.updatedAt)} ></ListItem>
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