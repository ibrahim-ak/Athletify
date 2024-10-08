import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function StaticNavBar(props) {

  const navigate = useNavigate();

function logout() {
  console.log("helloooo logged out")
  localStorage.removeItem('authToken');

  navigate('/login');
}

  return (
    <AppBar   position='static' sx={{ backgroundColor: '#1d4f67' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <img src="\src\media\logo8-removebg-preview.png" alt="Logo" style={{ height: '60px', margin: '5px' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <Button sx={{ color: '#fff' }} href={props.link1}>
              {props.tab1}
            </Button>
            <Button sx={{ color: '#fff' }} href={props.link2}>
            {props.tab2}
            </Button>
            <Button sx={{ color: '#fff' }} href={props.link3}>
              {props.tab3}
            </Button>

          </Box>
          <Button onClick={logout} sx={{ color: 'white', marginLeft: 2,  border:"2px solid rgb(250 102 25)", backgroundColor:"rgb(250 132 25)" }} >
            Logout
          </Button>
          <IconButton
            edge="start"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default StaticNavBar;
