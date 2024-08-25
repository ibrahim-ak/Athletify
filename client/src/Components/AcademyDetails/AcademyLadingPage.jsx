import React from 'react';
import { Box, Grid, Typography, Paper, Container, Divider } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedIn icon
import { fontWeight } from '@mui/system';

const AcademyLandingPage = () => {
    return (
        <Box sx={{ width: '100%', margin: 0, padding: 0 , marginTop:'50px'}}>
            {/* Full-width banner with vibrant background */}
            <Box
                sx={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: '#1d4f67',
                    backgroundImage: 'linear-gradient(120deg, #1d4f67, #376c98)', // Gradient effect
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '40px'
                }}
            >
                <Box
                    component="img"
                    src="/src/media/pngtree-volleyball-club-badge--logo-png-image_5138391.jpg"
                    alt="Academy Logo"
                    sx={{
                        width: '250px',
                        height: '250px',
                        marginRight: '20px',
                        borderRadius: '50%',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
                        border: '5px solid white',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5)',
                        },
                    }}
                />
                <Box
                    sx={{
                        // color: '#f8e4d7', // Beige text color
                        padding: '30px',
                        borderRadius: '8px',
                        textAlign: 'left',
                        width: '50%',
                        marginLeft: '20px'
                    }}
                >
                    <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px', color:'rgb(250 132 25)'}}>
                        About Champions
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '20px' , color:'white', textAlign: 'justify'}}>
                    <span style={{fontWeight:'600' , color:'rgb(250 132 25)'}}> Champions Academy </span> is a premier sports training center dedicated to nurturing young athletes and helping them reach their full potential. Our state-of-the-art facilities and expert coaches provide a supportive environment where athletes can hone their skills, improve their performance, and develop both physically and mentally. At Champions Academy, we offer a wide range of programs in various sports, including soccer, basketball, tennis, and swimming, catering to athletes of all ages and skill levels.  </Typography>
                </Box>
            </Box>

            {/* Main content section */}
            <Container    sx={{
                    width: '120%', // Ensure the background color and image cover the full width
                    padding: '60px 0',
                    // backgroundColor: '#f0f4f8',
                    // backgroundImage: `url('/src/media/8c63a60a7f494a30146aa0590411fef4.jpg')`, // Correctly setting the background image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}> {/* Light blue background */}
            
                <Grid container spacing={4}>
                    {/* Left Column: Awards Section */}
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1d4f67', marginBottom: '20px'}}>
                            <EmojiEventsIcon sx={{ color: '#fa8419', marginRight: '10px' }} /> Awards & Achievements
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '22px', color: '#1d4f67', lineHeight:'2' }}>
                            - Best Sports Academy 2023 <br />
                            - Excellence in Training Award 2022 <br />
                            - Top Innovator in Athletic Management 2021<br/>
                            - Most Innovative Use of Technology in Sports 2020 <br/>
                            - Outstanding Community Engagement Award 2019
                        </Typography>
                    </Grid>
                    

                    {/* Right Column: Information Section with Transparent Background */}
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: 3, borderRadius: '8px' }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', color: '#1d4f67' }}>
                                Contact Information
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '16px', marginBottom: '10px' }}>
                                <strong>Phone:</strong> +1 (123) 456-7890
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '16px', marginBottom: '10px' }}>
                                <strong>Email:</strong> contact@athletify.com
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '16px', marginBottom: '10px' }}>
                                <strong>Location:</strong> 1234 Sports Avenue, Fitness City, FC 56789
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <FacebookIcon sx={{ color: '#3b5998', fontSize: '30px', marginRight: '10px', cursor: 'pointer' }} />
                                <TwitterIcon sx={{ color: '#1da1f2', fontSize: '30px', marginRight: '10px', cursor: 'pointer' }} />
                                <InstagramIcon sx={{ color: '#e4405f', fontSize: '30px', marginRight: '10px', cursor: 'pointer' }} />
                                <LinkedInIcon sx={{ color: '#0077b5', fontSize: '30px', cursor: 'pointer' }} /> {/* LinkedIn Icon */}
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AcademyLandingPage;
