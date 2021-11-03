import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import cavity from '../../images/cavity.png';
import fluoride from '../../images/fluoride.png';
import whitening from '../../images/whitening.png';

const Services = () => {
    return (
        <Box style={{padding : '50px 0'}}>
            <Container>
                <Typography variant="h6" color="#1cc7c1" align="center">Our Services</Typography>
                <Typography variant="h3" color="#333" align="center" mt="20px" fontWeight="500">Services We Provided</Typography>
            </Container>
            <Container style={{paddingTop : '100px'}}>
                <Grid container spacing={10}>
                    <Grid align="center" item xs={12} sm={6} md={4}>
                        <img style={{width : '70px'}} src={fluoride} alt="" />
                        <Typography color="#555" py="20px" fontWeight="600" variant="h6">Fluoride Treatment</Typography>
                        <Typography style={{color : '#999', fontSize : '17px'}} variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ea ad deserunt doloribus dignissimos, laborum eaque illum obcaecati odio iusto?</Typography>
                    </Grid>
                    <Grid align="center" item xs={12} sm={6} md={4}>
                        <img style={{width : '70px'}} src={whitening} alt="" />
                        <Typography color="#555" py="20px" fontWeight="600" variant="h6">Cavity Filling</Typography>
                        <Typography style={{color : '#999', fontSize : '17px'}} variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel eveniet in mollitia fugit commodi, quidem inventore fuga est quo.</Typography>
                    </Grid>
                    <Grid align="center" item xs={12} sm={6} md={4}>
                        <img style={{width : '70px'}} src={cavity} alt="" />
                        <Typography color="#555" py="20px" fontWeight="600" variant="h6">Teth Whitening</Typography>
                        <Typography style={{color : '#999', fontSize : '17px'}} variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at non dolor eveniet repellat voluptate in cumque maiores enim et!</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;