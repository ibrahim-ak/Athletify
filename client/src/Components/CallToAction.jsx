import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#000', // Fallback color
        backgroundImage: `url('/src/media/EXAM_FINAL.jpg')`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // This creates the parallax effect
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // This adds a semi-transparent overlay
          zIndex: 1,
        }}
      />
      <Box sx={{ zIndex: 2 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'white', textShadow: ' 3px 3px #1d4f67', marginBottom: '10px' }}>
          Join us today and elevate your academy to new heights!        </Typography>
        {/* <Typography variant="body1" sx={{ marginY: 2 }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Exceptetur sint occaecat cupidatat non proident.
        </Typography> */}
        <Button
          variant="outlined"
          component={Link} to="/#contact"
          sx={{
            marginTop: '30px',
            borderColor: 'white',
            color: 'white',
            fontWeight: 'bold',
            '&:hover': {
              borderColor: '#FF5722',
              color: '#FF5722',
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}

export default CallToAction;
