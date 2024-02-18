import { useState } from "react";
import { Card, CardContent, Typography, Tabs, Tab } from "../../../librarys/MUILibrary";

import { styled } from "../../../librarys/MUIStyles";

const ProfileSidebarInformation = () => {
    const StyledCardContent = styled(CardContent)({
        marginTop: 20,
    });
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <>
            <Card>
                <StyledCardContent>
                    <Tabs value={selectedTab} onChange={handleTabChange} aria-label="profile tabs" variant="fullWidth">
                        <Tab label="About" />
                        <Tab label="Reels" />
                        <Tab label="Saved" />
                        <Tab label="photos" />

                        {/* Add more tabs here for additional sections */}
                    </Tabs>
                    {selectedTab === 0 && (
                        "AboutSection"
                    )}
                    {selectedTab === 1 && (
                        <Typography variant="body1">
                            This is the About section.
                        </Typography>
                    )}
                    {selectedTab === 2 && (
                        <Typography variant="body1">
                            This is the Posts section.
                        </Typography>
                    )}
                    {selectedTab === 3 && (
                        <Typography variant="body1">
                            This is the About section.
                        </Typography>
                    )}
                    {/* Add more sections corresponding to each tab */}
                </StyledCardContent>
            </Card>
        </>
    )
}
export default ProfileSidebarInformation;