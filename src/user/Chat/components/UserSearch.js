import React from 'react'
import {
    Typography,
    TextField
} from "../../../librarys/MUILibrary";
const UserSearch = ({ handleSearchUser, search }) => {
    return (
        <>
            <Typography variant="h6" component="h6" sx={{ mb: 1 }}>Messages</Typography>
            <TextField
                id="outlined-basic"
                label="Search"
                value={search}
                name='user_search'
                variant="outlined"
                sx={{ width: '100%', mb: 1 }}
                onChange={handleSearchUser}
            />
        </>
    )
}

export default UserSearch