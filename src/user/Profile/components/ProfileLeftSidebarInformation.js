import { useState } from "react";
import { PhotoCamera } from "../../../librarys/MUIIcons";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "../../../librarys/MUILibrary";
const ProfileLeftSidebarInformation = () => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const ProfileTypes = [
        { id: 1, name: "Overview" },
        { id: 2, name: "Contact info" },
        // { id: 3, name: "Work And Education" },
        { id: 4, name: "Websites and social links" },
        { id: 5, name: "Work And Education" },
        { id: 6, name: "Address Information" },
    ]
    return (
        <>
            {
                ProfileTypes.map((type) => (
                    <Accordion key={type.id} elevation={1} expanded={expanded === type?.id} onChange={handleChange(type?.id)} sx={{ mb: 2 }}>
                        <AccordionSummary sx={{ borderBottom: 1, borderColor: 'divider' }}
                            expandIcon={<PhotoCamera />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography variant="h6">{type.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: '#f5f5f5' }}>
                            <Box >
                                <Typography variant="h6">EXTRA HOTEL IMAGES</Typography>

                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </>
    )
}
export default ProfileLeftSidebarInformation;