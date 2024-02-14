import { Card, CardContent, Grid, Typography } from "@mui/material"

const AboutSection = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Basic Information
                        </Typography>
                        <Grid item xs={6} sm={6} md={6}>
                            <Typography color="textSecondary">
                                This is the content of card 2.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Typography color="textSecondary">
                                This is the content of card 2.
                            </Typography>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
export default AboutSection