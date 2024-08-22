import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

function AboutUs() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#ffb65da1' , marginBottom:'30px'}}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image="/src/media/image copy 2.png" // Adjust the image path as needed
              alt="Academy Image"
              sx={{ borderRadius: '12px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' }}
            />
          </Grid>

          {/* Text Content Section */}
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1d4f67' }}>
                About <span style={{ color: '#fb841a' }}>Athletify</span>
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#4f5d75', lineHeight: 1.8 }}>
                Athletify is a platform designed specifically for athletic academies, offering a comprehensive solution to manage
                all aspects of academy administration. Our platform simplifies tasks such as student information management,
                training schedules, announcements, and payments, making it easier for owners and sub-admins to keep everything
                running smoothly.
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#4f5d75', lineHeight: 1.8 }}>
                By streamlining these essential functions into a single, user-friendly interface, Athletify reduces the time and effort
                required to manage an academy. Our goal is to provide a more organized, efficient, and responsive management
                experience, so you can focus on what matters most: training and developing your athletes.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;
