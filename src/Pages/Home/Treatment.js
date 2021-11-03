import { Button, Container, Grid, Typography } from "@mui/material";
import treatment from "../../images/treatment.png";
const Treatment = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                    <img style={{maxWidth: '100%'}} src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={7} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Typography variant="h3" color="#444" fontWeight="500">Exceptional Dental
                     <br />
                     Care, on Your Terms</Typography>
                    <Typography variant="h6" color="#666" style={{display: 'block' , margin : '30px 0', lineHeight: '28px'}}>It is a long establish fact that reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using `Content here content here`, making it look like readable English. Many desktop publishing packages and web page</Typography>
                     <br />
                    <Button variant="contained" style={{background:`#33c9dc`, padding: '10px 30px'}}>Learn More</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Treatment;