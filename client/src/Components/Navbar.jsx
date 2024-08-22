import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GroupIcon from '@mui/icons-material/Group';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';

function Navbar({ homeRef, aboutRef, servicesRef, contactRef, partnersRef }) {
  const handleScroll = (ref) => {
    const offsetTop = ref.current.offsetTop;
    const navbarHeight = document.querySelector('header.MuiAppBar-root').offsetHeight;

    // Increase the extraOffset for the Partners section
    const extraOffset = ref === partnersRef ? 200 : 80; // Adjust as needed for other sections

    window.scrollTo({
      top: offsetTop - navbarHeight - extraOffset, // Increase the scroll offset
      behavior: 'smooth',
    });
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#1d4f67' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <Typography variant="h6" component="div">
            MyLogo
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <Button sx={{ color: '#fff' }} onClick={() => handleScroll(homeRef)} startIcon={<HomeIcon />}>
              Home
            </Button>
            <Button sx={{ color: '#fff' }} onClick={() => handleScroll(aboutRef)} startIcon={<InfoIcon />}>
              About
            </Button>
            <Button sx={{ color: '#fff' }} onClick={() => handleScroll(servicesRef)} startIcon={<BuildIcon />}>
              Services
            </Button>
            <Button sx={{ color: '#fff' }} onClick={() => handleScroll(contactRef)} startIcon={<ContactMailIcon />}>
              Contact
            </Button>
            <Button sx={{ color: '#fff' }} onClick={() => handleScroll(partnersRef)} startIcon={<GroupIcon />}>
              Partners
            </Button>
          </Box>
          <Button
            sx={{ color: 'white', marginLeft: 2, border: '2px solid rgb(250 102 25)', backgroundColor: 'rgb(250 132 25)' }}
            href="#login"
            startIcon={<LoginIcon />}
          >
            Login
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

export default Navbar;

