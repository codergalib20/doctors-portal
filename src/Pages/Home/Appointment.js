import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import appointmentBg from '../../images/appointment-bg.png';
import doctor from '../../images/doctor.png';

const appointment = {
    backgroundImage: `linear-gradient(#40485cfa, #40485cf3),url(${appointmentBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '425px',
    marginTop: '200px',
}

const Appointment = () => {
    return (
        <Box style={appointment}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <img width="100%" style={{position: 'relative' ,top: '-163px'}} src={doctor} alt="Doctor Images" />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{display : 'flex', height: '425px', alignItems: 'flex-start', justifyContent: 'space-evenly', flexDirection : 'column'}}>
                        <Typography color="#1cc7c1" variant="h6">
                            APPOINTMENT
                        </Typography>
                        <Typography variant="h3" fontWeight="500" color="#fff">
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="p" style={{fontSize : '18px', fontWeight : '400'}} color="#fff">
                            It is a long established fact that a reader will be distractedby readble content of a page when looking at its.
                        </Typography>
                        <Button variant="contained" style={{background:`#33c9dc`, padding: '10px 10px',}}>GET APPOINTMENT</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Appointment;