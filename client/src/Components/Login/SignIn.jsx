import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
import imageCopy3 from '/src/media/image copy 3.png'; // Adjust the path relative to your component file

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6F31',
    },
    secondary: {
      main: '#ffffffe5',
    },
    background: {
      default: '#F9F9F9',
      paper: '#1A2E70',
    },
    text: {
      primary: '#1A2E70',
      secondary: '#1A2E70',
    },
  },
});

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
    opacity: 1;
  }
`;

function SportsSignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', { username, password });
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('username', response.data.userusername);
        localStorage.setItem('role', response.data.role);
        localStorage.setItem('id', response.data.userId);
        localStorage.setItem('group', response.data.group);
      }

      console.log(localStorage.getItem('id'));
      console.log(localStorage.getItem('role'));
      console.log(localStorage.getItem('username'));
      console.log(localStorage.getItem('group'));

      if (response.data.role === 'student') {
        navigate('/student/student-wall');
      } else if (response.data.role === 'academy') {
        navigate('/academy/academy-wall');
      } else if (response.data.role === 'admin') {
        navigate('/admin');
      } else {
        alert('Invalid role');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid username or password');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
          backgroundImage: `url(${imageCopy3})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#1d4f6799', // Dark navy with opacity
            zIndex: 0, // Ensure this is behind the form
          }}
        />
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
            borderRadius: '20px',
            p: 4,
            position: 'relative', // Ensure it is above the overlay
            zIndex: 1,
            animation: `${fadeIn} 1.5s ease-out`,
          }}
        >
          <CssBaseline />
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                InputLabelProps={{
                  style: { color: '#FF6F31' },
                }}
                InputProps={{
                  style: { color: '#1d4f67' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#FF6F31',
                    },
                    '&:hover fieldset': {
                      borderColor: '#FF6F31',
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{
                  style: { color: '#FF6F31' },
                }}
                InputProps={{
                  style: { color: '#1d4f67' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#FF6F31',
                    },
                    '&:hover fieldset': {
                      borderColor: '#FF6F31',
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
              <Button
                onClick={() => navigate("/")}
                fullWidth
                variant="contained"
                sx={{
                  mt: 1,
                  mb: 2,
                  animation: `${fadeIn} 2.4s ease-out`,
                }}
              >
                Back to Main Page
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SportsSignIn;
