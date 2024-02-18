import { Box, Stack, Skeleton, Grid } from "@mui/material";
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
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Box >
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
                                <Post />
                                <Post />
                                <Post />
                                <Post />
                            </>
                        )}
                    </Box>
                </Grid>
            </Grid>

            <Rightbar />
        </>
    );
};

export default Feed;
