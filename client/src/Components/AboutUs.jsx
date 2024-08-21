
import { Box, Typography, Container, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';

function AboutUs() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">  {/* Increased width to 'lg' */}
        {/* Card Wrapper */}
        <Card sx={{ boxShadow: 3, width: '100%', maxWidth: 1200, margin: '0 auto' }}>  {/* Increased maxWidth and centered */}
          <CardContent sx={{ py: 3 }}>  {/* Reduced vertical padding */}
            {/* Title Section */}
            <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1d4f67' }}>
              ABOUT US
            </Typography>
            <Typography variant="body1" align="center" color="#1d4f67" paragraph sx={{ mb: 2 }}>  {/* Reduced margin bottom */}
              Our website is expertly designed for the unique needs of athletic academies. It provides a comprehensive platform
              covering every aspect of academy management, crafted to simplify and streamline these administrative tasks.
            </Typography>

            {/* Main Content */}
            <Grid container spacing={3} alignItems="center">
              {/* Image Section */}
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image="/src/media/image copy 2.png"
                  alt="Academy Image"
                  sx={{ borderRadius: 2, height: 300 }}  
                />
              </Grid>

              {/* Text Content Section */}
              <Grid item xs={12} md={6}>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: '#1d4f67' }}>
                  Welcome to  <span style={{ color: '#FFB300' }}>Athletify</span>
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#1d4f67', mt: 2 }}>
                  Our platform offers a wide range of features aimed at enhancing productivity and organization within the
                  academy. It enables owners and sub-admins to easily oversee student information, manage training schedules,
                  post announcements, and track payments.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#1d4f67', mb: 3 }}>  {/* Reduced margin bottom */}
                  By consolidating these essential functions into a single, user-friendly interface, we minimize the time and
                  effort needed to keep the academy running smoothly. With our solution, you can expect a more organized,
                  effective, and responsive management experience for your athletic academy.
                </Typography>
                {/* <Button variant="contained" color="warning" sx={{ textTransform: 'none' }}>
                  Learn More
                </Button> */}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AboutUs;
