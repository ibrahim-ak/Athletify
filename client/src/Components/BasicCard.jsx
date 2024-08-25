import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function PartnersDisplay() {
  return (
    <div style={{ marginTop: '50px', marginBottom: '100px' }}>
    <Typography variant="h4" align="center" gutterBottom>
      Our Partners
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* First Row */}
        <Grid item xs={12} sm={3} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/academy/details" style={{ textDecoration: 'none' }}> {/* Link to the specific route */}
            <Box
              sx={{
                width: 180,
                height: 180,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  '& .overlay': {
                    opacity: 1,
                  },
                  '& img': {
                    filter: 'brightness(0.7)',
                  },
                },
              }}
            >
              <img
                src="/src/media/pngtree-volleyball-club-badge--logo-png-image_5138391.jpg"
                alt="Logo 1"
                style={{ width: '230px', height: '230px', objectFit: 'contain' }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" sx={{ color: '#fff' }}>
                  Academy 1
                </Typography>
              </Box>
            </Box>
          </Link>
        </Grid>

          <Grid item xs={12} sm={3} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: 180,
                height: 180,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  '& .overlay': {
                    opacity: 1,
                  },
                  '& img': {
                    filter: 'brightness(0.7)',
                  },
                },
              }}
            >
              <img
                src="/src/media/Logo-1@4x (1).png"
                alt="Logo 2"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" sx={{ color: '#fff' }}>
                  Academy 2
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: 180,
                height: 180,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  '& .overlay': {
                    opacity: 1,
                  },
                  '& img': {
                    filter: 'brightness(0.7)',
                  },
                },
              }}
            >
              <img
                src="/src/media/images.png"
                alt="Logo 3"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" sx={{ color: '#fff' }}>
                  Academy 3
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: 180,
                height: 180,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  '& .overlay': {
                    opacity: 1,
                  },
                  '& img': {
                    filter: 'brightness(0.7)',
                  },
                },
              }}
            >
              <img
                src="/src/media/images (2).png"
                alt="Logo 4"
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '15px' }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" sx={{ color: '#fff' }}>
                  Academy 4
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Second Row */}
          <Grid item xs={12} sm={3} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: 180,
                height: 180,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  '& .overlay': {
                    opacity: 1,
                  },
                  '& img': {
                    filter: 'brightness(0.7)',
                  },
                },
              }}
            >
              <img
                src="/src/media/5fd2e55d-51a7-4abf-9814-47609df62cf5_image_jpeg.webp"
                alt="Logo 5"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" sx={{ color: '#fff' }}>
                  Academy 5
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: 180,
                height: 180,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  '& .overlay': {
                    opacity: 1,
                  },
                  '& img': {
                    filter: 'brightness(0.7)',
                  },
                },
              }}
            >
              <img
                src="/src/media/file.png"
                alt="Logo 6"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" sx={{ color: '#fff' }}>
                  Academy 6
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: 180,
                height: 180,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  '& .overlay': {
                    opacity: 1,
                  },
                  '& img': {
                    filter: 'brightness(0.7)',
                  },
                },
              }}
            >
              <img
                src="/src/media/logo-of-a-swimmer-swimming-club-or-swimming-school-logo-design-template-inspiration-vector.jpg"
                alt="Logo 7"
                style={{ width: '250px', height: '250px', objectFit: 'contain' }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" sx={{ color: '#fff' }}>
                  Academy 7
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: 180,
                height: 180,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  '& .overlay': {
                    opacity: 1,
                  },
                  '& img': {
                    filter: 'brightness(0.7)',
                  },
                },
              }}
            >
              <img
                src="/src/media/RCF-logo-lrg.png"
                alt="Logo 8"
                style={{ width: '170px', height: '170px', objectFit: 'contain' }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" sx={{ color: '#fff' }}>
                  Academy 8
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default PartnersDisplay;
