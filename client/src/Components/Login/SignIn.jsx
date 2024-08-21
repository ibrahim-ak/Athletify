import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { createTheme, ThemeProvider, keyframes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6F31', // Vibrant Orange
    },
    secondary: {
      main: '#ffffffe5', 
      
    },
    background: {
      default: '#F9F9F9', // Soft White
      paper: '#1A2E70', // Dark Navy for paper background
    },
    text: {
      primary: '#1A2E70', // Soft White
      secondary: '#1A2E70', // Soft Yellow for secondary text
    },
  },
});

// Define keyframe animations
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 2;
  }
`;

function SportsSignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
          backgroundImage: 'url(https://png.pngtree.com/thumb_back/fw800/background/20230901/pngtree-an-image-of-sports-equipment-and-equipment-image_13168221.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            bgcolor: 'secondary.main',
            borderRadius: '20px', // Adding border radius
            p: 4,
            animation: `${fadeIn} 1.5s ease-out`,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              animation: `${fadeIn} 1.5s ease-out`,
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: 'primary.main',
                animation: `${bounce} 2s infinite`,
              }}
            >
              <SportsSoccerIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: 'text.primary' }}>
              Sports Academy Sign In
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                InputLabelProps={{
                  style: { color: '#FF6F31' }, // Soft Yellow for labels
                }}
                InputProps={{
                  style: { color: '#F9F9F9' }, // Soft White for input text
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#FF6F31', // Soft Yellow border
                    },
                    '&:hover fieldset': {
                      borderColor: '#FF6F31', // Soft Yellow border on hover
                    },
                  },
                  animation: `${fadeIn} 2s ease-out`,
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{
                  style: { color: '#FF6F31' }, // Soft Yellow for labels
                }}
                InputProps={{
                  style: { color: '#F9F9F9' }, // Soft White for input text
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#FF6F31', // Soft Yellow border
                    },
                    '&:hover fieldset': {
                      borderColor: '#FF6F31', // Soft Yellow border on hover
                    },
                  },
                  animation: `${fadeIn} 2.2s ease-out`,
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  animation: `${fadeIn} 2.4s ease-out`,
                }}
              >
                Sign In
              </Button>
             
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SportsSignIn;
