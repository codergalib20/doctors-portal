import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { MdOutlinePhoneInTalk, MdPlace, MdSchedule } from "react-icons/md";
import './Home.css';

const verticalAlign = {
    display: 'flex',
    alignItems: 'center',
    minHeight: '120px'
}

const BannerItems = () => {
    return (
        <Container style={{marginTop: '-60px'}}>
            <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box style={{...verticalAlign, background : '#1cc7c1', color : '#fff', borderRadius : '5px'}}>
                            <Box style={{width: '30%', textAlign : 'center'}}>
                               <MdSchedule style={{fontSize: '50px'}}/>
                            </Box>
                            <Box style={{width : '70%'}}>
                                <Typography variant="h6">Opening Hours</Typography>
                                <Typography style={{fontSize : '14px'}}>
                                   Lorem ipsum is simply
                                   <br />
                                   dummy text of the pri.    
                                </Typography>
                            </Box>
                        </Box> 
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box style={{...verticalAlign, background : '#3a4256', color : '#fff', borderRadius : '5px'}}>
                            <Box style={{width: '30%', textAlign : 'center'}}>
                               <MdPlace style={{fontSize: '50px'}}/>
                            </Box>
                            <Box style={{width : '70%'}}>
                                <Typography variant="h6">Visit Our Location</Typography>
                                <Typography style={{fontSize : '14px'}}>
                                   Brooklyn, NY 10036, United States.    
                                </Typography>
                            </Box>
                        </Box> 
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box style={{...verticalAlign, background : '#1cc7c1', color : '#fff', borderRadius : '5px'}}>
                            <Box style={{width: '30%', textAlign : 'center'}}>
                               <MdOutlinePhoneInTalk style={{fontSize: '50px'}}/>
                            </Box>
                            <Box style={{width : '70%'}}>
                                <Typography variant="h6">Contact Us Now</Typography>
                                <Typography style={{fontSize : '14px'}}>
                                   +000-1-202-555-0190    
                                </Typography>
                            </Box>
                        </Box> 
                    </Grid>
            </Grid>
        </Container>
    );
};

export default BannerItems;