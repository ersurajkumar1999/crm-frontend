import { Grid, CardContent, Card, Typography } from "../../../librarys/MUILibrary";
const AboutSection = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Basic Information
                        </Typography>
                        <Typography color="textSecondary">
                            Name:Suraj
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
export default AboutSection;
