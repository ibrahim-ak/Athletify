import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Navbar() {
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
            <Button sx={{ color: '#fff' }} href="#home">
              Home
            </Button>
            <Button sx={{ color: '#fff' }} href="#about">
              About
            </Button>
            <Button sx={{ color: '#fff' }} href="#services">
              Services
            </Button>
            <Button sx={{ color: '#fff' }} href="#contact">
              Contact
            </Button>
            <Button sx={{ color: '#fff' }} href="#contact">
              Partners
            </Button>
          </Box>
          <Button sx={{ color: 'white', marginLeft: 2,  border:"2px solid rgb(250 102 25)", backgroundColor:"rgb(250 132 25)" }} href="#login">
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
