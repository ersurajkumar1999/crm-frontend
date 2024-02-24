import React from 'react';
import Image404 from '../../assets/images/404.png';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';

const Page404 = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ display: 'flex', margin: 'auto', justifyContent: 'center' }}>
                <img src={Image404} alt='404 page' loading="lazy" />
            </Box>
            <Button sx={{ display: 'flex', margin: '0 auto' }} variant="contained" color="error" onClick={() => navigate(-1)}>BACK TO HOME</Button>
        </>
    );
}

export default Page404;
