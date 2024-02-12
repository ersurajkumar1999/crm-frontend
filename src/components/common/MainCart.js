import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

function MainCart({titel}) {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#a39c9c', color: "black", mb: 4, boxShadow: 'none' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {titel}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default MainCart