import React from 'react';
import { Card, CardContent, Typography, Grid} from '@mui/material';
import MainCart from '../../components/common/MainCart';

const UserDashboard = () => {
    return (
        <>
            <MainCart titel={"Dashbaord"} />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Card
                            </Typography>
                            <Typography color="textSecondary">
                                This is the content of card 2.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Card 2
                            </Typography>
                            <Typography color="textSecondary">
                                This is the content of card 2.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Card 3
                            </Typography>
                            <Typography color="textSecondary">
                                This is the content of card 3.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Card 3
                            </Typography>
                            <Typography color="textSecondary">
                                This is the content of card 3.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default UserDashboard;