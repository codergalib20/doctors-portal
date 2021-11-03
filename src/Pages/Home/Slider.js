import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../images/bg.jpg';
import chair from '../../images/chair.png';
import './Home.css';

const banner = {
    background: `url(${bg}) left top no-repeat`,
    backgroundSize: 'contain',
    overflow: 'hidden',
    height : '100vh',
}
    const verticleCenter ={
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
}

const Slider = () => {
    return (
        <Box style={{background : '#3a4256'}} >
            <Box id="slider" style={banner}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid style={verticleCenter} item xs={12} md={6}>
                            <Box>
                                <Typography style={{fontWeight: 500, color : '#333'}} variant="h3">
                                    Your New Smile 
                                    <br />
                                    Status Here
                                </Typography>             
                                <Typography py="15px" width="80%" style={{fontSize : '14px', color: 'gray'}} variant="h6">
                                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eaque placeat tempore ex quas facilis assumenda, perspiciatis atque consectetur cum in iure dolores sapiente recusandae quibusdam?
                                </Typography>       
                                <Button variant="contained" style={{background:`#33c9dc`, padding: '10px 10px',}}>GET APPOINTMENT</Button>
                            </Box>
                        </Grid>
                        <Grid style={verticleCenter} item xs={12} md={6}>
                            <img style={{width: '100%'}} src={chair} alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Slider;