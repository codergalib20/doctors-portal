import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Testimonial = () => {
    return (
        <Box>
            <Container style={{padding: '100px 0'}}>
                <Typography variant="h6" color="#20b498">TESTIMONIAL</Typography>
                <Typography variant="h3" color="#222" fontWeight="500">What's our patients 
                  <br />
                  Says
                </Typography>
            </Container>
            <Container></Container>
        </Box>
    );
};

export default Testimonial;