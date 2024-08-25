import { useEffect, useState } from 'react';

import Footer from '../Footer';
import News from '../News';
import Announcements from '../Announcements';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StudentSiteAnnouncements from './StudentSiteAnnouncements'
import { Box, Grid, Typography, Paper, Container, Divider } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedIn icon

function StudentWall() {
  const [errors, setErrors] = useState([]);
  const [academy, setThisAcademy] = useState()
  const navigate = useNavigate();
  const studentgroup = localStorage.getItem('group');

  useEffect(() => {
    fetchgroup()
    // console.log("the academy id " + academy)
  }, []);
  const fetchgroup = () => {
    // console.log("announcements of " + studentgroup)
    axios.get(`http://localhost:8000/api/group/${studentgroup}`)
      .then(res => {
        setThisAcademy(res.data.group.Academy);
        // console.log(res.data.group.Academy)
      })
      .catch(err => console.error(err));
  };

  return (
    <>


    <Box sx={{ backgroundColor: '#e6f0ff', minHeight: '100vh' }}>


    <Box sx={{ width: '100%', margin: 0, padding: 0 }}>
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
                        marginTop:'20px',
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
                <Box>
                  <h1 style={{marginLeft:'20px', fontWeight:'450', color:'rgb(250 132 25)'}}>Welcome 'Student'!</h1>
                  <h4 style={{marginLeft:'25px', color:'rgb(250 132 25)', fontWeight:'400'}}>Contact Us:</h4>
                <Box
                    sx={{
                        // color: '#f8e4d7', // Beige text color
                        padding: '30px',
                        borderRadius: '8px',
                        textAlign: 'left',
                        width: '500px',
                        marginLeft: '20px',
                        backgroundColor:'#ffffff45'
                    }}>
                  <Typography variant="body1" sx={{ fontSize: '16px', marginBottom: '10px' }}>
                                <strong>Phone:</strong> +1 (123) 456-7890
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '16px', marginBottom: '10px' }}>
                                <strong>Email:</strong> contact@athletify.com
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '16px', marginBottom: '10px' }}>
                                <strong>Location:</strong> 1234 Sports Avenue, Fitness City, FC 56789
                            </Typography>
                            <FacebookIcon sx={{ color: '#3b5998', fontSize: '30px', marginRight: '10px', cursor: 'pointer' }} />
                                <TwitterIcon sx={{ color: '#1da1f2', fontSize: '30px', marginRight: '10px', cursor: 'pointer' }} />
                                <InstagramIcon sx={{ color: '#e4405f', fontSize: '30px', marginRight: '10px', cursor: 'pointer' }} />
                                <LinkedInIcon sx={{ color: '#0077b5', fontSize: '30px', cursor: 'pointer' }} /> {/* LinkedIn Icon */}
                </Box>
                </Box>
            </Box>

            {/* Main content section */}
        </Box>
        <h1 style={{ textAlign: 'center', marginTop:'30px',  backgroundColor:'#ffffff87', color: 'rgb(250 132 25)'  }}>What's Happening at AcademyName? <br/> Achievements, Events, and More!</h1>

        {academy && <News academy={academy}/>}
        {academy && <StudentSiteAnnouncements academy={academy}/>}
      
    </Box>
    <Footer />


    </>
  );
}

export default StudentWall;
