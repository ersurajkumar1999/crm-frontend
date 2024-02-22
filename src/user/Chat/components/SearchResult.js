import React from 'react'
import {
    Box, List, Divider, ListItemButton, ListItemAvatar, Avatar, ListItem, Button, ListItemText
} from "../../../librarys/MUILibrary";
const SearchResult = ({ searchResults }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <Box sx={{ width: '100%', mt: 2, maxWidth: '100%', height: '400px', overflow: 'auto', bgcolor: 'background.paper' }}>

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
                                            {user.email}
                                            <ListItem disableGutters secondaryAction={'1 day ago'} ><Button size="medium" variant="outlined">Add</Button></ListItem>
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
    )
}

export default SearchResult