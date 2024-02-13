// import React from 'react';
// import { Grid, Typography } from '@mui/material';

// const Feed = () => {
//     return (
//         <>
//             <Grid container>
//                 <Grid item xs={12} >
//                     <Typography variant="h5" className="header-message">Feed</Typography>
//                 </Grid>
//             </Grid>
//         </>
//     );
// }

// export default Feed;

import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";
import Rightbar from "./Rightbar";

const Feed = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, [3000]);

    return (
        <>
            <Box flex={4} p={{ xs: 0, md: 2 }}>
                {loading ? (
                    <Stack spacing={1}>
                        <Skeleton variant="text" height={100} />
                        <Skeleton variant="text" height={20} />
                        <Skeleton variant="text" height={20} />
                        <Skeleton variant="rectangular" height={300} />
                    </Stack>
                ) : (
                    <>
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </>
                )}
            </Box>
            <Rightbar />
        </>
    );
};

export default Feed;
